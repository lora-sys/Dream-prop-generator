# 😃 Dream-prop-generator

## 项目概述

- **项目名称**：神奇道具生成器 / 未来百宝袋体验站 (待定)
- **项目目标**：创建一个互动式网站，用户输入一个简单的愿望或需求，系统自动生成一个虚构的、充满想象力的"神奇道具"及其详细用法说明，旨在为用户提供惊喜、乐趣和创意启发
- **核心体验**：模仿哆啦A梦从四次元口袋中拿出神奇道具解决问题的过程，让用户获得"心想事成"的趣味体验
- **目标用户**：喜欢哆啦A梦、科幻、奇幻、创意、解压娱乐的人群，年龄跨度较广（青少年至成年人）

## 项目结构

```mermaid
graph TD
    A[项目根目录] --> B[tools-dream-generator]
    B --> C[src]
    C --> D[state]
    C --> E[views]
    C --> F[App.css]
    C --> G[App.jsx]
    C --> H[index.css]
    C --> I[main.jsx]
    B --> J[README.md]
    B --> K[eslint.config.js]
    B --> L[tailwind.config.js]
    B --> M[vite.config.js]
```

## 功能流程图

```mermaid
graph LR
    A[用户输入界面] -->|设置输入文本| B[状态管理器]
    B -->|触发生成动作| C[API服务]
    C -->|调用| D[AI模型]
    D -->|返回数据| C
    C -->|更新道具数据| B
    B -->|导航到展示界面| E[道具展示界面]
    B -->|启动动画| F[动画控制器]
    F -->|位置更新| G[口袋组件]
    F -->|粒子更新| H[粒子系统]
    F -->|卡片状态| I[道具卡片]
    E -->|用户操作| B
    B -->|保存数据| J[本地存储]
```

## 交互时序图

```mermaid
sequenceDiagram
    participant User
    participant Pocket
    participant State
    participant Animation
    participant API
    
    User->>Pocket: 点击口袋
    Pocket->>State: 开始生成
    State->>Animation: 阶段1(口袋打开)
    State->>API: 请求道具数据
    API-->>State: 返回道具数据
    State->>Animation: 阶段2(图标飞出)
    Animation->>Animation: 计算飞行路径
    Animation->>State: 更新图标位置
    State->>Animation: 阶段4(卡片展开)
    State->>Animation: 阶段5(粒子效果)
    Animation->>Animation: 创建粒子
    Animation->>Animation: 更新粒子动画
```