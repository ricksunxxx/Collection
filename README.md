# 前端基础知识汇总

### 1、ES5有哪些新变化
   1. 增加严格模式
   2. 提供一个全局的JSON对象（JSON.stringify 和 JSON.parse）
   3. Object上的构造器增加了很多有用的方法，对对象的属性有了更好的控制（可读、可枚举、可删除、可配置)。
   	    * Object.getPrototypeOf
		* Object.getOwnPropertyDescriptor
		* Object.getOwnPropertyNames
		* Object.create
		* Object.defineProperty
		* Object.defineProperties
		* Object.seal
		* Object.freeze
		* Object.preventExtensions
		* Object.isSealed
		* Object.isFrozen
		* Object.isExtensible
		* Object.keys
   4. 数组原型增加了实用的方法其中Array.isArray直接加在构造器上，不是原型,它使用是对象的内在的[[Class]]属性来判断,跟Object.prototype.toString.apply(value) === '[object Array]'的原理是一样的。   
		* Array.prototype.indexOf
		* Array.prototype.lastIndexOf
		* Array.prototype.every
		* Array.prototype.some
		* Array.prototype.forEach
		* Array.prototype.map
		* Array.prototype.filter
		* Array.prototype.reduce
		* Array.prototype.reduceRight		
    5. Function.prototype.bind 使用它我们可以借用其他函数作用链执行一个函数		

### 2、严格模式有什么用
   1. IE9及以下不支持严格模式，IE10开始支持严格模式。
   2. 严格模式一般出现在全局，也可以出现在函数内，但函数的严格模式与全局的严格模式是无关的，互相独立的。
   3. 严格模式主要是让代码更加严谨，减少出错的可能，以下在严格模式下会报错或行为：
      * 未声明变量进行赋值操作
      * 改写只可读的属性
      * 对不可扩展的对象进行属性添加
      * 对一个不可配置的对象进行删除操作
      * 函数入参重名
      * 变量名或函数名使用关键字
      * this不再指向window
      * with语句不允许
      * 不可更改arguments对象的值
      * arguments.callee不允许使用

### 3、ES6有哪些新特性
   1. 变量声明const和let，作用域在{}开始起作用了
   2. 模板字符串，反单引号来作为标识，${}内部访问变量，也增加很多ES6的字符串方法，常用有includes、startsWith、endsWith、repeat
   3. 为函数参数提供了默认值，提供rest参数
   4. 箭头函数，不需要function关键字来创建函数，省略return关键字，继承当前上下文的 this 关键字
   5. 拓展的对象功能，键值对重名可省略冒冒号和值，函数可省略冒号与 function 关键字，提供Object.assign()进行浅复制
   6. 解构，从对象或者数组里取出数据存为变量
   7. 展开运算符（...）,合并对象或者数组，或者切取对象或数组的一部分
   8. mport 和 export
   9. Promise，用同步的方式去写异步代码
   10. Generators，生成器函数也是一种函数，最直观的表现就是比普通的function多了个星号*，在其函数体内可以使用yield关键字,有意思的是函数会在每个yield后暂停，可调用next方法进行唤醒。
   11. class、extends、super，在constructor里调用super(),因为子类没有自己的this对象，要继承父类的this对象
   
### 4、怎么理解Promise  
   1. 异步编程的一种解决方案
   2. ES6 将其写进了语言标准，原生提供了Promise对象
   3. 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息
   4. Promise对象的状态不受外界影响，一旦状态改变，就不会再变
   5. Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled(resolved)（已成功）和rejected（已失败）
   6. 缺点是无法取消Promise，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
   7. then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数
   8. Promise.prototype.catch方法是.then(null, rejection)的别名
   9. 一般then和catch搭配使用，then中只传入resolved状态的回调函数
   10. Promise.resolve方法能将现有对象转为 Promise 对象
   11. thenable对象指的是具有then方法的对象
   12. 立即resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时
   13. Promise的优势在于，可以在then方法中继续写Promise对象并返回，然后继续调用then来进行回调操作
   14. then中的回调采用异步的方式处理是为了保证代码执行的一致性
   
### 5、怎么理解BFC
   1. Block Fromatting Context
   2. BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列
   3. 创建BFC，只需要满足这些条件之一即可：
      * float的值不是none。
      * position的值不是static或者relative。
      * display的值是inline-block、table-cell、flex、table-caption或者inline-flex
      * overflow的值不是visible   
   4. 在BFC中，盒子从顶端开始垂直地一个接一个地排列，两个盒子之间的垂直的间隙是由他们的margin 值所决定的。在一个BFC中，两个相邻的块级盒子的垂直外边距会产生折叠.
   5. BFC的作用：
      * 利用BFC避免外边距折叠，若两个相邻元素在不同的BFC中，就能避免外边距折叠
      * BFC包含浮动时，设置把父容器设置成BFC，容器的高度会被正常撑开，容器就会进入正常的文档流中
      * 使用BFC避免文字环绕
      * BFC不会重叠浮动元素      

### 6、@font-face是什么
      ```
         @font-face {
           font-family: 'example';
           src: url(example.ttf);
           font-style: normal;
           font-weight: normal;
           unicode-range: U+0025-00FF;
           font-variant: small-caps;
           font-stretch: expanded;
           font-feature-settings："liga1" on;
         }
      ```           
  * 字体格式有这些：TrueType、Embedded Open Type 、OpenType、WOFF 、SVG
  * TrueType：Windows和Mac系统最常用的字体格式，这类字体和矢量字体一样可以随意缩放、旋转而不必担心会出现锯齿
  * EOT（Embedded Open Type）是嵌入式字体，是微软开发的技术
  * OpenType 是微软和Adobe共同开发的字体，致力于替代TrueType字体
  * WOFF（Web开发字体格式）是一种专门为了Web而设计的字体格式标准，实际上是对于TrueType/OpenType等字体格式的封装，每个字体文件中含有字体以及针对字体的元数据（Metadata），字体文件被压缩，以便于网络传输
  * SVG 是由W3C制定的开放标准的图形格式
  * IE6,7,8 仅支持 Embedded OpenType(.eot) 格式 
  * src 外链字体资源时，遵循同源策略
  * Firefox、Chrome、Safari 以及 Opera 支持 .ttf (True Type Fonts) 和 .otf (OpenType Fonts) 类型的字体
  * IE 8 以及更早的版本不支持新的 @font-face 规则
  * IE 9+ 支持新的 @font-face 规则，但是仅支持 .eot 类型的字体 (Embedded OpenType)

   
