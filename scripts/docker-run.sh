#!/bin/bash

# Docker运行脚本
echo "🚀 启动 Docker 容器..."

# 停止现有容器（如果存在）
docker stop gwi-vc-website 2>/dev/null || true
docker rm gwi-vc-website 2>/dev/null || true

# 运行新容器
docker run -d \
  --name gwi-vc-website \
  -p 3000:3000 \
  --restart unless-stopped \
  gwi-vc-website:latest

if [ $? -eq 0 ]; then
    echo "✅ 容器启动成功！"
    echo "🌐 应用已在 http://localhost:3000 上运行"
    echo "📋 容器状态："
    docker ps | grep gwi-vc-website
else
    echo "❌ 容器启动失败！"
    exit 1
fi 