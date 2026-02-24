// 电子信息大学生助手Skill
module.exports = {
  name: '电子信息笔记助手',
  description: '帮长沙电子信息学生自动生成课后总结、实验报告模板',
  async run(input) {
    if (input.includes('电路') || input.includes('信号')) {
      return `✅ 已为你生成《${input}》报告模板：
1. 电路原理图分析
2. Multisim仿真结果
3. 关键参数计算
附件已准备好，飞书发你！`;
    }
    return '收到！电子信息问题我最熟～';
  }
};