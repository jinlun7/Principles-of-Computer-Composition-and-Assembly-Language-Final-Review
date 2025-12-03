
import { ContentBlock } from '../../types';

export const CH5_DATA: Record<string, ContentBlock> = {
  "ch5": {
    id: "ch5",
    type: "chapter",
    title: "第5章 汇编语言层",
    description: "本章主要讲解汇编语言程序的格式、伪指令以及程序设计的基本结构（顺序、分支、循环、子程序）。理解 DOS 功能调用是实验课的重点。",
    childrenIds: ["5.1", "5.2", "5.3", "5.4", "5.6"]
  },
  "5.1": { id: "5.1", type: "section", title: "5.1 汇编语言层概述", childrenIds: ["5.1.1"] },
  "5.1.1": { id: "5.1.1", type: "subsection", title: "5.1.1 汇编程序", keyPoints: [{ title: "汇编过程", content: "源程序 (.asm) -> 汇编 -> 目标文件 (.obj) -> 链接 -> 可执行文件 (.exe)。" }] },
  "5.2": {
    id: "5.2",
    type: "section",
    title: "5.2 汇编语言语句格式",
    childrenIds: ["5.2.1"]
  },
  "5.2.1": {
    id: "5.2.1",
    type: "subsection",
    title: "5.2.1 语句格式",
    keyPoints: [
      {
        title: "基本格式",
        content: `\`[标号:] 助记符 [操作数] [;注释]\`
- **标号**：指令的符号地址，必须以冒号结尾。
- **助记符**：指令名称 (如 MOV)。
- **操作数**：寄存器、立即数、存储单元。`
      }
    ]
  },
  "5.3": { id: "5.3", type: "section", title: "5.3 80x86 宏汇编语言数据、表达式和运算符", childrenIds: ["5.3.1", "5.3.2", "5.3.3", "5.3.4"] },
  "5.3.1": { id: "5.3.1", type: "subsection", title: "5.3.1 常数", keyPoints: [{ title: "后缀", content: "B (Binary), Q/O (Octal), D (Decimal), H (Hex)。默认为十进制。" }] },
  "5.3.2": {
    id: "5.3.2",
    type: "subsection",
    title: "5.3.2 变量",
    keyPoints: [
      {
        title: "数据定义伪指令",
        content: `**DB**: Define Byte (1字节)
**DW**: Define Word (2字节)
**DD**: Define Double Word (4字节)
例：\`DATA DB 10, 20, ?, 3 DUP(0)\`
(? 表示未初始化，DUP 表示重复)`
      }
    ]
  },
  "5.3.3": { id: "5.3.3", type: "subsection", title: "5.3.3 标号", keyPoints: [{ title: "属性", content: "Segment, Offset, Type (NEAR/FAR)。" }] },
  "5.3.4": { id: "5.3.4", type: "subsection", title: "5.3.4 表达式与运算符", keyPoints: [{ title: "常用运算符", content: "**PTR**: 强制类型转换 (MOV WORD PTR [BX], 1)。\n**OFFSET**: 取偏移地址 (MOV BX, OFFSET ARRAY)。" }] },
  "5.4": { id: "5.4", type: "section", title: "5.4 伪指令", childrenIds: ["5.4.1", "5.4.3", "5.4.7"] },
  "5.4.1": { id: "5.4.1", type: "subsection", title: "5.4.1 符号定义", keyPoints: [{ title: "EQU", content: "COUNT EQU 100 (常量定义，不占内存)。" }] },
  "5.4.3": { id: "5.4.3", type: "subsection", title: "5.4.3 段定义", keyPoints: [{ title: "SEGMENT/ENDS", content: "CODE SEGMENT ... CODE ENDS。" }] },
  "5.4.7": { id: "5.4.7", type: "subsection", title: "5.4.7 过程定义", keyPoints: [{ title: "PROC/ENDP", content: "子程序定义。" }] },
  "5.6": {
    id: "5.6",
    type: "section",
    title: "5.6 程序设计基本技术",
    childrenIds: ["5.6.3", "5.6.4", "5.6.5", "5.6.6"]
  },
  "5.6.3": {
    id: "5.6.3",
    type: "subsection",
    title: "5.6.3 分支程序设计",
    keyPoints: [
      {
        title: "条件转移指令 (Jcc)",
        content: `通常配合 CMP 或 TEST 使用。
- **JZ/JE**: 结果为零/相等 (ZF=1)。
- **JNZ/JNE**: 结果不为零/不相等 (ZF=0)。
- **JS/JNS**: 结果为负/为正。
- **JC/JNC**: 有进位/无进位。
- **JG/JL**: 大于/小于 (带符号数)。
- **JA/JB**: 高于/低于 (无符号数)。`
      }
    ]
  },
  "5.6.4": {
    id: "5.6.4",
    type: "subsection",
    title: "5.6.4 循环程序设计",
    keyPoints: [
      {
        title: "LOOP 指令",
        content: `\`LOOP label\`
执行步骤：
1. CX = CX - 1
2. 若 CX != 0，跳转至 label。
*注意*：CX 必须先赋值循环次数。`
      }
    ]
  },
  "5.6.5": {
    id: "5.6.5",
    type: "subsection",
    title: "5.6.5 子程序设计",
    keyPoints: [
      {
        title: "CALL 与 RET",
        content: `**CALL**: 将下一条指令的地址 (PC) 压栈，跳转到子程序。
**RET**: 从栈顶弹出地址送入 PC，返回主程序。
**参数传递**：寄存器法、堆栈法、存储区法。`
      }
    ]
  },
  "5.6.6": {
    id: "5.6.6",
    type: "subsection",
    title: "5.6.6 系统功能子程序调用 (DOS)",
    keyPoints: [
      {
        title: "INT 21H 常用功能 (考点)",
        content: `通过 **AH** 寄存器指定功能号。
- **AH=01H**: 键盘输入一个字符 (AL=字符)。
- **AH=02H**: 显示输出一个字符 (DL=字符)。
- **AH=09H**: 显示字符串 (DX=字符串偏移地址，字符串以 '$' 结尾)。
- **AH=4CH**: 返回 DOS (程序结束)。`,
        isExamFocus: true
      }
    ]
  }
};
