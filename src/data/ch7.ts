
import { ContentBlock } from '../../types';

export const CH7_DATA: Record<string, ContentBlock> = {
  "ch7": {
    id: "ch7",
    type: "chapter",
    title: "第7章 输入/输出系统",
    description: "本章主要介绍 CPU 与外设之间的通信方式。重点在于三种 I/O 方式（程序查询、中断、DMA）的原理、区别与适用场景，以及总线带宽的计算。",
    childrenIds: ["7.1", "7.2", "7.3", "7.4", "7.5"]
  },
  "7.1": {
    id: "7.1",
    type: "section",
    title: "7.1 I/O 系统概述",
    childrenIds: ["7.1.1", "7.1.3"]
  },
  "7.1.1": { id: "7.1.1", type: "subsection", title: "7.1.1 连接方式", keyPoints: [{ title: "方式", content: "总线连接 (现代主流)。" }] },
  "7.1.3": { id: "7.1.3", type: "subsection", title: "7.1.3 编址方式", keyPoints: [{ title: "统一 vs 独立", content: "**统一编址 (MMIO)**: I/O 占用内存地址空间，指令通用。\n**独立编址 (PMIO)**: 专用 I/O 地址空间，专用 IN/OUT 指令 (x86)。" }] },
  "7.2": {
    id: "7.2",
    type: "section",
    title: "7.2 直接程序控制方式 (查询方式)",
    childrenIds: ["7.2.1"]
  },
  "7.2.1": {
    id: "7.2.1",
    type: "subsection",
    title: "7.2.1 程序查询方式",
    keyPoints: [
      {
        title: "特点",
        content: `CPU 不断轮询外设状态 (Status Register)。
- **缺点**：CPU 踏步等待，利用率极低。
- **优点**：硬件简单。`
      }
    ]
  },
  "7.3": {
    id: "7.3",
    type: "section",
    title: "7.3 程序中断方式",
    childrenIds: ["7.3.1", "7.3.2"]
  },
  "7.3.1": {
    id: "7.3.1",
    type: "subsection",
    title: "7.3.1 基本概念",
    keyPoints: [
      {
        title: "中断定义",
        content: "CPU 暂停当前程序，转去处理突发事件，处理完后返回断点继续执行。"
      }
    ]
  },
  "7.3.2": {
    id: "7.3.2",
    type: "subsection",
    title: "7.3.2 中断过程",
    diagram: "InterruptTimeline",
    keyPoints: [
      {
        title: "中断处理流程 (考点)",
        content: `1. **中断请求**: 外设发 INTR。
2. **中断判优**: 确定优先级 (硬件/软件)。
3. **中断响应**: CPU 结束当前指令，发 INTA，关中断，保存 PC 和 SR (断点)，获取中断向量。
4. **中断服务**:
   - 保护现场 (PUSH regs)
   - 执行服务程序
   - 恢复现场 (POP regs)
   - 开中断
5. **中断返回**: IRET (恢复 PC/SR)。`,
        isExamFocus: true
      }
    ]
  },
  "7.4": {
    id: "7.4",
    type: "section",
    title: "7.4 DMA 方式",
    childrenIds: ["7.4.1", "7.4.2"]
  },
  "7.4.1": {
    id: "7.4.1",
    type: "subsection",
    title: "7.4.1 DMA 一般概念",
    keyPoints: [
      {
        title: "DMA 定义",
        content: `**Direct Memory Access** (直接存储器访问)。
DMA 控制器接管总线权，实现**存储器与外设之间**直接的大批量数据传输，无需 CPU 逐个字节干预。`
      },
      {
        title: "三种方式对比 (必考)",
        content: `1. **程序查询**: 串行，CPU 忙等。
2. **中断**: 并行，但每次传送都需要中断服务 (CPU 参与)。适合低速/中速。
3. **DMA**: 完全并行，仅开始/结束需 CPU。适合高速块设备 (磁盘)。`,
        isExamFocus: true
      }
    ]
  },
  "7.4.2": {
    id: "7.4.2",
    type: "subsection",
    title: "7.4.2 DMA 传送方式",
    keyPoints: [
      {
        title: "总线占用方式",
        content: `1. **停止 CPU 访存**: DMA 独占总线。
2. **周期挪用 (Cycle Stealing)**: DMA 挪用一个存取周期。
3. **分时交替**: 时间片轮转。`
      }
    ]
  },
  "7.5": {
    id: "7.5",
    type: "section",
    title: "7.5 总线",
    childrenIds: ["7.5.1"]
  },
  "7.5.1": {
    id: "7.5.1",
    type: "subsection",
    title: "7.5.1 总线带宽计算",
    keyPoints: [
      {
        title: "公式",
        content: `$$带宽 = 总线频率 \\times \\frac{总线位宽}{8} MB/s$$
例：频率 33MHz，位宽 32位。
$BW = 33 \\times 4 = 132 MB/s$。`
      }
    ],
    examples: [
        {
            question: "某总线频率 33MHz，数据总线位宽 32位，求总线带宽。",
            solution: `**计算**：
位宽 = 32 bit = 4 Byte
带宽 = 频率 × 字节宽 = 33 MHz × 4 B = 132 MB/s。
**答案**：132 MB/s`,
            tip: "注意单位转换，1B=8bit。"
        }
    ]
  }
};
