# 🦞 OpenClaw 飞书AI学生助手

**长沙2026届电子信息本科生项目 | 独立部署OpenClaw + 飞书机器人接入 + 二次开发**

### 项目亮点
- ✅ Windows完整配置OpenClaw（223k+ Star热门AI Agent）
- ✅ 成功接入飞书机器人（支持实时命令、自动化任务）
- ✅ 自定义Skill开发：电子信息专业笔记总结、实验报告生成
- 技术栈：Node.js, LLM Tool Calling, Feishu API, Python（可选硬件联动）

### 演示效果
- 飞书发“帮我写电路实验报告” → 龙虾秒回模板 + 公式
- “长沙天气+课表提醒” → 自动推送
- 见“openclaw演示”文件夹截图（配置+运行过程）

### 文件结构
- `/openclaw演示/`: 飞书接入截图 + 配置记录
- `/学生助手skills开发/`: 自定义Skill代码（electronic-helper.js）

### 快速开始（Windows复现）
```bash
# 1. 安装Node.js 22 LTS
# 2. npm install -g openclaw
# 3. openclaw onboard
# 4. 配置飞书机器人（token填入config）
