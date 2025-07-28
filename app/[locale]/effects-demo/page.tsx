"use client"

import { 
  KenBurnsImage,
  FloatingImage, 
  MouseFollow3D,
  SweepLightImage,
  PulseScaleImage,
  ColorCycleImage,
  WealthGlowImage,
  ParticleOverlayImage,
  GrowthLineImage,
  ParallaxLayersImage
} from "@/components/ui/static-image-effects"

export default function EffectsDemo() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-6xl font-light mb-8 text-white">
            静态图片动效演示
          </h1>
          <p className="font-inter text-xl text-gray-400 max-w-4xl mx-auto">
            以下是让静态图片"动起来"的各种技术演示。即使没有视频，也能创造出丰富的视觉效果。
          </p>
        </div>

        <div className="grid gap-16">
          {/* Ken Burns 效果 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              Ken Burns 效果
            </h2>
            <p className="text-gray-400 mb-8">经典的纪录片风格 - 缓慢缩放和平移</p>
            <div className="max-w-2xl mx-auto">
              <KenBurnsImage 
                src="/images/earth-night-lights.jpg"
                alt="地球夜景"
                duration={15}
                scale={1.15}
                className="h-96 rounded-lg overflow-hidden"
              />
            </div>
          </section>

          {/* 浮动效果 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              浮动动画
            </h2>
            <p className="text-gray-400 mb-8">轻柔的上下浮动，增加生动感</p>
            <div className="flex justify-center">
              <FloatingImage 
                src="/images/TEST-office.jpg"
                alt="TEST办公室"
                floatRange={15}
                duration={5}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </section>

          {/* 鼠标跟随3D */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              鼠标跟随3D倾斜
            </h2>
            <p className="text-gray-400 mb-8">移动鼠标感受3D立体效果</p>
            <div className="flex justify-center">
              <MouseFollow3D 
                src="/images/hero-portfolio.jpg"
                alt="登山成就"
                intensity={15}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </section>

          {/* 光线扫过 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              光线扫过效果
            </h2>
            <p className="text-gray-400 mb-8">模拟聚光灯扫过的高端感</p>
            <div className="max-w-2xl mx-auto">
              <SweepLightImage 
                src="/images/hero-volcano.jpg"
                alt="火山创新"
                sweepDuration={2.5}
                pauseDuration={4}
                className="h-96 rounded-lg"
              />
            </div>
          </section>

          {/* 脉冲缩放 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              缩放脉冲
            </h2>
            <p className="text-gray-400 mb-8">有节奏的呼吸感缩放</p>
            <div className="flex justify-center">
              <PulseScaleImage 
                src="/images/hero-mountains.jpg"
                alt="山脉远景"
                scaleRange={0.08}
                duration={4}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </section>

          {/* 色彩循环 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              色彩渐变循环
            </h2>
            <p className="text-gray-400 mb-8">微妙的色彩变化，增加活力</p>
            <div className="flex justify-center">
              <ColorCycleImage 
                src="/images/earth-night-lights.jpg"
                alt="地球夜景"
                duration={6}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </section>

          {/* 财富闪烁 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              财富光晕效果
            </h2>
            <p className="text-gray-400 mb-8">专为创投基金设计的高级光效</p>
            <div className="flex justify-center">
              <WealthGlowImage 
                src="/images/TEST-office.jpg"
                alt="财富办公环境"
                glowColor="#00A651"
                intensity={25}
                duration={3}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </section>

          {/* 粒子覆盖 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              粒子流动效果
            </h2>
            <p className="text-gray-400 mb-8">动态粒子增加科技感</p>
            <div className="flex justify-center">
              <ParticleOverlayImage 
                src="/images/hero-portfolio.jpg"
                alt="成就之路"
                particleCount={20}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </section>

          {/* 投资增长线条 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              投资增长可视化
            </h2>
            <p className="text-gray-400 mb-8">动态线条展示投资回报增长</p>
            <div className="flex justify-center">
              <GrowthLineImage 
                src="/images/hero-volcano.jpg"
                alt="爆发式增长"
                lineColor="#00A651"
                className="rounded-lg overflow-hidden"
              />
            </div>
          </section>

          {/* 多层视差 */}
          <section className="text-center">
            <h2 className="font-playfair text-4xl font-light mb-4 text-[#00A651]">
              多层视差效果
            </h2>
            <p className="text-gray-400 mb-8">移动鼠标感受多层深度</p>
            <div className="max-w-2xl mx-auto">
              <ParallaxLayersImage 
                backgroundSrc="/images/hero-mountains.jpg"
                alt="立体山景"
                className="h-96 rounded-lg"
              />
            </div>
          </section>
        </div>

        {/* 总结说明 */}
        <div className="text-center mt-20 p-12 bg-gray-900/50 rounded-lg">
          <h2 className="font-playfair text-4xl font-light mb-6 text-white">
            🎯 实际应用建议
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="font-playfair text-xl font-light mb-4 text-[#00A651]">
                视差滚动原理
              </h3>
              <p className="text-gray-300 leading-relaxed">
                视差滚动通过让背景图片以不同于前景内容的速度移动，创造出深度错觉。
                背景移动得慢，前景移动得快，就产生了"背景更远"的立体感。
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-light mb-4 text-[#00A651]">
                静态图片动效
              </h3>
              <p className="text-gray-300 leading-relaxed">
                即使是静态图片，通过巧妙的CSS transform、滤镜动画、粒子效果等技术，
                也能创造出丰富的视觉体验，让页面充满生命力。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 