# 🎬 Hero视频实现指南

## 📁 视频文件结构

将你的视频文件放在 `public/videos/` 目录下，按以下命名规范：

```
public/
├── videos/
│   ├── hero-earth.mp4          # 首页 - 地球夜景视频
│   ├── hero-earth.webm         # 首页 - WebM格式（更小）
│   ├── hero-portfolio.mp4      # Portfolio页面 - 登山视频
│   ├── hero-portfolio.webm
│   ├── hero-volcano.mp4        # Incubator页面 - 火山视频
│   ├── hero-volcano.webm
│   ├── hero-mountains.mp4      # Contact页面 - 山脉视频
│   ├── hero-mountains.webm
│   └── hero-office.mp4         # About页面 - 办公场景视频
│       hero-office.webm
└── images/                     # Fallback静态图片
    ├── earth-night-lights.jpg
    ├── hero-portfolio.jpg
    ├── hero-volcano.jpg
    ├── hero-mountains.jpg
    └── gwi-office.jpg
```

## 🎯 推荐的视频规格

### 技术规格
- **分辨率**: 1920x1080 (Full HD) 或 2560x1440 (2K)
- **时长**: 10-30秒循环
- **帧率**: 30fps 或 60fps
- **格式**: MP4 (H.264) + WebM (VP9) 双格式
- **压缩**: 高压缩比，保持视觉质量

### 文件大小建议
- **MP4**: < 5MB (移动端友好)
- **WebM**: < 3MB (更好的压缩比)

## 🎨 各页面视频主题建议

### 1. 首页 (hero-earth)
**主题**: 全球视野、科技连接
- 地球夜景延时摄影
- 城市灯光流动
- 卫星轨道动画
- 抽象的数据流可视化

### 2. Portfolio页面 (hero-portfolio)  
**主题**: 成就、突破、登峰
- 登山者攀登云端
- 成功到达山顶
- 日出/日落美景
- 鸟瞰视角的成就感

### 3. Incubator页面 (hero-volcano)
**主题**: 爆发力、创新、转型
- 火山爆发（控制性）
- 熔岩流动
- 能量释放
- 创造性破坏

### 4. Contact页面 (hero-mountains)
**主题**: 稳定、可靠、远见
- 雄伟山脉全景
- 云层穿越山峰
- 稳定而壮观
- 长远视角

### 5. About页面 (hero-office)
**主题**: 团队协作、专业
- 现代办公环境
- 团队协作场景
- 专业会议
- 科技感办公空间

## 🔧 视频优化技巧

### 1. 压缩设置
```bash
# 使用FFmpeg优化视频
ffmpeg -i input.mov \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -movflags +faststart \
  -vf "scale=1920:1080" \
  output.mp4

# 生成WebM版本
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -vf "scale=1920:1080" \
  output.webm
```

### 2. 循环无缝衔接
- 确保视频开头和结尾帧相似
- 使用渐变转场
- 避免突兀的跳跃

### 3. 移动端优化
- 自动检测低端设备，降级到静态图片
- 预加载策略
- 懒加载非关键视频

## 💡 使用示例

```tsx
import { VideoHero } from '@/components/ui/video-hero'

export default function PageComponent() {
  return (
    <VideoHero
      videoSrc="/videos/hero-earth"        // 不包含扩展名
      posterSrc="/images/earth-poster.jpg" // 视频封面
      fallbackSrc="/images/earth-night-lights.jpg" // 降级图片
      alt="Earth at night showing global connectivity"
      overlayOpacity={0.3}                 // 遮罩透明度
      enableParallax={true}                // 启用视差滚动
    >
      {/* Hero内容 */}
    </VideoHero>
  )
}
```

## 📱 性能注意事项

### 自动优化功能
- ✅ 低端设备自动降级到图片
- ✅ 移动设备检测
- ✅ 网络状况感知
- ✅ 视频预加载
- ✅ 错误处理和fallback

### 手动优化
- 使用CDN分发视频文件
- 实现渐进式加载
- 监控核心Web指标
- A/B测试不同的视频内容

## 🎬 内容建议

### ✅ 适合的视频内容
- 抽象的运动图案
- 自然景观延时摄影
- 几何动画
- 粒子系统
- 光线效果

### ❌ 避免的内容
- 分散注意力的动作
- 快速闪烁
- 过度复杂的场景
- 有声音依赖的内容
- 版权受限的素材

## 🔍 测试检查清单

- [ ] 视频在所有主流浏览器正常播放
- [ ] 移动设备上降级策略工作正常
- [ ] 视频循环无缝衔接
- [ ] 加载性能在3G网络下可接受
- [ ] 静态图片fallback正确显示
- [ ] 视差滚动效果流畅
- [ ] 无障碍功能正常（图片alt文本等） 