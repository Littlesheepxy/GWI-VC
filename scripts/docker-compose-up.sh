#!/bin/bash

# Docker Compose启动脚本
echo "🚀 使用 Docker Compose 启动服务..."

# 停止现有服务
docker-compose down

# 构建并启动服务
docker-compose up -d --build

if [ $? -eq 0 ]; then
    echo "✅ 所有服务启动成功！"
    echo "🌐 网站可以通过以下方式访问："
    echo "   - 直接访问: http://localhost:3000"
    echo "   - 通过 Nginx: http://localhost"
    echo ""
    echo "📋 运行中的容器："
    docker-compose ps
else
    echo "❌ 服务启动失败！"
    exit 1
fi 