# 📋 Portfolio 页面内容替换指南

## 🎯 概述
Portfolio 页面现在已经重构为8个项目，分为三个类别：
- **AI应用**：3个项目
- **移动应用**：3个项目  
- **游戏**：2个项目

## 📁 需要准备的资源

### Logo 图片文件
请将公司logo放置在以下路径：

```
public/images/portfolio/
├── ai-company-1-logo.svg
├── ai-company-2-logo.svg
├── ai-company-3-logo.svg
├── brave-logo.svg
├── kiavi-logo.svg
├── stryd-logo.svg
├── stori-logo.svg
└── gaming-company-2-logo.svg
```

**Logo 要求：**
- 格式：SVG (推荐) 或 PNG
- 尺寸：矢量图自适应，建议正方形比例
- 背景：透明背景最佳
- 质量：高清矢量，适合在暗色背景上显示
- 颜色：确保在深色背景下可见

## 🔧 替换步骤

### 1. 更新公司信息
编辑文件：`app/[locale]/components/portfolio-client.tsx`

找到 `portfolioCompanies` 数组，替换以下占位符：

#### AI 应用公司 (3个)
```typescript
// 第1个AI公司
{
  name: "AI_COMPANY_1_NAME",           // 替换为: 公司名称
  category: "AI",                      // 保持不变
  description: "AI_COMPANY_1_DESCRIPTION", // 替换为: 公司描述
  stage: "Series A",                   // 替换为: 投资轮次 (Seed/Pre-A/Series A/Series B等)
  logo: "/images/portfolio/ai-company-1-logo.svg", // 确保logo文件存在
  website: "https://ai-company-1.com", // 替换为: 公司官网
}

// 第2个AI公司
{
  name: "AI_COMPANY_2_NAME",
  category: "AI",
  description: "AI_COMPANY_2_DESCRIPTION", 
  stage: "Seed",
  logo: "/images/portfolio/ai-company-2-logo.png",
  website: "https://ai-company-2.com",
}

// 第3个AI公司  
{
  name: "AI_COMPANY_3_NAME",
  category: "AI",
  description: "AI_COMPANY_3_DESCRIPTION",
  stage: "Pre-A", 
  logo: "/images/portfolio/ai-company-3-logo.png",
  website: "https://ai-company-3.com",
}
```

#### 移动应用公司 (3个)
```typescript
// 第1个移动应用公司
{
  name: "MOBILE_COMPANY_1_NAME",
  category: "Mobile",
  description: "MOBILE_COMPANY_1_DESCRIPTION",
  stage: "Series A",
  logo: "/images/portfolio/mobile-company-1-logo.png", 
  website: "https://mobile-company-1.com",
}

// 第2个移动应用公司
{
  name: "MOBILE_COMPANY_2_NAME",
  category: "Mobile", 
  description: "MOBILE_COMPANY_2_DESCRIPTION",
  stage: "Seed",
  logo: "/images/portfolio/mobile-company-2-logo.png",
  website: "https://mobile-company-2.com",
}

// 第3个移动应用公司
{
  name: "MOBILE_COMPANY_3_NAME",
  category: "Mobile",
  description: "MOBILE_COMPANY_3_DESCRIPTION", 
  stage: "Pre-A",
  logo: "/images/portfolio/mobile-company-3-logo.png",
  website: "https://mobile-company-3.com",
}
```

#### 游戏公司 (2个)
```typescript
// 第1个游戏公司
{
  name: "GAMING_COMPANY_1_NAME", 
  category: "Gaming",
  description: "GAMING_COMPANY_1_DESCRIPTION",
  stage: "Series A",
  logo: "/images/portfolio/gaming-company-1-logo.png",
  website: "https://gaming-company-1.com",
}

// 第2个游戏公司
{
  name: "GAMING_COMPANY_2_NAME",
  category: "Gaming",
  description: "GAMING_COMPANY_2_DESCRIPTION",
  stage: "Seed", 
  logo: "/images/portfolio/gaming-company-2-logo.png",
  website: "https://gaming-company-2.com",
}
```

## 📝 替换示例

### 示例替换：
```typescript
// 替换前
{
  name: "AI_COMPANY_1_NAME",
  category: "AI",
  description: "AI_COMPANY_1_DESCRIPTION",
  stage: "Series A",
  logo: "/images/portfolio/ai-company-1-logo.png",
  website: "https://ai-company-1.com",
}

// 替换后
{
  name: "Neural Vision",
  category: "AI", 
  description: "Computer vision AI platform for autonomous vehicles and robotics applications",
  stage: "Series B",
  logo: "/images/portfolio/neural-vision-logo.png",
  website: "https://neuralvision.ai",
}
```

## 📋 内容指南

### 公司描述建议
- **长度**：30-80个字符（中文）或50-120个字符（英文）
- **风格**：简洁、专业、突出核心价值
- **重点**：技术特色、应用场景、市场定位

### 投资轮次选项
- `"Seed"` - 种子轮
- `"Pre-A"` - Pre-A轮
- `"Series A"` - A轮
- `"Series B"` - B轮
- `"Series C"` - C轮

## 🔄 完成替换后

1. **检查logo文件**：确保所有logo文件都已上传到正确路径
2. **测试链接**：确认所有website链接都是有效的
3. **预览效果**：在开发环境中查看页面效果
4. **多语言检查**：确认中英文页面都显示正常

## 📧 如需帮助
如果在替换过程中遇到问题，请提供：
- 具体的错误信息
- 你正在替换的内容
- 预期的效果描述

---
**注意**：请保持代码格式的整洁，确保所有引号、逗号和大括号都正确配对。 