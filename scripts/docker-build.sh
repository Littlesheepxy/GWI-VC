#!/bin/bash

# Docker构建脚本
echo "🐳 开始构建 Docker 镜像..."

# 构建镜像
docker build -t gwi-vc-website:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker 镜像构建成功！"
    echo "📊 查看镜像信息："
    docker images gwi-vc-website:latest
else
    echo "❌ Docker 镜像构建失败！"
    exit 1
fi 