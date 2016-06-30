/*
  44个 Javascript 变态题解析（记录其中值得关注的题目）
   
  对中文的解释结果进行纠正和处理，同时也添加了自己对题目的理解。
  收集时间：2016-06-16     
  英文来自：http://javascript-puzzlers.herokuapp.com/
  中文来自：https://segmentfault.com/a/1190000005681454?utm_source=tuicool&utm_medium=referral
*/


//********************第1题********************************************************************************
["1", "2", "3"].map(parseInt) //[1, NaN, NaN]
    /*
      解释：
      注意：IE8以下不支持map方法
      知识点: Array/map  Number/parseInt

      首先, map接受两个参数, 一个回调函数callback, 一个回调函数的this值，其中回调函数接受三个参数currentValue, index, arrary;
      而题目中, map只传入了回调函数parseInt.
      其次, parseInt只接受两个两个参数 string, radix(基数). radix的合法区间是2-36. 默认是10.
      parseInt() 函数可解析一个字符串，并返回一个整数。

      radix可选，表示要解析的数字的基数。该值介于 2 ~ 36 之间。
      如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
      如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。

      所以，本题目即问：
      parseInt('1', 0);
      parseInt('2', 1);
      parseInt('3', 2);

      题目变形：["1", "2", "3"].map(Number);//[1,2,3]
    */

//********************第2题********************************************************************************
[typeof null, null instanceof Object] //["object", false]
/*
  解释：
    X                      typeof X
  undefined               "undefined"
  null                    "object"
  true或false             "boolean"
  任意数字或者NaN          "number"
  任意字符串               "string"
  任意函数                  "function"
  任意内置对象(非函数)       "object"

  o instanceof f   
  The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.
  先计算f.prototype，然后在原型链中查找o，如果找到，那么o是f（或者f的父类）的一个实例，表达式返回true；
  如果f.prototype不在o的原型链上的话，那么o就不是f的实例，instanceof返回false。
*/

//********************第3题********************************************************************************

[
    [3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)
] //an error

/*
  解释：
  Array.prototype.reduce(callback,[initialValue]) 
  Array.prototype.reduce 被添加到 ECMA-262 标准第 5 版 ，IE8不支持

  reduce接受两个参数, 一个回调, 一个初始值.
  回调函数接受四个参数 previousValue, currentValue, currentIndex, array

  回调函数第一次执行时，如果提供了initialValue，第一个 previousValue 等于 initialValue ，currentValue等于数组中的第一个值；
  如果initialValue未被提供，那么previousValue等于数组中的第一个值，currentValue等于数组中的第二个值。

  如果数组为空并且没有提供initialValue， 会抛出TypeError 。

  如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，
  那么此唯一值将被返回并且callback不会被执行。

  第二个表达式会报异常. 第一个表达式等价于 Math.pow(3, 2) => 9; Math.pow(9, 1) =>9

  拓展：
  将数组所有项相加：
  var total = [0, 1, 2, 3].reduce(function(a, b) {
      return a + b;
  });
  // total == 6  
  数组扁平化：
  var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
  });
  // flattened is [0, 1, 2, 3, 4, 5]

*/

//********************第4题********************************************************************************
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing'); //"Something"
/*
  解释：
  the + operator has higher precedence than the ternary one.加号运算符高于三元运算符
*/

//********************第5题********************************************************************************
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
}
console.log(count);
/*
  解释：
  循环不会停，因为Math.pow(2, 53)是JavaScript的最大值，自增之后还是最大值，for的条件永远满足，所以一直在跑for循环
  如果END不为最大值，则输出101
*/

//********************第6题********************************************************************************
var ary = [0, 1, 2];
ary[10] = 10;
ary.filter(function(x) {
    return x === undefined;
}); //返回[],不是[undefined x 7]
/*
  解释： 
  ary === [0,1,2,undefined x 7,10]
  ary.length === 11
  arr.filter(callback[, thisArg])，callback默认三个参数：element, index, array
  英文解释：callback is invoked only for indexes of the array which have assigned values; 
  it is not invoked for indexes which have been deleted or which have never been assigned values. 
  Array elements which do not pass the callback test are simply skipped, and are not included in the new array.
  意思就是说，未赋值的数组元素，不会传入callback，也不会返回在结果中。（Polyfill中是通过in关系运算符进行判断的，这是重点）
  （稀疏数组用于函数map、forEach、filter等函数，未被赋值的元素都会被忽略掉，类似上面英文的解释）
*/

//********************第7题********************************************************************************
[] == []; //false
/*
  解释： 
  == is the spawn of satan.（撒旦之子，万恶之源）
  扩展：
  [] == 0;     //true
  [1] == 1;    //true
  ['1'] == 1;  //true
  [] == false; //true
  if([]){      
    console.log(1)
  }
  else{
    console.log(0)
  }//1  注意：[]放在if条件里面则为真，因为[]是一个对象
*/

//********************第8题********************************************************************************
Array.isArray(Array.prototype); //true
/*
  解释：
  一个鲜为人知的实事: Array.prototype => [];
*/

//********************第9题********************************************************************************
- 9 % 2 == 1; //false，应该为-1
- 9 % -2 == 1; //false，应该为-1
9 % -2 == 1; //true
'9' % 2 == 1; //true
/*
  解释：
  余数正负号跟操作数一致 
*/

//********************第10题********************************************************************************
Number.MIN_VALUE > 0; //true
/*
  解释：
  Number.MIN_VALUE =>  5e-324  是正数
  Number.MAX_VALUE =>  1.7976931348623157e+308
*/


//********************第11题********************************************************************************
[3. toString(), 3..toString(), 3...toString()]; //[error, '3', error]
/*
  解释：
  3.x is a valid syntax to define "3" with a mantissa of x, toString is not a valid number, but the empty string is.
  注意：
  var a = 3;
  a.toString();//'3'
*/

//********************第12题********************************************************************************
var x = [].reverse;
x(); //window
/*
  解释：
  在浏览器下报错，=_= ，Uncaught TypeError: Array.prototype.reverse called on null or undefined(…)
  原文说法是[].reverse will return this and when invoked without an explicit receiver object it will default 
  to the default this AKA window
  求大神指导！！！
*/
