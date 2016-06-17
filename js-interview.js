//********************第1题********************
function bar() {
    return a;
    var a = 10;

    function a() {}
}
alert(bar()); //function a() {}   函数声明优先级高于var声明

//********************第2题********************
var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
};
var go = foo.baz.bar;
alert(go()); //3   相当于alert(window.go()); 其中this指向window
alert(foo.baz.bar()); //1  this指向foo.baz

//********************第3题********************
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr.foo = 'c';
alert(arr.length); //2   数组的原型是Object，所以可以像其他类型一样附加属性，不影响其固有性质

//********************第4题********************
function foo(a) {
    arguments[0] = 2;
    alert(a);
}
foo(1); //2  实参可以直接从arguments数组中修改

//********************第5题********************（有疑问，先mark）
var x = 1;

function bar() {
    this.x = 2;
    return x;
}
var foo = new bar();
alert(foo.x); //2     如果把var x = 1 改为 var x = {} ,结果是undefined ，暂时没想明白为什么是undefined
