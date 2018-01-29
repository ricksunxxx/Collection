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
   
   
   
   
   
   
   
   
