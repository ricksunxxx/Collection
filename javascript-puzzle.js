/*
  44个 Javascript 变态题解析

  收集时间：2016-06-16     
  英文来自：http://javascript-puzzlers.herokuapp.com/
  中文来自：https://segmentfault.com/a/1190000005681454?utm_source=tuicool&utm_medium=referral
*/


//********************第1题：********************
["1", "2", "3"].map(parseInt); //[1, NaN, NaN]
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

//********************第2题：********************
[typeof null, null instanceof Object]; //["object", false]
/*
  解释：
    X                      typeof X
  undefined              "undefined"
  null                   "object"
  true或false            "boolean"
  任意数字或者NaN        "number"
  任意字符串             "string"
  任意函数               "function"
  任意内置对象(非函数)   "object"

  o instanceof f 
  先计算f.prototype，然后在原型链中查找o，如果找到，那么o是f（或者f的父类）的一个实例，表达式返回true；
  如果f.prototype不在o的原型链上的话，那么o就不是f的实例，instanceof返回false。
*/
