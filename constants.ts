
import { Part, ContentBlock } from './types';

// --- CONTENT REGISTRY (FLAT MAP) ---
export const CONTENT_REGISTRY: Record<string, ContentBlock> = {
  // === CHAPTER 1 ===
  "ch1": {
    id: "ch1",
    type: "chapter",
    title: "第1章 绪论",
    description: "本章主要考查计算机的基本组成框架与性能指标计算。",
    childrenIds: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]
  },
  "1.1": {
    id: "1.1",
    type: "section",
    title: "1.1 计算机的基本概念",
    childrenIds: ["1.1.1", "1.1.2"]
  },
  "1.1.1": {
    id: "1.1.1",
    type: "subsection",
    title: "1.1.1 存储程序工作方式",
    keyPoints: [
      {
        title: "冯·诺依曼体制核心",
        content: "1. 采用二进制。\n2. 存储程序。\n3. 五大部件。\n4. 指令执行。",
        isExamFocus: true
      }
    ]
  },
  "1.1.2": {
    id: "1.1.2",
    type: "subsection",
    title: "1.1.2 信息的数字化表示",
    keyPoints: [{ title: "二进制优势", content: "物理实现简单，运算规则简单，抗干扰能力强。" }]
  },
  "1.2": {
    id: "1.2",
    type: "section",
    title: "1.2 计算机系统的硬件和软件组成",
    childrenIds: ["1.2.1", "1.2.2"]
  },
  "1.2.1": {
    id: "1.2.1",
    type: "subsection",
    title: "1.2.1 计算机硬件系统",
    keyPoints: [{ title: "五大部件", content: "运算器、控制器、存储器、输入设备、输出设备。" }]
  },
  "1.2.2": {
    id: "1.2.2",
    type: "subsection",
    title: "1.2.2 计算机软件系统",
    keyPoints: [{ title: "软件分类", content: "系统软件、应用软件。" }]
  },
  "1.3": {
    id: "1.3",
    type: "section",
    title: "1.3 层次结构模型",
    childrenIds: ["1.3.1", "1.3.2", "1.3.3"]
  },
  "1.3.1": {
    id: "1.3.1",
    type: "subsection",
    title: "1.3.1 从计算机系统组成角度划分层次结构",
    keyPoints: [{ title: "多级层次", content: "微程序级 -> 机器语言级 -> 操作系统级 -> 汇编语言级 -> 高级语言级。" }]
  },
  "1.3.2": {
    id: "1.3.2",
    type: "subsection",
    title: "1.3.2 从语言功能角度划分层次结构",
    keyPoints: [{ title: "翻译与解释", content: "编译程序 vs 解释程序。" }]
  },
  "1.3.3": {
    id: "1.3.3",
    type: "subsection",
    title: "1.3.3 软件和硬件在逻辑上的等价",
    keyPoints: [{ title: "软硬等价性", content: "功能上等价，性能与成本不同。" }]
  },
  "1.4": {
    id: "1.4",
    type: "section",
    title: "1.4 计算机的工作过程",
    childrenIds: ["1.4.1", "1.4.2"]
  },
  "1.4.1": {
    id: "1.4.1",
    type: "subsection",
    title: "1.4.1 处理问题的步骤",
    keyPoints: [{ title: "步骤", content: "分析 -> 编程 -> 编译 -> 执行。" }]
  },
  "1.4.2": {
    id: "1.4.2",
    type: "subsection",
    title: "1.4.2 指令执行过程",
    keyPoints: [{ title: "取指-译码-执行", content: "PC -> MAR -> M -> MDR -> IR。" }]
  },
  "1.5": {
    id: "1.5",
    type: "section",
    title: "1.5 计算机的特点和性能指标",
    childrenIds: ["1.5.1", "1.5.2"]
  },
  "1.5.1": {
    id: "1.5.1",
    type: "subsection",
    title: "1.5.1 计算机的特点",
    keyPoints: [{ title: "特点", content: "快、准、大、灵、智。" }]
  },
  "1.5.2": {
    id: "1.5.2",
    type: "subsection",
    title: "1.5.2 计算机的性能指标",
    keyPoints: [
      {
        title: "性能公式",
        content: "MIPS = f / (CPI * 10^6)",
        formulas: ["CPU Time = IC * CPI * Cycle Time"],
        isExamFocus: true
      }
    ]
  },
  "1.6": {
    id: "1.6",
    type: "section",
    title: "1.6 计算机的发展与应用",
    childrenIds: ["1.6.1", "1.6.2", "1.6.3"]
  },
  "1.6.1": { id: "1.6.1", type: "subsection", title: "1.6.1 计算机的发展历程" },
  "1.6.2": { id: "1.6.2", type: "subsection", title: "1.6.2 计算机性能提高的技术" },
  "1.6.3": { id: "1.6.3", type: "subsection", title: "1.6.3 计算机应用举例" },

  // === CHAPTER 2 ===
  "ch2": {
    id: "ch2",
    type: "chapter",
    title: "第2章 信息表示",
    childrenIds: ["2.1", "2.2", "2.3"]
  },
  "2.1": {
    id: "2.1",
    type: "section",
    title: "2.1 数值型数据的表示",
    childrenIds: ["2.1.1", "2.1.2"]
  },
  "2.1.1": {
    id: "2.1.1",
    type: "subsection",
    title: "2.1.1 带符号数的表示",
    keyPoints: [{ title: "原反补", content: "正数相同，负数不同。补码=反码+1。", isExamFocus: true }]
  },
  "2.1.2": {
    id: "2.1.2",
    type: "subsection",
    title: "2.1.2 定点数与浮点数",
    keyPoints: [{ title: "IEEE 754", content: "(-1)^S * 1.M * 2^(E-127)", isExamFocus: true }]
  },
  "2.2": {
    id: "2.2",
    type: "section",
    title: "2.2 字符的表示",
    childrenIds: ["2.2.1", "2.2.2", "2.2.3"]
  },
  "2.2.1": { id: "2.2.1", type: "subsection", title: "2.2.1 ASCII" },
  "2.2.2": { id: "2.2.2", type: "subsection", title: "2.2.2 Unicode 编码" },
  "2.2.3": { id: "2.2.3", type: "subsection", title: "2.2.3 汉字编码简介" },
  "2.3": {
    id: "2.3",
    type: "section",
    title: "2.3 指令信息的表示",
    childrenIds: ["2.3.1", "2.3.2", "2.3.3", "2.3.4", "2.3.5", "2.3.6", "2.3.7"]
  },
  "2.3.1": { id: "2.3.1", type: "subsection", title: "2.3.1 指令格式" },
  "2.3.2": { id: "2.3.2", type: "subsection", title: "2.3.2 常用寻址方式" },
  "2.3.3": { id: "2.3.3", type: "subsection", title: "2.3.3 指令类型" },
  "2.3.4": { id: "2.3.4", type: "subsection", title: "2.3.4 Pentium II 指令格式" },
  "2.3.5": { id: "2.3.5", type: "subsection", title: "2.3.5 RISC 概述" },
  "2.3.6": { id: "2.3.6", type: "subsection", title: "2.3.6 MIPS 指令系统" },
  "2.3.7": { id: "2.3.7", type: "subsection", title: "2.3.7 ARM 指令系统" },

  // === CHAPTER 3 ===
  "ch3": {
    id: "ch3",
    type: "chapter",
    title: "第3章 微体系结构层",
    childrenIds: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"]
  },
  "3.1": { id: "3.1", type: "section", title: "3.1 CPU 的组成和功能", childrenIds: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"] },
  "3.1.1": { id: "3.1.1", type: "subsection", title: "3.1.1 CPU 的组成" },
  "3.1.2": { id: "3.1.2", type: "subsection", title: "3.1.2 指令执行过程" },
  "3.1.3": { id: "3.1.3", type: "subsection", title: "3.1.3 时序控制方式" },
  "3.1.4": { id: "3.1.4", type: "subsection", title: "3.1.4 指令流水线" },

  "3.2": { id: "3.2", type: "section", title: "3.2 ALU 和运算方法", childrenIds: ["3.2.1", "3.2.2", "3.2.3", "3.2.4"] },
  "3.2.1": { id: "3.2.1", type: "subsection", title: "3.2.1 ALU 介绍" },
  "3.2.2": { id: "3.2.2", type: "subsection", title: "3.2.2 定点数运算方法", keyPoints: [{title:"Booth算法", content:"一位乘法"}] },
  "3.2.3": { id: "3.2.3", type: "subsection", title: "3.2.3 浮点数运算方法" },
  "3.2.4": { id: "3.2.4", type: "subsection", title: "3.2.4 十进制数加、减运算" },

  "3.3": { id: "3.3", type: "section", title: "3.3 CPU 模型机的组成及其数据通路", childrenIds: ["3.3.1", "3.3.2"] },
  "3.3.1": { id: "3.3.1", type: "subsection", title: "3.3.1 基本组成" },
  "3.3.2": { id: "3.3.2", type: "subsection", title: "3.3.2 数据传输" },

  "3.4": { id: "3.4", type: "section", title: "3.4 组合逻辑控制器原理", childrenIds: ["3.4.1", "3.4.2", "3.4.3", "3.4.4", "3.4.5"] },
  "3.4.1": { id: "3.4.1", type: "subsection", title: "3.4.1 模型机的指令系统" },
  "3.4.2": { id: "3.4.2", type: "subsection", title: "3.4.2 模型机的时序系统" },
  "3.4.3": { id: "3.4.3", type: "subsection", title: "3.4.3 指令流程" },
  "3.4.4": { id: "3.4.4", type: "subsection", title: "3.4.4 微命令的综合与产生" },
  "3.4.5": { id: "3.4.5", type: "subsection", title: "3.4.5 小结" },

  "3.5": { id: "3.5", type: "section", title: "3.5 微程序控制器原理", childrenIds: ["3.5.1", "3.5.2", "3.5.3", "3.5.4", "3.5.5"] },
  "3.5.1": { id: "3.5.1", type: "subsection", title: "3.5.1 微程序控制概念" },
  "3.5.2": { id: "3.5.2", type: "subsection", title: "3.5.2 微指令编码方式" },
  "3.5.3": { id: "3.5.3", type: "subsection", title: "3.5.3 微程序的顺序控制" },
  "3.5.4": { id: "3.5.4", type: "subsection", title: "3.5.4 微指令格式" },
  "3.5.5": { id: "3.5.5", type: "subsection", title: "3.5.5 典型微指令举例——模型机微指令格式" },

  "3.6": { id: "3.6", type: "section", title: "3.6 典型 RISC 处理器微体系结构", childrenIds: ["3.6.1", "3.6.2"] },
  "3.6.1": { id: "3.6.1", type: "subsection", title: "3.6.1 MIPS R4000 的微体系结构" },
  "3.6.2": { id: "3.6.2", type: "subsection", title: "3.6.2 ARM7 的微体系结构" },

  // === CHAPTER 4 ===
  "ch4": {
    id: "ch4",
    type: "chapter",
    title: "第4章 指令系统层",
    childrenIds: ["4.1", "4.2", "4.3"]
  },
  "4.1": {
    id: "4.1",
    type: "section",
    title: "4.1 80x86 CPU",
    childrenIds: ["4.1.1", "4.1.2", "4.1.3"]
  },
  "4.1.1": { id: "4.1.1", type: "subsection", title: "4.1.1 8086/8088 CPU" },
  "4.1.2": { id: "4.1.2", type: "subsection", title: "4.1.2 80386/80486 CPU" },
  "4.1.3": { id: "4.1.3", type: "subsection", title: "4.1.3 Pentium 系列 CPU" },

  "4.2": {
    id: "4.2",
    type: "section",
    title: "4.2 80x86 CPU 的寄存器和主存储器",
    childrenIds: ["4.2.1", "4.2.2"]
  },
  "4.2.1": { id: "4.2.1", type: "subsection", title: "4.2.1 80x86 CPU 的寄存器" },
  "4.2.2": { id: "4.2.2", type: "subsection", title: "4.2.2 80x86 的主存储器" },

  "4.3": {
    id: "4.3",
    type: "section",
    title: "4.3 80x86 CPU 指令系统",
    childrenIds: ["4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6", "4.3.7"]
  },
  "4.3.1": { id: "4.3.1", type: "subsection", title: "4.3.1 80x86 寻址方式" },
  "4.3.2": { id: "4.3.2", type: "subsection", title: "4.3.2 80x86 CPU 指令分类" },
  "4.3.3": { id: "4.3.3", type: "subsection", title: "4.3.3 传送类指令" },
  "4.3.4": { id: "4.3.4", type: "subsection", title: "4.3.4 算术运算类指令" },
  "4.3.5": { id: "4.3.5", type: "subsection", title: "4.3.5 逻辑类指令" },
  "4.3.6": { id: "4.3.6", type: "subsection", title: "4.3.6 串操作类指令" },
  "4.3.7": { id: "4.3.7", type: "subsection", title: "4.3.7 处理机控制类指令" },

  // === CHAPTER 5 ===
  "ch5": {
    id: "ch5",
    type: "chapter",
    title: "第5章 汇编语言层",
    childrenIds: ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]
  },
  "5.1": { id: "5.1", type: "section", title: "5.1 汇编语言层概述" },
  "5.2": { id: "5.2", type: "section", title: "5.2 汇编语言语句格式" },
  "5.3": {
    id: "5.3",
    type: "section",
    title: "5.3 80x86 宏汇编语言数据、表达式和运算符",
    childrenIds: ["5.3.1", "5.3.2", "5.3.3", "5.3.4"]
  },
  "5.3.1": { id: "5.3.1", type: "subsection", title: "5.3.1 常数" },
  "5.3.2": { id: "5.3.2", type: "subsection", title: "5.3.2 变量" },
  "5.3.3": { id: "5.3.3", type: "subsection", title: "5.3.3 标号" },
  "5.3.4": { id: "5.3.4", type: "subsection", title: "5.3.4 表达式与运算符" },

  "5.4": {
    id: "5.4",
    type: "section",
    title: "5.4 80x86 宏汇编语言伪指令",
    childrenIds: ["5.4.1", "5.4.2", "5.4.3", "5.4.4", "5.4.5", "5.4.6", "5.4.7", "5.4.8", "5.4.9"]
  },
  "5.4.1": { id: "5.4.1", type: "subsection", title: "5.4.1 符号定义语句" },
  "5.4.2": { id: "5.4.2", type: "subsection", title: "5.4.2 处理器选择伪指令" },
  "5.4.3": { id: "5.4.3", type: "subsection", title: "5.4.3 段结构伪指令" },
  "5.4.4": { id: "5.4.4", type: "subsection", title: "5.4.4 段组伪指令" },
  "5.4.5": { id: "5.4.5", type: "subsection", title: "5.4.5 内存模式和简化段定义伪指令" },
  "5.4.6": { id: "5.4.6", type: "subsection", title: "5.4.6 定位和对准伪指令" },
  "5.4.7": { id: "5.4.7", type: "subsection", title: "5.4.7 过程定义伪指令" },
  "5.4.8": { id: "5.4.8", type: "subsection", title: "5.4.8 包含伪指令" },
  "5.4.9": { id: "5.4.9", type: "subsection", title: "5.4.9 标题伪指令" },

  "5.5": { id: "5.5", type: "section", title: "5.5 宏指令" },
  "5.6": {
    id: "5.6",
    type: "section",
    title: "5.6 汇编语言程序设计基本技术",
    childrenIds: ["5.6.1", "5.6.2", "5.6.3", "5.6.4", "5.6.5", "5.6.6", "5.6.7"]
  },
  "5.6.1": { id: "5.6.1", type: "subsection", title: "5.6.1 程序设计步骤" },
  "5.6.2": { id: "5.6.2", type: "subsection", title: "5.6.2 顺序程序设计" },
  "5.6.3": { id: "5.6.3", type: "subsection", title: "5.6.3 分支程序设计" },
  "5.6.4": { id: "5.6.4", type: "subsection", title: "5.6.4 循环程序设计" },
  "5.6.5": { id: "5.6.5", type: "subsection", title: "5.6.5 子程序设计" },
  "5.6.6": { id: "5.6.6", type: "subsection", title: "5.6.6 系统功能子程序的调用" },
  "5.6.7": { id: "5.6.7", type: "subsection", title: "5.6.7 汇编语言程序的开发" },

  // === CHAPTER 6 ===
  "ch6": {
    id: "ch6",
    type: "chapter",
    title: "第6章 存储系统",
    childrenIds: ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7"]
  },
  "6.1": {
    id: "6.1",
    type: "section",
    title: "6.1 存储系统概述",
    childrenIds: ["6.1.1", "6.1.2"]
  },
  "6.1.1": { id: "6.1.1", type: "subsection", title: "6.1.1 存储器的分类" },
  "6.1.2": { id: "6.1.2", type: "subsection", title: "6.1.2 主存的主要技术指标" },

  "6.2": {
    id: "6.2",
    type: "section",
    title: "6.2 存储原理",
    childrenIds: ["6.2.1", "6.2.2"]
  },
  "6.2.1": { id: "6.2.1", type: "subsection", title: "6.2.1 半导体存储器的存储原理" },
  "6.2.2": { id: "6.2.2", type: "subsection", title: "6.2.2 磁表面存储器的存储原理" },

  "6.3": {
    id: "6.3",
    type: "section",
    title: "6.3 主存储器的组织",
    childrenIds: ["6.3.1", "6.3.2", "6.3.3", "6.3.4"]
  },
  "6.3.1": { id: "6.3.1", type: "subsection", title: "6.3.1 主存储器的逻辑设计" },
  "6.3.2": { id: "6.3.2", type: "subsection", title: "6.3.2 主存储器与 CPU 的连接" },
  "6.3.3": { id: "6.3.3", type: "subsection", title: "6.3.3 Pentium CPU 与存储器组织" },
  "6.3.4": { id: "6.3.4", type: "subsection", title: "6.3.4 高级 DRAM" },

  "6.4": {
    id: "6.4",
    type: "section",
    title: "6.4 高速缓冲存储器",
    childrenIds: ["6.4.1", "6.4.2", "6.4.3"]
  },
  "6.4.1": { id: "6.4.1", type: "subsection", title: "6.4.1 Cache 的工作原理" },
  "6.4.2": { id: "6.4.2", type: "subsection", title: "6.4.2 Cache 的组织" },
  "6.4.3": { id: "6.4.3", type: "subsection", title: "6.4.3 Pentium II CPU 的 Cache 组织" },

  "6.5": {
    id: "6.5",
    type: "section",
    title: "6.5 外部存储器",
    childrenIds: ["6.5.1", "6.5.2"]
  },
  "6.5.1": { id: "6.5.1", type: "subsection", title: "6.5.1 硬磁盘存储器" },
  "6.5.2": { id: "6.5.2", type: "subsection", title: "6.5.2 U盘和固态硬盘" },

  "6.6": {
    id: "6.6",
    type: "section",
    title: "6.6 物理存储系统的组织",
    childrenIds: ["6.6.1", "6.6.2", "6.6.3"]
  },
  "6.6.1": { id: "6.6.1", type: "subsection", title: "6.6.1 存储系统的层次结构" },
  "6.6.2": { id: "6.6.2", type: "subsection", title: "6.6.2 磁盘阵列" },
  "6.6.3": { id: "6.6.3", type: "subsection", title: "6.6.3 多体交叉存取技术" },

  "6.7": {
    id: "6.7",
    type: "section",
    title: "6.7 虚拟存储系统的组织",
    childrenIds: ["6.7.1", "6.7.2", "6.7.3", "6.7.4"]
  },
  "6.7.1": { id: "6.7.1", type: "subsection", title: "6.7.1 概述" },
  "6.7.2": { id: "6.7.2", type: "subsection", title: "6.7.2 虚拟存储器的组织方式" },
  "6.7.3": { id: "6.7.3", type: "subsection", title: "6.7.3 Pentium CPU 支持的虚拟存储器" },
  "6.7.4": { id: "6.7.4", type: "subsection", title: "6.7.4 存储管理部件" },


  // === CHAPTER 7 ===
  "ch7": {
    id: "ch7",
    type: "chapter",
    title: "第7章 输入/输出系统",
    childrenIds: ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7"]
  },
  "7.1": {
    id: "7.1",
    type: "section",
    title: "7.1 输入/输出系统概述",
    childrenIds: ["7.1.1", "7.1.2", "7.1.3"]
  },
  "7.1.1": { id: "7.1.1", type: "subsection", title: "7.1.1 主机与外围设备间的连接方式" },
  "7.1.2": { id: "7.1.2", type: "subsection", title: "7.1.2 I/O 接口的功能和分类" },
  "7.1.3": { id: "7.1.3", type: "subsection", title: "7.1.3 接口的编址和 I/O 指令" },

  "7.2": { id: "7.2", type: "section", title: "7.2 直接程序控制方式" },

  "7.3": {
    id: "7.3",
    type: "section",
    title: "7.3 程序中断方式",
    childrenIds: ["7.3.1", "7.3.2", "7.3.3", "7.3.4", "7.3.5"]
  },
  "7.3.1": { id: "7.3.1", type: "subsection", title: "7.3.1 中断的基本概念" },
  "7.3.2": { id: "7.3.2", type: "subsection", title: "7.3.2 中断的过程" },
  "7.3.3": { id: "7.3.3", type: "subsection", title: "7.3.3 80x86 中断指令" },
  "7.3.4": { id: "7.3.4", type: "subsection", title: "7.3.4 中断接口模型" },
  "7.3.5": { id: "7.3.5", type: "subsection", title: "7.3.5 中断接口举例" },

  "7.4": {
    id: "7.4",
    type: "section",
    title: "7.4 DMA 方式",
    childrenIds: ["7.4.1", "7.4.2", "7.4.3", "7.4.4"]
  },
  "7.4.1": { id: "7.4.1", type: "subsection", title: "7.4.1 DMA 方式的一般概念" },
  "7.4.2": { id: "7.4.2", type: "subsection", title: "7.4.2 DMA 工作过程" },
  "7.4.3": { id: "7.4.3", type: "subsection", title: "7.4.3 DMA 接口组成" },
  "7.4.4": { id: "7.4.4", type: "subsection", title: "7.4.4 DMA 控制器编程及应用" },

  "7.5": {
    id: "7.5",
    type: "section",
    title: "7.5 总线",
    childrenIds: ["7.5.1", "7.5.2", "7.5.3", "7.5.4"]
  },
  "7.5.1": { id: "7.5.1", type: "subsection", title: "7.5.1 总线的功能与分类" },
  "7.5.2": { id: "7.5.2", type: "subsection", title: "7.5.2 总线标准及信号组成" },
  "7.5.3": { id: "7.5.3", type: "subsection", title: "7.5.3 总线操作时序" },
  "7.5.4": { id: "7.5.4", type: "subsection", title: "7.5.4 典型总线举例" },

  "7.6": {
    id: "7.6",
    type: "section",
    title: "7.6 典型外设接口",
    childrenIds: ["7.6.1", "7.6.2"]
  },
  "7.6.1": { id: "7.6.1", type: "subsection", title: "7.6.1 ATA 接口" },
  "7.6.2": { id: "7.6.2", type: "subsection", title: "7.6.2 SCSI 接口" },

  "7.7": {
    id: "7.7",
    type: "section",
    title: "7.7 I/O 设备与 I/O 程序设计",
    childrenIds: ["7.7.1", "7.7.2", "7.7.3", "7.7.4", "7.7.5"]
  },
  "7.7.1": { id: "7.7.1", type: "subsection", title: "7.7.1 概述" },
  "7.7.2": { id: "7.7.2", type: "subsection", title: "7.7.2 键盘" },
  "7.7.3": { id: "7.7.3", type: "subsection", title: "7.7.3 鼠标器" },
  "7.7.4": { id: "7.7.4", type: "subsection", title: "7.7.4 打印机" },
  "7.7.5": { id: "7.7.5", type: "subsection", title: "7.7.5 液晶显示器" }
};


