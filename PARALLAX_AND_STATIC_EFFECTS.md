# 🌊 视差滚动与静态图片动效指南

## 🎯 什么是视差滚动？

**视差滚动** (Parallax Scrolling) 是一种创造**深度错觉**的技术：

```
用户向下滚动时：
┌─────────────────┐
│  前景文字 ↓↓↓   │ ← 正常速度移动
│                 │
│  背景图片 ↓     │ ← 较慢速度移动  
└─────────────────┘
```

### 💡 原理
- **前景内容**: 以正常速度(1:1)跟随滚动
- **背景图片**: 以较慢速度(0.5:1)移动
- **视觉效果**: 创造出"背景更远"的立体感

### 🔧 技术实现
```typescript
const { scrollYProgress } = useScroll()
const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
```

## 🎨 让静态图片"动起来"的技术

### 1. 🌟 **Ken Burns 效果** (缓慢缩放 + 平移)

```tsx
// 经典的纪录片风格动效
<motion.div
  className="absolute inset-0 overflow-hidden"
  initial={{ scale: 1 }}
  animate={{ 
    scale: 1.1,
    x: [0, -20, 0],
    y: [0, -10, 0]
  }}
  transition={{ 
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Image src="/your-image.jpg" />
</motion.div>
```

### 2. 🌈 **多层视差** (不同层以不同速度移动)

```tsx
// 背景层
<motion.div style={{ y: backgroundY, scale: backgroundScale }}>
  <Image src="/background.jpg" />
</motion.div>

// 中景层  
<motion.div style={{ y: midgroundY }}>
  <Image src="/midground.png" />
</motion.div>

// 前景层
<motion.div style={{ y: foregroundY }}>
  <div>前景内容</div>
</motion.div>
```

### 3. ✨ **浮动动画** (上下轻微移动)

```tsx
<motion.div
  animate={{
    y: [-5, 5, -5],
    rotate: [-1, 1, -1]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Image src="/floating-element.png" />
</motion.div>
```

### 4. 💫 **鼠标跟随倾斜**

```tsx
const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  setMousePos({
    x: (clientX / innerWidth - 0.5) * 20,
    y: (clientY / innerHeight - 0.5) * 20
  })
}

<motion.div
  style={{
    transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`
  }}
  onMouseMove={handleMouseMove}
>
  <Image src="/interactive-image.jpg" />
</motion.div>
```

### 5. 🌊 **波浪扭曲效果**

```css
@keyframes wave-distortion {
  0%, 100% { 
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
  50% { 
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  }
}

.wave-effect {
  animation: wave-distortion 8s ease-in-out infinite;
}
```

### 6. 🔍 **缩放脉冲**

```tsx
<motion.div
  animate={{
    scale: [1, 1.05, 1],
    filter: [
      "brightness(1) contrast(1)",
      "brightness(1.1) contrast(1.1)", 
      "brightness(1) contrast(1)"
    ]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Image src="/pulsing-image.jpg" />
</motion.div>
```

## 🚀 高级静态图片动效

### 1. **光线扫过效果**

```tsx
<div className="relative overflow-hidden">
  <Image src="/your-image.jpg" />
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    initial={{ x: "-100%" }}
    animate={{ x: "100%" }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3
    }}
  />
</div>
```

### 2. **分层景深模糊**

```tsx
// 背景 - 高斯模糊
<motion.div 
  className="absolute inset-0"
  style={{ 
    filter: "blur(2px)",
    y: backgroundY 
  }}
>
  <Image src="/background-layer.jpg" />
</motion.div>

// 中景 - 轻微模糊
<motion.div 
  style={{ 
    filter: "blur(0.5px)",
    y: midgroundY 
  }}
>
  <Image src="/midground-layer.png" />
</motion.div>

// 前景 - 清晰
<motion.div style={{ y: foregroundY }}>
  <Image src="/foreground-layer.png" />
</motion.div>
```

### 3. **粒子覆盖效果**

```tsx
// 在图片上覆盖动态粒子
<div className="relative">
  <Image src="/base-image.jpg" />
  <div className="absolute inset-0">
    {particles.map((particle, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        animate={{
          x: [particle.startX, particle.endX],
          y: [particle.startY, particle.endY],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: particle.duration,
          repeat: Infinity,
          delay: particle.delay
        }}
      />
    ))}
  </div>
</div>
```

### 4. **色彩渐变动画**

```tsx
<motion.div
  animate={{
    filter: [
      "hue-rotate(0deg) saturate(1)",
      "hue-rotate(10deg) saturate(1.2)",
      "hue-rotate(0deg) saturate(1)"
    ]
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Image src="/colorful-image.jpg" />
</motion.div>
```

## 🎯 创投基金专用效果建议

### 📈 **投资增长可视化**
```tsx
// 模拟股价上涨的动态线条
<svg className="absolute inset-0 pointer-events-none">
  <motion.path
    d="M 0 300 Q 100 250 200 200 T 400 100"
    stroke="#00A651"
    strokeWidth="2"
    fill="none"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 3, repeat: Infinity }}
  />
</svg>
```

### 🌐 **全球网络连接**
```tsx
// 连接线动画
{connections.map((line, i) => (
  <motion.div
    key={i}
    className="absolute h-px bg-gradient-to-r from-transparent via-[#00A651] to-transparent"
    style={{ 
      width: line.length,
      left: line.startX,
      top: line.startY,
      rotate: line.angle
    }}
    animate={{ 
      opacity: [0, 1, 0],
      scaleX: [0, 1, 0]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: i * 0.2
    }}
  />
))}
```

### 💎 **财富闪烁效果**
```tsx
<motion.div
  className="relative"
  animate={{
    filter: [
      "drop-shadow(0 0 0px #00A651)",
      "drop-shadow(0 0 20px #00A651)",
      "drop-shadow(0 0 0px #00A651)"
    ]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Image src="/luxury-office.jpg" />
</motion.div>
```

## 🔧 性能优化技巧

### 1. **使用 CSS Transform 而非修改位置**
```tsx
// ✅ 好 - GPU加速
style={{ transform: `translateY(${y}px)` }}

// ❌ 差 - 触发重排
style={{ top: `${y}px` }}
```

### 2. **will-change 属性**
```css
.parallax-element {
  will-change: transform;
}
```

### 3. **减少重绘的技巧**
```tsx
// 使用 transform 而不是改变 width/height
<motion.div
  style={{
    transform: `scale(${scale})`,
    transformOrigin: "center"
  }}
/>
```

## 💡 实际应用建议

对于**TEST创投基金**网站，建议结合使用：

1. **Hero区域**: 视差滚动 + Ken Burns效果
2. **投资组合**: 3D卡片 + 悬停光晕
3. **成功案例**: 数字递增 + 粒子效果
4. **联系页面**: 浮动动画 + 波浪扭曲

这些效果能让你的静态图片充满**生命力**，同时保持**专业感**！ 