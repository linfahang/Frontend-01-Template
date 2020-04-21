# 每周总结可以写在这里

- 语言按语法分类 - 非形式语言 - 中文、英文
- 形式语言(乔姆斯基谱系)

  - 0 型 无限制文法
  - 1 型 上下文相关文法
  - 2 型 上下文无关文法
  - 3 型 正则文法

- 产生式(BNF)巴克斯诺尔范式

  - 用尖括号扩起来的名称来表示语法结构名
  - 语法结构分成基础结构和需要用其他语法结构定义的复合结构
  - 基础结构称终结符
  - 复合结构称非终结符
  - 引号和中间的字符表示终结符
  - 可以有括号
  - \*表示重复多次
  - ｜表示或
  - \- 表示至少一次

- 图灵完备性 - 命令式——图灵机 - goto - if 和 while - 声明式——lamba - 递归

- 动态与静态 - 动态 - 在用户的设备/在线服务器上 - 产品实际运行时 - Runtime

  - 静态
    - 在程序员的设备上
    - 产品开发时
    - Compiletime

- 类型系统

  - 动态类型系统与静态类型系统
  - 强类型与弱类型(有无隐式转换)
    - String - Number
    - String == Boolean
  - 复合类型
    - 结构体
    - 函数签名
      - 子类型 - 逆变/协变

- 一般命令式变成语言

  - Atom
    - Identifier
    - Literal
  - Expression
    - Atom
    - Operator
    - Punctuator
  - Statement
    - Expression
    - Keyword
    - Punctuator
  - Structure
    - Function
    - Class
    - Process
    - Namespace
    - ...
  - Program
    - Program
    - Module
    - Package
    - Library

- unicode  
   - https://www.fileformat.info/info/unicode/  
   - https://home.unicode.org  
   - 主要是与 ascii 码兼容的 Basic Latin  
   - 要记得的字符  
   - LF  
   - SPACE  
   - CJK  
   - BMP 基本字符  
   - 平时写代码时，最好使用 ascii 中的字符  
   - \u 转义  
   - 用途  
   - 怎么用

  InputElement  
   - WhiteSpace

      		- <TAB>
      		- <VT> 纵向制表符
      		- <FF> Form Feed
      		- <SP> 推荐开发时使用
      		- <NBSP> 处理排版时，如果是普通的SP，会在一行放不下时，将它左右断开;<NBSP>它的左右不会断开
      		- <ZWNBSP>
      		- <USP>

      	- LineTerminator

      		- <LF> Line Feed \n 推荐开发时使用
      		- <CR>  回车 \r
      		- <LS>
      		- <PS>

      	- Comment

      		- //
      		- /* */

      	- Token

      		- Punctuator 符号

      		- IdentifierName
      			- Identifier 标识符
      				- 变量名
      				- 属性
      			- Keywords 关键字
      			- Future reserved Keywords : enum
      		- Literal 直接量
      			- Number
      				- IEEE 754 Double Float
      				- 最佳实践
      					- 浮点数比较时，需要加精度
      					- Number.MAX_SAFE_INTEGER
      				- grammar
      					- DecimalLiteral
      						- 0
      						- 0.
      						- .2
      						- 1e3
      					- BinaryIntegerLiteral
      						- 0b111
      					- OctallIntegerLiteral
      						- Oo10
      					- HexIntegerLiteral
      						- OxFF
      			- String
      				- Character 字符
      				- Code point 码点
      				- Encoding
      					- UTF
      						- UTF-8
      						- UTF-16 实际内存中是这种方式的
      				- grammar
      			- Boolean
      				- true
      				- false
      			- Null
      			- Undefined