// --- SYLLABUS DATA (TREE STRUCTURE) ---
export const SYLLABUS_DATA: Part[] = [
  {
    title: "第一篇 基础知识",
    chapters: [
      {
        id: "ch1",
        title: "第1章 绪论",
        children: [
          {
            id: "1.1",
            title: "1.1 计算机的基本概念",
            children: [
              { id: "1.1.1", title: "1.1.1 存储程序工作方式" },
              { id: "1.1.2", title: "1.1.2 信息的数字化表示" }
            ]
          },
          {
            id: "1.2",
            title: "1.2 计算机系统的硬件和软件组成",
            children: [
              { id: "1.2.1", title: "1.2.1 计算机硬件系统" },
              { id: "1.2.2", title: "1.2.2 计算机软件系统" }
            ]
          },
          {
            id: "1.3",
            title: "1.3 层次结构模型",
            children: [
              { id: "1.3.1", title: "1.3.1 从计算机系统组成角度划分层次结构" },
              { id: "1.3.2", title: "1.3.2 从语言功能角度划分层次结构" },
              { id: "1.3.3", title: "1.3.3 软件和硬件在逻辑上的等价" }
            ]
          },
          {
            id: "1.4",
            title: "1.4 计算机的工作过程",
            children: [
              { id: "1.4.1", title: "1.4.1 处理问题的步骤" },
              { id: "1.4.2", title: "1.4.2 指令执行过程" }
            ]
          },
          {
            id: "1.5",
            title: "1.5 计算机的特点和性能指标",
            children: [
              { id: "1.5.1", title: "1.5.1 计算机的特点" },
              { id: "1.5.2", title: "1.5.2 计算机的性能指标" }
            ]
          },
          {
            id: "1.6",
            title: "1.6 计算机的发展与应用",
            children: [
              { id: "1.6.1", title: "1.6.1 计算机的发展历程" },
              { id: "1.6.2", title: "1.6.2 计算机性能提高的技术" },
              { id: "1.6.3", title: "1.6.3 计算机应用举例" }
            ]
          }
        ]
      },
      {
        id: "ch2",
        title: "第2章 信息表示",
        children: [
          {
            id: "2.1",
            title: "2.1 数值型数据的表示",
            children: [
              { id: "2.1.1", title: "2.1.1 带符号数的表示" },
              { id: "2.1.2", title: "2.1.2 定点数与浮点数" }
            ]
          },
          {
            id: "2.2",
            title: "2.2 字符的表示",
            children: [
              { id: "2.2.1", title: "2.2.1 ASCII" },
              { id: "2.2.2", title: "2.2.2 Unicode 编码" },
              { id: "2.2.3", title: "2.2.3 汉字编码简介" }
            ]
          },
          {
            id: "2.3",
            title: "2.3 指令信息的表示",
            children: [
              { id: "2.3.1", title: "2.3.1 指令格式" },
              { id: "2.3.2", title: "2.3.2 常用寻址方式" },
              { id: "2.3.3", title: "2.3.3 指令类型" },
              { id: "2.3.4", title: "2.3.4 Pentium II 指令格式" },
              { id: "2.3.5", title: "2.3.5 RISC 概述" },
              { id: "2.3.6", title: "2.3.6 MIPS 指令系统" },
              { id: "2.3.7", title: "2.3.7 ARM 指令系统" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "第二篇 计算机系统结构",
    chapters: [
      {
        id: "ch3",
        title: "第3章 微体系结构层",
        children: [
          {
            id: "3.1",
            title: "3.1 CPU 的组成和功能",
            children: [
              { id: "3.1.1", title: "3.1.1 CPU 的组成" },
              { id: "3.1.2", title: "3.1.2 指令执行过程" },
              { id: "3.1.3", title: "3.1.3 时序控制方式" },
              { id: "3.1.4", title: "3.1.4 指令流水线" }
            ]
          },
          {
            id: "3.2",
            title: "3.2 ALU 和运算方法",
            children: [
              { id: "3.2.1", title: "3.2.1 ALU 介绍" },
              { id: "3.2.2", title: "3.2.2 定点数运算方法" },
              { id: "3.2.3", title: "3.2.3 浮点数运算方法" },
              { id: "3.2.4", title: "3.2.4 十进制数加、减运算" }
            ]
          },
          {
            id: "3.3",
            title: "3.3 CPU 模型机的组成及其数据通路",
            children: [
              { id: "3.3.1", title: "3.3.1 基本组成" },
              { id: "3.3.2", title: "3.3.2 数据传输" }
            ]
          },
          {
            id: "3.4",
            title: "3.4 组合逻辑控制器原理",
            children: [
              { id: "3.4.1", title: "3.4.1 模型机的指令系统" },
              { id: "3.4.2", title: "3.4.2 模型机的时序系统" },
              { id: "3.4.3", title: "3.4.3 指令流程" },
              { id: "3.4.4", title: "3.4.4 微命令的综合与产生" },
              { id: "3.4.5", title: "3.4.5 小结" }
            ]
          },
          {
            id: "3.5",
            title: "3.5 微程序控制器原理",
            children: [
              { id: "3.5.1", title: "3.5.1 微程序控制概念" },
              { id: "3.5.2", title: "3.5.2 微指令编码方式" },
              { id: "3.5.3", title: "3.5.3 微程序的顺序控制" },
              { id: "3.5.4", title: "3.5.4 微指令格式" },
              { id: "3.5.5", title: "3.5.5 典型微指令举例——模型机微指令格式" }
            ]
          },
          {
            id: "3.6",
            title: "3.6 典型 RISC 处理器微体系结构",
            children: [
              { id: "3.6.1", title: "3.6.1 MIPS R4000 的微体系结构" },
              { id: "3.6.2", title: "3.6.2 ARM7 的微体系结构" }
            ]
          }
        ]
      },
      {
        id: "ch4",
        title: "第4章 指令系统层",
        children: [
          {
            id: "4.1",
            title: "4.1 80x86 CPU",
            children: [
              { id: "4.1.1", title: "4.1.1 8086/8088 CPU" },
              { id: "4.1.2", title: "4.1.2 80386/80486 CPU" },
              { id: "4.1.3", title: "4.1.3 Pentium 系列 CPU" }
            ]
          },
          {
            id: "4.2",
            title: "4.2 80x86 CPU 的寄存器和主存储器",
            children: [
              { id: "4.2.1", title: "4.2.1 80x86 CPU 的寄存器" },
              { id: "4.2.2", title: "4.2.2 80x86 的主存储器" }
            ]
          },
          {
            id: "4.3",
            title: "4.3 80x86 CPU 指令系统",
            children: [
              { id: "4.3.1", title: "4.3.1 80x86 寻址方式" },
              { id: "4.3.2", title: "4.3.2 80x86 CPU 指令分类" },
              { id: "4.3.3", title: "4.3.3 传送类指令" },
              { id: "4.3.4", title: "4.3.4 算术运算类指令" },
              { id: "4.3.5", title: "4.3.5 逻辑类指令" },
              { id: "4.3.6", title: "4.3.6 串操作类指令" },
              { id: "4.3.7", title: "4.3.7 处理机控制类指令" }
            ]
          }
        ]
      },
      {
        id: "ch5",
        title: "第5章 汇编语言层",
        children: [
          { id: "5.1", title: "5.1 汇编语言层概述" },
          { id: "5.2", title: "5.2 汇编语言语句格式" },
          {
            id: "5.3",
            title: "5.3 80x86 宏汇编语言数据、表达式和运算符",
            children: [
              { id: "5.3.1", title: "5.3.1 常数" },
              { id: "5.3.2", title: "5.3.2 变量" },
              { id: "5.3.3", title: "5.3.3 标号" },
              { id: "5.3.4", title: "5.3.4 表达式与运算符" }
            ]
          },
          {
            id: "5.4",
            title: "5.4 80x86 宏汇编语言伪指令",
            children: [
              { id: "5.4.1", title: "5.4.1 符号定义语句" },
              { id: "5.4.2", title: "5.4.2 处理器选择伪指令" },
              { id: "5.4.3", title: "5.4.3 段结构伪指令" },
              { id: "5.4.4", title: "5.4.4 段组伪指令" },
              { id: "5.4.5", title: "5.4.5 内存模式和简化段定义伪指令" },
              { id: "5.4.6", title: "5.4.6 定位和对准伪指令" },
              { id: "5.4.7", title: "5.4.7 过程定义伪指令" },
              { id: "5.4.8", title: "5.4.8 包含伪指令" },
              { id: "5.4.9", title: "5.4.9 标题伪指令" }
            ]
          },
          { id: "5.5", title: "5.5 宏指令" },
          {
            id: "5.6",
            title: "5.6 汇编语言程序设计基本技术",
            children: [
              { id: "5.6.1", title: "5.6.1 程序设计步骤" },
              { id: "5.6.2", title: "5.6.2 顺序程序设计" },
              { id: "5.6.3", title: "5.6.3 分支程序设计" },
              { id: "5.6.4", title: "5.6.4 循环程序设计" },
              { id: "5.6.5", title: "5.6.5 子程序设计" },
              { id: "5.6.6", title: "5.6.6 系统功能子程序的调用" },
              { id: "5.6.7", title: "5.6.7 汇编语言程序的开发" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "第三篇 存储系统和输入/输出系统",
    chapters: [
      {
        id: "ch6",
        title: "第6章 存储系统",
        children: [
          {
            id: "6.1",
            title: "6.1 存储系统概述",
            children: [
              { id: "6.1.1", title: "6.1.1 存储器的分类" },
              { id: "6.1.2", title: "6.1.2 主存的主要技术指标" }
            ]
          },
          {
            id: "6.2",
            title: "6.2 存储原理",
            children: [
              { id: "6.2.1", title: "6.2.1 半导体存储器的存储原理" },
              { id: "6.2.2", title: "6.2.2 磁表面存储器的存储原理" }
            ]
          },
          {
            id: "6.3",
            title: "6.3 主存储器的组织",
            children: [
              { id: "6.3.1", title: "6.3.1 主存储器的逻辑设计" },
              { id: "6.3.2", title: "6.3.2 主存储器与 CPU 的连接" },
              { id: "6.3.3", title: "6.3.3 Pentium CPU 与存储器组织" },
              { id: "6.3.4", title: "6.3.4 高级 DRAM" }
            ]
          },
          {
            id: "6.4",
            title: "6.4 高速缓冲存储器",
            children: [
              { id: "6.4.1", title: "6.4.1 Cache 的工作原理" },
              { id: "6.4.2", title: "6.4.2 Cache 的组织" },
              { id: "6.4.3", title: "6.4.3 Pentium II CPU 的 Cache 组织" }
            ]
          },
          {
            id: "6.5",
            title: "6.5 外部存储器",
            children: [
              { id: "6.5.1", title: "6.5.1 硬磁盘存储器" },
              { id: "6.5.2", title: "6.5.2 U盘和固态硬盘" }
            ]
          },
          {
            id: "6.6",
            title: "6.6 物理存储系统的组织",
            children: [
              { id: "6.6.1", title: "6.6.1 存储系统的层次结构" },
              { id: "6.6.2", title: "6.6.2 磁盘阵列" },
              { id: "6.6.3", title: "6.6.3 多体交叉存取技术" }
            ]
          },
          {
            id: "6.7",
            title: "6.7 虚拟存储系统的组织",
            children: [
              { id: "6.7.1", title: "6.7.1 概述" },
              { id: "6.7.2", title: "6.7.2 虚拟存储器的组织方式" },
              { id: "6.7.3", title: "6.7.3 Pentium CPU 支持的虚拟存储器" },
              { id: "6.7.4", title: "6.7.4 存储管理部件" }
            ]
          }
        ]
      },
      {
        id: "ch7",
        title: "第7章 输入/输出系统",
        children: [
          {
            id: "7.1",
            title: "7.1 输入/输出系统概述",
            children: [
              { id: "7.1.1", title: "7.1.1 主机与外围设备间的连接方式" },
              { id: "7.1.2", title: "7.1.2 I/O 接口的功能和分类" },
              { id: "7.1.3", title: "7.1.3 接口的编址和 I/O 指令" }
            ]
          },
          { id: "7.2", title: "7.2 直接程序控制方式" },
          {
            id: "7.3",
            title: "7.3 程序中断方式",
            children: [
              { id: "7.3.1", title: "7.3.1 中断的基本概念" },
              { id: "7.3.2", title: "7.3.2 中断的过程" },
              { id: "7.3.3", title: "7.3.3 80x86 中断指令" },
              { id: "7.3.4", title: "7.3.4 中断接口模型" },
              { id: "7.3.5", title: "7.3.5 中断接口举例" }
            ]
          },
          {
            id: "7.4",
            title: "7.4 DMA 方式",
            children: [
              { id: "7.4.1", title: "7.4.1 DMA 方式的一般概念" },
              { id: "7.4.2", title: "7.4.2 DMA 工作过程" },
              { id: "7.4.3", title: "7.4.3 DMA 接口组成" },
              { id: "7.4.4", title: "7.4.4 DMA 控制器编程及应用" }
            ]
          },
          {
            id: "7.5",
            title: "7.5 总线",
            children: [
              { id: "7.5.1", title: "7.5.1 总线的功能与分类" },
              { id: "7.5.2", title: "7.5.2 总线标准及信号组成" },
              { id: "7.5.3", title: "7.5.3 总线操作时序" },
              { id: "7.5.4", title: "7.5.4 典型总线举例" }
            ]
          },
          {
            id: "7.6",
            title: "7.6 典型外设接口",
            children: [
              { id: "7.6.1", title: "7.6.1 ATA 接口" },
              { id: "7.6.2", title: "7.6.2 SCSI 接口" }
            ]
          },
          {
            id: "7.7",
            title: "7.7 I/O 设备与 I/O 程序设计",
            children: [
              { id: "7.7.1", title: "7.7.1 概述" },
              { id: "7.7.2", title: "7.7.2 键盘" },
              { id: "7.7.3", title: "7.7.3 鼠标器" },
              { id: "7.7.4", title: "7.7.4 打印机" },
              { id: "7.7.5", title: "7.7.5 液晶显示器" }
            ]
          }
        ]
      }
    ]
  }
];

export const DIFFICULTY_ANALYSIS = [
  { level: "Low", chapters: ["1", "2"], desc: "基础概念与数据表示。重点在于二进制转换、补码计算及浮点数标准。" },
  { level: "High", chapters: ["3"], desc: "核心难点。微体系结构、数据通路、流水线及微程序设计，逻辑复杂且抽象。" },
  { level: "Medium-High", chapters: ["4", "5"], desc: "记忆与应用。80x86指令集繁多，汇编编程需要严密的逻辑思维。" },
  { level: "Medium", chapters: ["6", "7"], desc: "系统集成。存储器扩展设计、Cache映射、中断机制与DMA，偏向硬件接口逻辑。" }
];

export const GENERATION_PLAN = [
  {
    phase: 1,
    title: "基础夯实 (第1-2章)",
    content: "完成计算机系统概论、性能指标计算、数值与字符编码（原反补、IEEE754）。",
    status: "Completed"
  },
  {
    phase: 2,
    title: "核心攻坚 (第3章)",
    content: "深入CPU内部，详解ALU、控制器、指令流水线及微程序设计。",
    status: "Completed"
  },
  {
    phase: 3,
    title: "指令与编程 (第4-5章)",
    content: "梳理80x86指令系统，掌握寻址方式，并进行汇编语言程序设计。",
    status: "Completed"
  },
  {
    phase: 4,
    title: "系统扩展 (第6-7章)",
    content: "存储器扩展逻辑、Cache机制、虚拟存储器、中断系统、DMA及总线标准。",
    status: "Completed"
  }
];
