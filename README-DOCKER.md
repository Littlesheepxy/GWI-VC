# TEST VC Website - Docker 部署指南

本指南将帮助您使用 Docker 部署 TEST VC 网站。

## 📋 前提条件

- 安装 Docker 和 Docker Compose
- 确保端口 3000 (和可选的 80, 443) 可用

## 🚀 快速启动

### 方法 1: 使用 Docker Compose (推荐)

```bash
# 克隆仓库并进入目录
git clone git@github.com:Littlesheepxy/TEST-VC.git
cd TEST-VC

# 使用 Docker Compose 启动
docker-compose up -d --build
```

### 方法 2: 使用单独的 Docker 命令

```bash
# 构建镜像
docker build -t TEST-vc-website:latest .

# 运行容器
docker run -d \
  --name TEST-vc-website \
  -p 3000:3000 \
  --restart unless-stopped \
  TEST-vc-website:latest
```

### 方法 3: 使用提供的脚本

```bash
# 赋予脚本执行权限
chmod +x scripts/*.sh

# 选项 A: 仅构建和运行 Next.js 应用
./scripts/docker-build.sh
./scripts/docker-run.sh

# 选项 B: 使用 Docker Compose (包含 Nginx)
./scripts/docker-compose-up.sh
```

## 🌐 访问应用

启动成功后，您可以通过以下方式访问网站：

- **直接访问**: http://localhost:3000
- **通过 Nginx** (如果使用 docker-compose): http://localhost

## 🌍 多语言支持

网站支持以下语言：
- 英文: `/en/`
- 中文: `/zh/`
- 日文: `/ja/`
- 阿拉伯语: `/ar/`

示例URL:
- http://localhost:3000/en
- http://localhost:3000/zh
- http://localhost:3000/ja
- http://localhost:3000/ar

## 📁 项目结构

```
.
├── Dockerfile              # 主要的 Docker 配置
├── docker-compose.yml      # Docker Compose 配置
├── nginx.conf              # Nginx 反向代理配置
├── .dockerignore           # Docker 忽略文件
├── scripts/                # 构建和部署脚本
│   ├── docker-build.sh
│   ├── docker-run.sh
│   └── docker-compose-up.sh
└── README-DOCKER.md        # 本文档
```

## 🔧 配置说明

### Dockerfile 特性

- **多阶段构建**: 优化镜像大小
- **Alpine Linux**: 轻量级基础镜像
- **非 root 用户**: 增强安全性
- **Standalone 输出**: 优化部署体积

### Docker Compose 服务

1. **TEST-website**: Next.js 应用容器
2. **nginx**: 反向代理和静态文件服务

### Nginx 配置

- 自动 HTTP 到 HTTPS 重定向
- Gzip 压缩
- 静态文件缓存
- 安全头设置

## 🛠 管理命令

### 查看运行状态
```bash
docker ps
# 或使用 docker-compose
docker-compose ps
```

### 查看日志
```bash
docker logs TEST-vc-website
# 或使用 docker-compose
docker-compose logs -f
```

### 停止服务
```bash
docker stop TEST-vc-website
# 或使用 docker-compose
docker-compose down
```

### 重新构建
```bash
docker-compose up -d --build
```

## 📊 性能优化

### 生产环境建议

1. **SSL 证书**: 
   - 将 SSL 证书放在 `./ssl/` 目录
   - 取消注释 `nginx.conf` 中的 SSL 配置

2. **环境变量**:
   - 创建 `.env.production` 文件
   - 在 docker-compose.yml 中添加环境变量

3. **域名配置**:
   - 修改 `nginx.conf` 中的 `server_name`
   - 配置 DNS 记录

### 镜像大小优化

当前 Docker 镜像已经通过以下方式优化：
- 多阶段构建
- Alpine Linux 基础镜像
- Next.js standalone 输出
- 仅复制必要文件

## 🐛 故障排除

### 常见问题

1. **端口被占用**:
   ```bash
   # 检查端口占用
   lsof -i :3000
   # 修改 docker-compose.yml 中的端口映射
   ```

2. **权限问题**:
   ```bash
   # 赋予脚本执行权限
   chmod +x scripts/*.sh
   ```

3. **构建失败**:
   ```bash
   # 清理 Docker 缓存
   docker system prune -a
   # 重新构建
   docker-compose build --no-cache
   ```

4. **依赖安装失败**:
   ```bash
   # 如果使用 pnpm，确保 pnpm-lock.yaml 存在
   # 或者删除 pnpm-lock.yaml 使用 npm
   ```

### 查看详细错误
```bash
# 查看构建过程
docker-compose up --build

# 查看容器错误
docker logs TEST-vc-website
```

## 🔄 更新部署

```bash
# 拉取最新代码
git pull origin main

# 重新构建和部署
docker-compose up -d --build
```

## 📞 技术支持

如果您在部署过程中遇到问题，请检查：
1. Docker 和 Docker Compose 版本
2. 端口是否可用
3. 系统资源是否充足
4. 网络连接是否正常

更多帮助请参考项目 GitHub 仓库的 Issues 页面。 