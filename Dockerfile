# 使用官方 Node.js 运行时作为基础镜像
FROM node:18-alpine AS base

# 安装依赖项所需的依赖包
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 安装依赖项
FROM base AS deps
# 检查 https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine 
# 了解为什么可能需要 libc6-compat。
RUN apk add --no-cache libc6-compat

WORKDIR /app

# 安装依赖项基于首选包管理器
COPY package.json pnpm-lock.yaml* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm i --frozen-lockfile; \
  else \
    echo "No pnpm lockfile found, using npm" && npm ci; \
  fi

# 重建源代码，仅在需要时
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 如果使用npm，取消下面一行的注释以在构建期间禁用遥测
# ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm run build; \
  else \
    npm run build; \
  fi

# 生产镜像，复制所有文件并运行 next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# 如果使用npm，取消下面一行的注释以在运行期间禁用遥测
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# 设置正确的权限为预渲染缓存
RUN mkdir .next
RUN chown nextjs:nodejs .next

# 自动利用输出跟踪来减少镜像大小
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# server.js 由 next build 为 standalone 输出创建
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"] 