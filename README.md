# 前端基础知识汇总

## 1、ES5有哪些新变化
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

## 2、严格模式有什么用
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

## 3、ES6有哪些新特性
   1. 变量声明const和let，作用域在{}开始起作用了
   2. 模板字符串，反单引号来作为标识，${}内部访问变量，也增加很多ES6的字符串方法，常用有includes、startsWith、endsWith、repeat
   3. 为函数参数提供了默认值，提供rest参数
   4. 箭头函数，不需要function关键字来创建函数，省略return关键字，继承当前上下文的 this 关键字
   5. 拓展的对象功能，键值对重名可省略冒冒号和值，函数可省略冒号与 function 关键字，提供Object.assign()进行浅复制
   6. 解构，从对象或者数组里取出数据存为变量
   7. 展开运算符（...）,合并对象或者数组，或者切取对象或数组的一部分
   8. import 和 export
   9. Promise，用同步的方式去写异步代码
   10. Generators，生成器函数也是一种函数，最直观的表现就是比普通的function多了个星号*，在其函数体内可以使用yield关键字,有意思的是函数会在每个yield后暂停，可调用next方法进行唤醒。
   11. class、extends、super，在constructor里调用super(),因为子类没有自己的this对象，要继承父类的this对象
   
## 4、怎么理解Promise  
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
   
## 5、怎么理解BFC
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

## 6、@font-face是什么      
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
  1. 字体格式有这些：TrueType、Embedded Open Type 、OpenType、WOFF 、SVG
  2. TrueType：Windows和Mac系统最常用的字体格式，这类字体和矢量字体一样可以随意缩放、旋转而不必担心会出现锯齿
  3. EOT（Embedded Open Type）是嵌入式字体，是微软开发的技术
  4. OpenType 是微软和Adobe共同开发的字体，致力于替代TrueType字体
  5. WOFF（Web开发字体格式）是一种专门为了Web而设计的字体格式标准，实际上是对于TrueType/OpenType等字体格式的封装，每个字体文件中含有字体以及针对字体的元数据（Metadata），字体文件被压缩，以便于网络传输
  6. SVG 是由W3C制定的开放标准的图形格式
  7. IE6,7,8 仅支持 Embedded OpenType(.eot) 格式 
  8. src 外链字体资源时，遵循同源策略
  9. Firefox、Chrome、Safari 以及 Opera 支持 .ttf (True Type Fonts) 和 .otf (OpenType Fonts) 类型的字体
  10. IE 8 以及更早的版本不支持新的 @font-face 规则
  11. IE 9+ 支持新的 @font-face 规则，但是仅支持 .eot 类型的字体 (Embedded OpenType)

## 7、SVG是什么
  1. SVG（Scalable Vector Graphics）是可缩放矢量图形的缩写，基于可扩展标记语言XML来描述二维矢量图形的一种图形格式，由W3C制定，是一个开放标准
  2. 优点： 
        * 和PNG、GIF比较起来，文件体积更小，且可压缩性强；
        * 由于采用XML描述，可以轻易的被读取和修改，描述性更强；
        * 在放大或改变尺寸的情况下其图形质量不会有所损失，与分辨率无关，是可伸缩的；
        * SVG是面向未来 (W3C 标准)的，同时浏览器兼容性好；
        * 使用CSS 和 JS能很方便的进行控制，同时可以很轻易地描述路径动画   
  3. 与canvas是区别：
        * Canvas基于像素，提供2D绘制函数，是一种HTML元素类型，依赖于HTML，只能通过脚本来绘制图形
        * Canvas提供的功能比较原始，适合像素处理，动态渲染和大数据量绘制的应用场景     
        * SVG为矢量，提供一系列图形元素（Rect, Path, Circle, Line …），还有完整的动画，事件机制，本身可以独立使用，也可以嵌入到HTML中
        * SVG很早就成为了国际标准，功能更完善，适合静态图片展示，高保真文档查看和打印的应用场景 
  4. SVG中提供了很多基础元素可以用来绘制基础的形状，譬如矩形、圆形、椭圆、多边形、折线、线条、路径等，同时可以将这些基础形状组合绘制出复杂的图像
  5. 有4种常用的方式加载SVG  
        * img标签
           ``` 
           <img src="tw93.svg" alt="Hello SVG" height="65" width="68"> 
           ```       
        * CSS background   
            ```
            .logo {
              background: url("data:image/svg+xml;base64,[data]");
            }
            ```
        * 通过object
           ```
           <object type="image/svg+xml" data="data:image/svg+xml;base64,[data]">
              fallback
            </object>
            ```
        * 直接内嵌到HTML
            ```
            svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65">
              <path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
              <path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
            </svg>
            ```      

## 8、HTTP是什么
  1. HTTP 全称是Hypertext Transfer Protocol，本质上是一种协议，即超文本传输协议。
  2. HTTP是一种无状态协议，每次请求都是独立的，当需要进行保存用户登录状态时，一般使用Cookie来保存状态，Cookie会根据服务器端发送的响应报文内的一个叫做Set-Cookie的首部字段，通知客户端保存Cookie（保存在自己的电脑里），当下次客户端发送请求时，Cookie值会被添加到请求报文中发送出去。
  3. 版本对比：
     * HTTP/0.9、HTTP/1.0  
    为非持久连接，每次连接只处理一个请求，完成请求即断开连接，采用这种方式可以节省传输时间；无请求头跟响应头，客户端的前后请求是同步的，类似多线程的同步机制。  
     * HTTP/1.1 
    默认为持久连接（即默认开启了Connection:keep-alive），在一次TCP连接里可以处理多次HTTP请求，但Keep-Alive不会永久保持连接，它有一个保持时间；客户端不同请求之间是异步的，类似多线程的异步处理；HTTP是基于TCP连接的，持久连接可以节省TCP三次握手的时间。 
     * HTTP/2.0
    HTTP/2 采用二进制格式传输数据，而非 HTTP/1.x 的文本格式  <br>
    单一长连接：只会创建一条TCP连接，即使这页面可能包含上百个资源，减少TCP握手带来的时延；<br>
    多路复用：虽然只有一条TCP连接，但逻辑上分成了很多stream，把要传输的信息分割成一个个二进制帧；<br>
    头部压缩；    <br>
    服务端推送；
  4. HTTP 请求组成部分:请求行、请求头、请求正文
     * 请求行：方法、URL、协议/版本
  5. HTTP 响应组成部分:状态行、消息报头、响应正文
     * 状态行：状态码、原因短语、协议/版本
  6. 状态码
     * 301 永久转移，一般新老网站更替时使用
     * 302 Found 资源暂时转移，很多短链接跳转长链接就是使用的302
     * 304 Not Modified 没有修改 ，可以通过文件的哈希值etag，也可以根据Last Modified Time（文件的修改时间）
     * 400 Bad Request 请求无效，当必要参数缺失、参数格式不对时，后端通常会返回400
     * 403 Forbidden 拒绝服务 ，服务能够理解你的请求，包括传参正确，但是拒绝提供服务
     * 401 没有认证，需要登陆验证
     * 500 内部服务器错误，如业务代码出现了异常没有捕获，被tomcat捕获了，就会返回500错误，而当服务彻底挂了，连返回都没有的时候，那么就是502了
     * 502 Bad Gateway 网关错误  收到请求了，但请求没有给到业务服务
     * 503 Service unavailable 服务不可用
     * 504 Gateway Timeout 网关超时  通常是因为服务处理请求太久，导致超时
  7. 请求的编码方式
     * application/www-x-form-urlencoded 最常用的一种，适用于GET/POST等
     * application/json 常见于请求响应的数据格式
     * multipart/form-data 通常用于上传文件
  8. get和post区别
     * GET请求把参数放到URL中，POST把参数放在报文体中，至于大小限制，是浏览器和系统约束的，HTTP协议并没有限制URI的长度。
     * 本质上GET/POST是一样的，只是数据放置的位置不同，但get把数据放在URL中，涉及敏感信息时可能会泄露，但这只是相对的不安全，用抓包工具同样可以拿到post的数据。
     * GET的语义是请求获取指定的资源，POST的语义是根据请求负荷（报文主体）对指定的资源做出处理。
     * GET方法是安全、幂等、可缓存的（除非有 Cache-Control Header的约束）,GET方法的报文主体没有任何语义。
     * POST不安全，不幂等，（大部分实现）不可缓存，这也是浏览器在后退/刷新时遇到POST会给用户提示的原因。
     * GET 只允许 ASCII 字符；POST 没有限制，也允许二进制数据。
     * GET 可收藏为书签，参数保留在浏览器历史中；POST 不可收藏为书签，参数不会保存在浏览器历史中。

## 9、TCP/IP协议族
1. TCP/IP协议族就采用了分层的思想，自上而下分成了四层： 应用层，传输层，网络层，链路层，每一层的协议只约定了特定的功能。
2. HTTP、FTP、DNS位于应用层，TCP、UDP位于传输层，IP位于网络层。
   * DNS 提供域名到IP地址之间的解析服务
   * TCP属于传输层，提供可靠的字节流服务，TCP 协议为了更容易传送大数据才把数据分割，而且 TCP 协议能够确认数据最终是否送达到对方
4. 发送端发送请求时，数据从上往下走；接收端接收数据时，数据从下往上走。

## 10、常见的网站漏洞
跨站脚本攻击（XSS）、跨站请求伪造（CSRF）、SQL注入、DDOS攻击、DNS劫持、点击劫持
## 11、xss(Cross Site Scripting)
1. 解释
    * 恶意攻击者往Web页面里插入恶意Script代码，当用户浏览该页面时，嵌入其中的Script代码会被执行，从而达到恶意攻击用户的目的。
2. xss攻击什么
    * 窃取网页的cookie
    * 劫持流量实现恶意跳转
    * 劫持访问，跳转至钓鱼网站
3. 代码插入方式
    * script、iframe、a标签
    * img标签的onerror属性
    * 通过URL查询参数
4. 类型
    * 反射型(要触发漏洞，需要访问特定的链接才能够实现)
    * 储存型(恶意代码储存到数据库了)
5. 防范
    * 过滤，在输入和输出端都进行过滤，对诸如script、img、a等标签进行过滤，对input的输入也要进行过滤。
    * 编码，像一些常见的符号，如<>在输入的时候要对其进行转换编码，这样做浏览器是不会对该标签进行解释执行。
    * 限制长度，攻击的代码一般比较长，可以对字段进行长度限制。
    * cookie设置httpOnly，禁止js操作
    * 不引用不可靠的js
    * cookie中不存放账户密码之类的重要信息
    * 避免控制台注入代码
    * 设置taken的有效期

## 12、CSRF(Cross Site Request Forgery)
1. 原理
    * 简单理解就是攻击者盗用了你的身份，以你的名义发送恶意请求。
2. 形成CSRF的条件
    * 登录受信任网站A，并在本地生成Cookie。
    * 在不登出A的情况下，访问危险网站B
3. 防范
    * 验证HTTP Referer字段，但是不可靠，攻击者可以篡改Referer的值。
    * 添加token验证，在HTTP请求中以参数的形式加入一个随机产生的token，服务器接收到请求时进行token的校验,但是token暴露在请求报文中，不能保证token的安全。
    * 验证码，可以遏制大部分的CSRF攻击，重要操作（比如转账）时可以强制用户和应用再次确认，但是大规模使用影响用户体验。
    * 设置会话有效期。

## 13、xss与csrf的区别    
1. xss本质上是HTML注入，csrf本质上是借用合法身份(cookie)，干非法之事(发送请求)

## 14、SQL注入攻击
1. 解释：
* 指web应用程序对用户输入数据的合法性没有判断，攻击者可以在web应用程序中事先定义好的查询语句的结尾上添加额外的SQL语句，以此来实现欺骗数据库服务器执行非授权的任意查询，从而进一步得到相应的数据信息
2. 攻击步骤：
* 判断应用程序是否存在注入漏洞
* 收集信息、并判断数据库类型
* 根据注入参数类型，重构SQL语句的原貌
* 猜解表名、字段名
* 获取账户信息、攻击web或为下一步攻击做准备
3. 防范
* 数据转义，将提交的变量中所有的’(单引号)，”(双引号)，\ (反斜杠)，空白字符等都在前面自动加上\。
* 对输入进行验证，增加黑名单或者白名单验证，白名单验证一般指，检查用户输入是否是符合预期的类型、长度、数值范围或者其他格式标准。黑名单验证是指，若在用户输入中，包含明显的恶意内容则拒绝该条用户请求。在使用白名单验证时，一般会配合黑名单验证。

## 15、DDoS攻击
   1. DDoS就是Distributed Denial of Service的简写，分布式拒绝服务。
   2. DDoS攻击通过大量合法的请求占用大量网络资源，以达到瘫痪网络的目的
   3. 攻击手段：
   * 主要是SYN/ACK Flood 洪水攻击，向受害主机发送大量伪造源 IP 和源端口的 SYN 或 ACK 包，导致主机的缓存资源被耗尽或忙于发送回应包而造成拒绝服务 
   4. 防范：
   * 关闭不必要的服务
   * 限制同时打开的Syn半连接数目
   * 缩短Syn半连接的time out 时间
   * 及时更新系统补丁

## 16、DNS劫持（DNS劫持又称域名劫持）
  1. 通过劫持了DNS服务器，通过某些手段取得某域名的解析记录控制权，进而修改此域名的解析结果，导致对该域名的访问由原IP地址转入到修改后的指定IP，其结果就是对特定的网址不能访问或访问的是假网址，从而实现窃取资料或者破坏原有正常服务的目的。
  2. 防范：
  * 使用安全稳定可靠的DNS服务器，并且及时升级，更新补丁，加固服务器。
  * 保护好域名注册的账号信息。
  * 互联网公司准备两个以上的域名，一旦黑客进行DNS攻击，用户还可以访问另一个域名。

## 17、点击劫持
1. 点击劫持（ClickJacking）是一种视觉上的欺骗手段。大概有两种方式，一是攻击者使用一个透明的iframe，覆盖在一个网页上，然后诱使用户在该页面上进行操作，此时用户将在不知情的情况下点击透明的iframe页面；二是攻击者使用一张图片覆盖在网页，遮挡网页原有位置的含义
2. 解决方法
* 使用一个HTTP头——X-Frame-Option
* 它有三个可选的值：
* DENY：浏览器会拒绝当前页面加载任何frame页面；
* SAMEORIGIN：frame页面的地址只能为同源域名下的页面；
* ALLOW-FROM origin：允许frame加载的页面地址；

## 18、Ajax
1. AJAX可以是同步请求，也可以是异步请求
2. AJAX通过原生的 XMLHttpRequest 对象发出HTTP请求
3. AJAX通过 onreadystatechange 指定回调函数，监听通信状态（readyState属性）的变化
4. AJAX只能向同源网址（协议、域名、端口都相同）发出HTTP请求
5. readyState 是XMLHttpRequest实例的属性
* 0，对应常量UNSENT，表示XMLHttpRequest实例已经生成，但是open()方法还没有被调用。
* 1，对应常量OPENED，表示send()方法还没有被调用，仍然可以使用setRequestHeader()，设定HTTP请求的头信息。
* 2，对应常量HEADERS_RECEIVED，表示send()方法已经执行，并且头信息和状态码已经收到。
* 3，对应常量LOADING，表示正在接收服务器传来的body部分的数据，如果responseType属性是text或者空字符串，responseText就会包含已经收到的部分信息。
* 4，对应常量DONE，表示服务器数据已经完全接收，或者本次接收已经失败了。
6. 可以使用abort()方法，终止XMLHttpRequest请求。
7. status属性为只读属性，表示本次请求所得到的HTTP状态码，它是一个整数。
8. XMLHttpRequest第一版，只能对 onreadystatechange 这一个事件指定回调函数。
9. XMLHttpRequest第二版允许对更多的事件指定回调函数：
* onloadstart 请求发出
* onprogress 正在发送和加载数据
* onabort 请求被中止，比如用户调用了abort()方法
* onerror 请求失败
* onload 请求成功完成
* ontimeout 用户指定的时限到期，请求还未完成
* onloadend 请求完成，不管成果或失败
10. 通过跨域AJAX发送Cookie，需要打开withCredentials，而服务器必须显式返回Access-Control-Allow-Credentials 头信息
11. 使用过open()方法的请求，再次使用这个方法，等同于调用abort()
12. 缺点：
* 1.Ajax干掉了Back与History功能，即对浏览器机制的破坏在动态更新页面的情况下，用户无法回到前一页的页面状态，因为浏览器仅能记忆历史纪录中的静态页面。
* 对搜索引擎的支持比较弱。通过AJAX动态更新的页面可能无法被搜索引擎搜到。
* 安全问题，暴露更多的数据和服务器逻辑，存在被攻击的可能性
13. 适用场景
* 表单驱动的交互
* 动态加载数据，按需取数据
* 数据局部刷新

## 19、createDocumentFragment与createElement的区别
1. createDocumentFragment 是创建文档片段，而 createElement 是创建文档元素，语义上一个是容器，一个是容器内容。
2. createDocumentFragment 是把它所有子节点插入DOM，并不带本身，因为没有文档片段这样的标记，而 createElement 会整个插入DOM，包括它自己本身。
3. createDocumentFragment 不可用使用属性 innerHTML 来添加子节点，createElement 则可以使用，因为 innerHTML属于元素的属性，文档片段不是元素。
4. 在一次性添加多个元素到文档中时，一般使用 createDocumentFragment 来收纳所有的元素，然后把文档片段插入到DOM中，以此避免插入元素数量较大时出现页面性能问题。

## 20、原生一些常用方法
1. 查找元素节点
```
document.getElementById
document.getElementsByClassName
document.getElementsByTagName
document.getElementsByName     通过元素的Name属性的值
document.querySelector         IE8+
document.querySelectorAll      IE8+

```
2. 节点的属性
```
previousElementSibling      前一个元素节点
nextElementSibling          后一个元素节点
childNodes                  所有的子节点(包括文本节点和元素节点)
firstChild                  第一个子节点
firstElementChild           第一个子元素节点
lastChild                   最后一个子节点
lastElementChild            最后一个子元素节点
parentNode                  父节点
nodeName                    HTML 元素的大写字母标签名(文本节点的 nodeName 始终是 #text;文档节点的 nodeName 始终是 #document)
nodeValue                   (元素节点的 nodeValue 是 null;本节点的 nodeValue 是文本本身;属性节点的 nodeValue 是属性值)
nodeType                    节点的类型,元素1，属性2，文本3，注释8，文档9
```
3. 节点增加
```
appendChild()    添加
removeChild()    移除
replaceChild()   替换
insertBefore()   插入
```
4. 创建节点
```
createDocumentFragment()    创建一个DOM片段
createElement()             创建一个具体的元素
createTextNode()            创建一个文本节点
```

## 21、正则
1. 正则表达式：是一个描述字符模式的对象，JavaScrip中正则表达式用RegExp对象表示，可以使用RegExp构造函数来创建正则对象
1. 非捕获分组(?:)不会被捕获到，效率比捕获分组高。
2. 量词默认都是贪婪匹配，在量词后面加（?）可以实现非贪婪匹配。
3. 引用包含模式引用和内容引用，" \ "后面加数字 用于模式的引用，" $ " 后面加数据 用于匹配的内容引用。
4. "()" 用于分组
5. " (?: ) "符号只用来分组而不创建引用，即非捕获非分组
6. String.match 如果加修饰符g,则返回全部匹配结果数组，否则返回null
7. String.search 只能实现一次搜索匹配，即不带修饰符g
8. 正则对象的 exec() 都会把完整的细节添加到它返回的数组中

## 22、H5新增哪些新特性
1. 新增新元素
```
<header>、<section>、<footer>、<article>、<aside>、<audio></audio>、<video><video>、<datalist>等
```
2. input新增类型
```
number、email、tel、date、month、url、range、search、color等
```
3. Web 存储

```
localStorage、sessionStorage
```

4. Canvas与SVG
* Canvas 通过 JavaScript 来绘制 2D 图形；
* SVG 是一种使用 XML 描述 2D 图形的语言；
* Canvas 依赖分辨率，不支持事件处理器，最适合带有大型渲染区域的应用程序；
* SVG 不依赖分辨率，支持事件处理器，不适合游戏应用，最适合带有大型渲染区域的应用程序。
5. 地理定位 navigator.geolocation
6. 应用程序缓存 
通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。例如：
```
<html manifest="demo.appcache">
```
7. Web Workers  
* Web Workers是运行在后台的 JavaScript，不会影响页面的性能
* web worker 位于外部文件中，无法访问window 、document、parent对象。
* web worker 一般用于更耗费 CPU 资源的任务。
* 利用postMessage() 方法向 HTML 页面传回一段消息。
```
new Worker("demo_workers.js");
w.onmessage=function(event){
document.getElementById("result").innerHTML=event.data;
};


w.terminate();//终止
```
8. 服务器发送事件 EventSource
* 网页自动获取来自服务器的更新
```
var source=new EventSource("demo_sse.php");
source.onmessage=function(event)
  {
  document.getElementById("result").innerHTML+=event.data + "<br />";
  };
```  

## 23、fetch 与 ajax
* 从 fetch()返回的 Promise 将不会拒绝HTTP错误状态, 即使响应是一个 HTTP 404 或 500,仅在网络故障时或任何阻止请求完成时，它才会拒绝
* 默认情况下, fetch在服务端不会发送或接收任何 cookies,如果想要在同域中自动发送cookie,加上 credentials 的 same-origin 选项
```
fetch(url, {
  credentials: ’same-origin'//如果设置值为include，则表示可以跨域传送cookie
})
```
* fetch语法简洁，更加语义化，采用了Promise的异步处理机制，使用比ajax更加简单
* XMLHttpRequest 是一个设计粗糙的 API，不符合关注分离（Separation of Concerns）的原则，配置和调用方式比较混乱

## 24、浏览器内的事件队列
整个的js代码是 macrotask 队列先执行，同步代码执行完后，有microtask执行microtask，没有microtask执行下一个macrotask，如此往复循环至结束

## 25、跨域
* 1、jsonp
* 2、cors 跨域资源共享
* 3、document.domain + iframe跨域（此方案仅限主域相同，子域不同的跨域应用场景）
* 4、window.postMessage 跨域
* 5、使用反向代理服务器，使用代理服务器去获取需要的服务

## 26、js常用设计模式
* 1、外观模式：把一个比较复杂的操作封装成一个函数，比如封装一个原生的ajax操作；
* 2、代理模式：把一个对象的访问和操作，交给另一对象来处理，比如Vue的Data对象的访问；
* 3、观察者模式：即发布订阅，比如一个博客的订阅按钮，通过维护一个订阅者的回调数组，在博客更新时，循环执行回调通知订阅者；
* 4、工厂模式：就是按照指引，生产出对应的对象，对象间是互相解耦的。简单工厂模式就是创建一个对象，复杂的工厂模式则是常用的父子类继承；
* 5、单体模式：命名空间的使用，把一堆相关的属性和方法放入一个命名空间中，避免全局变量的污染。
* 6、策略模式：将算法的使用与算法的实现分离开来，比如某个“类”中包含有大量的条件性语句，可以把每个条件抽象成一个策略。


## 12、web性能优化

## 12、浏览器兼容性问题

## 13、常用WEB开发调试工具

## 14、socket是什么

## 15、原生常用功能

## 16、react，vue，jQuery, YUI 

## 17、框架设计

## 18、

## 19、小程序开发

## 20、公众号开发

## 21、数据库常见问题

## 22、开发流程与构建工具grunt、gulp、webpack

## 23、sass/less

## 24、

## 25、

## 26、原型与继承

## 27、闭包

## 28、AMD、CommonJS、ReqireJS

## 29、排序算法

## 30、数组去重

## 31、如何判断数据类型

## 32、对象的浅复制与深复制

## 33、git常见用法

## 34、模块化和组件化的区别

## 35、实现动画有哪几种方法，它们之间的区别

## 36、jQuery常见方法的源码实现

## 37、NodeJS基础问题

## 38、如何跨域，它们之间有何不同

## 39、viewport是什么

## 40、盒子模型是什么



## 42、响应式布局

## 43、CSS3有哪些属性

## 44、浏览器存储有哪些

## 45、列举js异步编程的方法

## 46、vue组件中的data为什么必须是函数
1. 引用类型数据指向同一个内存地址。
2. 用函数来返回数据，避免引用类型的变量共享数据，同时保证每个组件的Data独立。

## 47、VUE中组件是如何通信的
1. 父组件向子组件通信
   * 使用props，父组件可以使用props向子组件传递数据。
   * 使用$children可以在父组件中访问子组件。
2. 子组件向父组件通信
   * 使用vue事件，父组件向子组件传递事件方法，子组件通过$emit触发这个事件方法，回调给父组件。
   * 使用$parent可以访问父组件的数据。
   * 通过修改父组件传递的props来修改父组件数据，但是并不推荐直接修改props的值，因为如果props是一个对象或数组，在子组件内部改变它会影响父组件的状态,避免应用的数据流变得难以理解,如果子组件要处理props,可以用本地变量存储或者设置计算属性。另外，如果数据是用于显示修改的，在实际开发中建议将其放入data中，在需要回传给父组件的时候再用事件回传数据。这样做保持了组件独立以及解耦，不会因为使用同一份数据而导致数据流异常混乱，只通过特定的接口传递数据来达到修改数据的目的，而内部数据状态由专门的data负责管理。
3. 非父子组件、兄弟组件之间的数据传递
   * Vue官方推荐使用一个Vue实例作为中央事件总线，组件各自引入中央总线，用$on方法在一个组件中监听一个事件，用$emit在另一个组件中触发事件。
   * 复杂的单页应用数据管理，建议使用vuex进行状态管理。

## 48、Vue数据双向绑定的原理
1. Vue.js的响应式原理依赖于Object.defineProperty，这也是Vue.js不支持IE8以及更低版本浏览器的原因。Vue通过设定对象属性的 setter/getter方法来监听数据的变化，通过getter进行依赖收集，而每个setter方法就是一个观察者，在数据变更的时候通知订阅者更新视图。
2. 其实Watcher与data可以看成一种被绑定的状态（实际上是data的闭包中有一个Deps订阅着，在修改的时候会通知所有的Watcher观察者），在data发生变化的时候会触发它的setter，setter通知Watcher，Watcher进行回调通知组件重新渲染的函数，之后根据diff算法来决定是否发生视图的更新。

## 49、VUE实例事件接口和浏览器的事件接口有何不同

## 50、JavaScript的数据类型都有什么
1. 基本(原始)数据类型：String,Boolean,Number,Undefined, Null
2. 引用数据类型：Object(Array,Date,RegExp,Function,Math,JSON,Arguments,Object)
3. 检查数据类型的方法：
   * typeof
   ```
   typeof 'sun'        === 'string'
   typeof true         === 'boolean'
   typeof 12           === 'number'
   typeof undefined    === 'undefined'
   typeof null         === 'object'
   typeof function(){} === 'function'
   typeof []           === 'object'
   typeof Math         === 'object'
   typeof new Date()   === 'object'
   typeof new RegExp() === 'object'
   typeof JSON         === 'object'
   typeof new Object() === 'object'
   ```
   注意：typeof 可以判断出一个函数和基本类型（除开null），但是判断不出一个数组；另外，比较特别的是 typeof null 返回的是 object，因为历史原因，null 表示还没指向具体内存地址，而 undefined 则表示变量还没有值。

   * instanceof
   ```
   [] instanceof Array === true 
   ```
   注意：不同window或iframe之间的对象类型检测不能使用 instanceof 

   * Object.prototype.toString（返回的是[[class]]属性）
   ```
   Object.prototype.toString.call('sun')          === '[object String]' 
   Object.prototype.toString.call(true)           === '[object Boolean]' 
   Object.prototype.toString.call(12)             === '[object Number]' 
   Object.prototype.toString.call(undefined)      === '[object Undefined]' 
   Object.prototype.toString.call(null)           === '[object Null]' 
   Object.prototype.toString.call([])             === '[object Array]' 
   Object.prototype.toString.call(function(){}{}) === '[object Function]' 
   Object.prototype.toString.call(new Date())     === '[object Date]' 
   Object.prototype.toString.call(Math)           === '[object Math]' 
   Object.prototype.toString.call(new RegExp())   === '[object RegExp]' 
   Object.prototype.toString.call(JSON)           === '[object JSON]'
   Object.prototype.toString.call(new Object())   === '[object Object]'
   ```
   注意：对于null 和 undefined ，在IE6/7/8中用 Object.prototype.toString.call() 检测返回 '[object Object]'

   * constructor
   ```
   ('sun').constructor === String
   (true).constructor === Boolean
   (12).constructor === Number
   (undefined).constructor //不能读这个属性
   (null).constructor      //不能读这个属性
   ([]).constructor === Array
   (function(){}).constructor === Function
   (new Date()).constructor === Date
   (Math).constructor === Object  //注意，这里返回对象构造函数，并不是Math
   (new RegExp()).constructor === RegExp
   ```

## 51、Object.prototype.toString 原理
   1. 在ECMAScript 5中，Object.prototype.toString()被调用时，会进行如下步骤： 
    - 如果 this是undefined ，返回 [object Undefined] ； 
    - 如果 this是null ， 返回 [object Null] ； 
    - 令 O 为以 this 作为参数调用 ToObject 的结果； 
    - 令 class 为 O 的内部属性 [[Class]] 的值； 
    - 返回三个字符串 "[object", class, 以及"]" 拼接而成的字符串。    
   2. ES5 规范
   * 本规范的每种内置对象都定义了 [[Class]] 内部属性的值。宿主对象的 [[Class]] 内部属性的值可以是除了 "Arguments", "Array", "Boolean", "Date", "Error", "Function", "JSON", "Math", "Number", "Object", "RegExp", "String" 的任何字符串。[[Class]] 内部属性的值用于内部区分对象的种类。注，本规范中除了通过 Object.prototype.toString ( 见 15.2.4.2) 没有提供任何手段使程序访问此值。
   3. ES6 规范
   * 在ES6里，之前的 [[Class]] 不再使用，取而代之的是一系列的 internal slot, 返回由三个字符串 "[object", tag, and "]" 拼接而成的一个字符串。

## 52、JavaScript事件机制
   1. 事件绑定方式
   * 直接绑定在dom上
   * 使用DOM属性，例如使用onclick
   * 用W3C标准，addEventListener（IE8以下用 attachEvent）
   * 注意：前面两种属于DOM0级事件标准，第三种属性DOM2级事件标准

  ```
          function addEvent(target, type, handler) {
              if (target.addEventListener) {
                  target.addEventListener(type, handler, false);
              } else {
                  target.attachEvent('on' + type, handler)
              }
          }
  ```

  2. 事件流依次经过捕获阶段、目标阶段、冒泡阶段（微软当年支持的做法）（这些阶段的划分在DOM2级事件标准才有） 
  3. 事件委托时，可以用 event.target || event.srcElement 来获得事件目标
  4. 不同绑定方式，不同的执行顺序

```
    <a href="javascript:alert(1)" onclick="alert(2)" id="link">click me</a>           
      var link = document.getElementById('link');
      $('#link').on('click', function () { alert(3); });

      link.addEventListener('click', function () {
          alert(4);
      });

      $('#link').on('click', function () { alert(5); });

      link.addEventListener('click', function () {
          alert(6);
      });

      link.onclick = function () { alert(7); }      
```   
   上面会输出：7，3，5，4，6，1
   * DOM的属性onclick会覆盖HTML中的onclick，优先级最高
   * javascript:协议优先级最低
   * 最困惑的是jQuery的on方法，如果代码先执行on方法，后面的on方法则跟着注册，即使代码放在addEventListener之后，因为jQuery 源码里在监听事件的时候，把事件句柄存入一个handle队列，所以输出3之后就马上输出5
   * 如果代码先执行addEventListener，再执行on方法，则按顺序触发事件句柄，但是on方法执行后，后面的代码遵循上面一步。
5. DOM2 级事件处理程序中的 this 也指向 addEventListener 的那个元素，但是IE8以下事件处理程序 中的 this 指向 window
6. removeEventListener 无法移除匿名函数的事件处理程序
7. IE8及更早版本只支持事件冒泡
8. stopPropagation() 取消事件的进一步捕获或冒泡。
9. stopImmediatePropagation() 取消事件的进一步捕获或冒泡，同时阻止任何事件处理程序被调用（DOM3级事件中新增）
10. eventPhase 调用事件处理程序的阶段：1表示捕获阶段，2表示“处于目标”，3表示冒泡阶段。
11. cancelBubble 在主流浏览器也能用，不仅仅在IE8以下。
12. focus、blur事件不会冒泡；focusin、focusout与它们等价，但能冒泡。jquery内部代码其实是用focusin和focusout来代理这两个属性的。












## 2019

## 1、 HTTP 与 HTTPS 区别
   1）HTTP协议以明文方式发送内容，不提供任何方式的数据加密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息，因此，HTTP协议不适合传输一些敏感信息，比如：信用卡号、密码等支付信息。
   2）HTTPS在HTTP的基础上加入了SSL协议，SSL（Secure Sockets Layer）依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。
   
   HTTPS和HTTP的区别主要如下：

1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。

2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。

3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
   
 HTTPS的优点：
 SEO方面：采用HTTPS加密的网站在搜索结果中的排名将会更高
 安全性：HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性
 
 缺点：
 使用HTTPS协议会使页面的加载时间延长近50%，增加10%到20%的耗电
 SSL证书的信用链体系并不安全
 
 SSL/TLS协议的基本思路是采用公钥加密法，也就是说，客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。
（1） 客户端向服务器端索要并验证公钥。
（2） 双方协商生成"对话密钥"。
（3） 双方采用"对话密钥"进行加密通信。

如何保证公钥不被篡改？
解决方法：将公钥放在数字证书中。只要证书是可信的，公钥就是可信的。

公钥加密计算量太大，如何减少耗用的时间？
解决方法：每一次对话（session），客户端和服务器端都生成一个"对话密钥"（session key），用它来加密信息。由于"对话密钥"是对称加密，所以运算速度非常快，而服务器公钥只用于加密"对话密钥"本身，这样就减少了加密运算的消耗时间。

## 2、 小程序架构原理

1、原生组件有：input、textarea、video、camera、live-player、live-pusher、map、canvas

2、整个小程序由两个 webview 组成，代码分为 UI 层和逻辑层。UI 层运行在第一个 WebView 当中，执行 DOM 操作和交互事件的响应，里面是 WAWebview.js 代码及编译后的内容。逻辑层执行在（第二个webview 中）独立的 JS 引擎中（iOS：JavaScriptCore, android：X5 JS解析器；统称 JSCore；开发工具中，nwjs Chrome 内核），WAService.js 代码和业务逻辑。

当我们对 view 层进行事件操作后，会通过 WeixinJSBridge 将数据传递到 Native 系统层。Native 系统层决定是否要用 native 处理，然后丢给 逻辑层进行用户的逻辑代码处理。逻辑层处理完毕后会将数据通过 WeixinJSBridge 返给 View 层，View 渲染更新视图。

3、在 iOS 上，小程序的 javascript 代码是运行在 JavaScriptCore 中
   在 Android 上，小程序的 javascript 代码是通过 X5 内核来解析
   在 开发工具上， 小程序的 javascript 代码是运行在 nwjs（chrome内核） 中

小程序这么处理的
   好处是：
   这样渲染进程和逻辑进程分离，并行处理：加速首屏渲染速度；避免单线程模型下，js 运算时间过长，UI 出现卡顿。 完全采用数据驱动的方式，不能直接操作 DOM，避免低质量的代码。 

缺点：
   1、不能灵活操作 DOM，无法实现较为复杂的爱的暖效果；
   2、部分和 NA 相关的视图有使用限制，如微信的 scrollView 内不能有 textarea；
   3、页面大小、打开页面数量都受到限制
   4、需要单独开发适配，不能复用现有代码资源

微信小程序生命周期分“应用生命周期”和“页面生命周期”。
应用生命周期含onLaunch, onShow, onHide状态，onLaunch, onShow可获取打开小程序时的相关参数path, query, scene， shareTicket， referrerInfo，注册为App({})，一个小程序只有一个App({})。
页面生命周期含onLoad, onShow, onHide, onReady, onUnload，onLoad可获取其他页面打开当前页面时所所调用的query参数，注册为Page({})，每个页面有且必须有一个Page({})。

## 3、MVC
   MVC模式（Model–view–controller）是软件工程中的一种软件架构模式。
   
   控制器（Controller）- 负责转发请求，对请求进行处理。
   
   视图（View） - 界面设计人员进行图形界面设计。
   
   模型（Model） - 程序员编写程序应有的功能（实现算法等等）、数据库专家进行数据管理和数据库设计(可以实现具体的功能)。
   
## 4、MVVM
   MVVM（Model–view–viewmodel）是一种软件架构模式，借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离。
   
   MVVM有助于将图形用户界面的开发与业务逻辑或后端逻辑（数据模型）的开发分离开来。
   
   MVVM最大的优势是编写前端逻辑非常复杂的页面，尤其是需要大量DOM操作的逻辑，利用MVVM可以极大地简化前端页面的逻辑。
   
   MVVM不是万能的，它的目的是为了解决复杂的前端逻辑。对于以展示逻辑为主的页面，例如，新闻，博客、文档等，不能使用MVVM展示数据，因为这些页面需要被搜索引擎索引，而搜索引擎无法获取使用MVVM并通过API加载的数据。所以，需要SEO（Search Engine Optimization）的页面，不能使用MVVM展示数据。不需要SEO的页面，如果前端逻辑复杂，就适合使用MVVM展示数据，例如，工具类页面，复杂的表单页面，用户登录后才能操作的页面等等。
   
   
## 5、双向数据绑定
   实现数据绑定的做法有大致如下几种：

   发布者-订阅者模式（backbone.js）

   脏值检查（angular.js） 
   angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，大致如下：

   DOM事件，譬如用户输入文本，点击按钮等。( ng-click )
   
   XHR响应事件 ( $http )
   
   浏览器Location变更事件 ( $location )
   
   Timer事件( $timeout , $interval )
   
   执行 $digest() 或 $apply()

   数据劫持（vue.js） vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调


## 6、null和undefined
    null表示"没有对象"，即该处不应该有值。
   
   （1） 作为函数的参数，表示该函数的参数不是对象。

   （2） 作为对象原型链的终点。
   
    undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。
   
   （1）变量被声明了，但没有赋值时，就等于undefined。

   （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

   （3）对象没有赋值的属性，该属性的值为undefined。

   （4）函数没有返回值时，默认返回undefined。

## 7、delete
   （1）删除一个对象的自己的属性，而原型链上具有相同名称的属性可用
   
   （2）试图删除的属性不存在，仍然返回true
   
   （3）当一个属性被设置为不可设置，delete操作将不会有任何效果，并且会返回false，在严格模式下会抛出语法错误
   
   （4）var, let以及const声明的变量不能被delete操作删除，因为任何使用var 、let 、const 声明的变量都会被标记为不可设置的。
   
   （5）删除一个数组元素时，数组的长度不受影响，但元素不存在了，在循环的时候会跳过，如果想不跳过，把对应的元素设置为undefined。
   
## 8、Symbol
   （1）ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型（前六种是：undefined、null、Boolean、String、数值Number、Object）。
   
   （2）生产symbol时，Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象，不能添加属性。
   
   （3）Symbol函数的参数只是表示对当前 Symbol 值的描述，返回值还是不一样的。
   
   （4）Symbol 值不能与其他类型的值进行运算，Symbol 值可以显式转为字符串，也可以转为布尔值。
   
   （5）Symbol 值作为对象属性名时，不能用点运算符，必须放在方括号之中。
   
   （6）Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。
   
## 9、Set   
   （1）它类似于数组，但是成员的值都是唯一的，没有重复的值；
   
   （2）数组去重：Array.from(new Set(array)) 或者 [...new Set(array)]
   
   （3）去除字符串里面的重复字符：[...new Set('ababbc')].join('')
   
   （4）WeakSet 结构与 Set 类似，也是不重复的值的集合：WeakSet 的成员只能是对象，而不能是其他类型的值，WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
   
## 10、Map
   （1）Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
   
   （2）Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
   
   （3）Map 的遍历顺序就是插入顺序。
   
   （4）WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
   
   （5）WeakMap的键名所指向的对象，不计入垃圾回收机制，没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。
   
   （6）WeakMap 应用的典型场合就是 DOM 节点作为键名。

## 11、koa
   （1）Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 特点是优雅、简洁、表达力强、自由度高。本身代码只有1000多行，所有功能都通过插件实现。
   
   （2）通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。
   
   （3）Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。
   
   （4）Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的。
   
   （5）koa是中间件模式，执行到next的时候，会去调用下一个中间件，下个中间件执行完再接着执行上个中间件next下面的代码。
   
   （6）express 是普通的回调函数， koa 是利用ES7 中 Async/Await 的特性，没有回调。
   
## 12、macrotasks（宏任务）与 microtasks （微任务）
   执行一个宏任务->执行当前所有可执行的微任务->执行下一个宏任务->执行当前所有可执行的微任务->执行下一个宏任务，依次循环。
   
   macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
   
   microtasks: process.nextTick, Promises, Object.observe, MutationObserver
   
   同步代码(包括promise的构造函数) -> promise.then -> setTimeout 
   
## 13、DOM事件
   （1）DOM0级事件就是将一个函数赋值给一个事件处理属性，可以给属性赋值null来解绑事件，其缺点在于无法同时绑定多个处理函数。
   
   （2）无DOM1级事件，因为1级DOM标准中并没有定义事件相关的内容。
   
   （3）DOM2级事件定义了addEventListener和removeEventListener两个方法。如果回调函数是匿名函数，则无法移除监听，增加多个时都不会覆盖。如果是非匿名函数，增加多个同样的处理函数时（同为冒泡或者同为捕获），只会执行一次。
   
   （4）DOM3级事件在DOM2级事件的基础上添加了更多的事件类型，还支持自定义事件，比如：UI事件、焦点事件、键盘事件等，相当于扩充了事件类型而已。
   
   （5）事件是先捕获再冒泡的，默认监听器时在冒泡阶段处理事件，DOM0级事件也是发生在冒泡阶段。
   
   （6）事件处理的Event对象包含这些方法或属性：
   
         stopPropagation：用于阻止事件的进一步传播，比如阻止事件继续向上层冒泡或者向下捕获（IE8用 cancelBubble = true）；
         
         preventDefault：用于取消事件的默认操作，比如a链接的跳转行为和表单自动提交行为（IE8用 returnValue = false）；
         
         stopImmediatePropagation：和stopPropagation相比，stopImmediatePropagation同样可以阻止事件的传播，不同点在于其还可以把这个元素绑定的同类型事件也阻止了；
         
         type属性：事件发生的类型；
         
         target属性：件的目标对象（IE8用 event.srcElement）；
         
         keyCode属性：键盘事件属性，keyCode指定了按下键的键码值；
         
## 14、cookie         
   （1）跨域时，cookie是不会被发送到服务端的；浏览器设置不支持cookie时，也不会。
   
   （2）删除一个cookie 把expires 设置为一个过去的时间点就行了（HTTP1.0），或者设置max-age=0。
   
   （3）服务端返回的response header中有set-cookie字段，每个字段对应一个cookie（不能将多个cookie放在一个set-cookie字段中）。
   
   （4）不能通过js代码去设置一个httpOnly类型的cookie。
   
   （5）secure选项用来设置cookie只在确保安全的请求中才会发送。当请求是HTTPS或者其他安全协议时，包含 secure 选项的 cookie 才能被发送至服务器。
   
   （6） 只能在安全协议下HTTPS，js才能设置secure类型的 cookie。
   
## 15、XMLHttpRequest    
   （1）ajax是一种技术方案，但并不是一种新技术。它依赖的是现有的CSS/HTML/Javascript，而其中最核心的依赖是浏览器提供的XMLHttpRequest对象，是这个对象使得浏览器可以发出HTTP请求与接收HTTP响应。
   
   （2）XMLHttpRequest Level 1
      
         受同源策略的限制，不能发送跨域请求；

         不能发送二进制文件（如图片、视频、音频等），只能发送纯文本数据；

         在发送和获取数据的过程中，无法实时获取进度信息，只能判断是否完成； 
         
   （3）XMLHttpRequest Level 2

      可以发送跨域请求，在服务端允许的情况下；

      支持发送和接收二进制数据；

      新增formData对象，支持发送表单数据；

      发送和获取数据时，可以获取进度信息；

      可以设置请求的超时时间；

   （4）setRequestHeader必须在open()方法之后，send()方法之前调用，否则会抛错。可以调用多次，最终的值采用追加append的方式。
   
   （5）getAllResponseHeaders()只能拿到限制以外（即被视为safe）的header字段，而不是全部字段。无法获取 response 中的 Set-Cookie、Set-Cookie2这2个字段。
   
   （6）对于跨域请求，客户端允许获取的response header字段只限于“simple response header”（Cache-Control,Content-Language,Content-Type,Expires,Last-Modified,Pragma）和“Access-Control-Expose-Headers”。
   
   （7）UNSENT (初始状态，未打开)、OPENED (已打开，未发送)、HEADERS_RECEIVED (已获取响应头)、	LOADING (正在下载响应体)、DONE (整个数据传输过程结束)
   
   （8） send()之后再设置此xhr.timeout，但计时起始点仍为调用xhr.send()方法的时刻。
   
   （9）当xhr为同步请求时，有如下限制：
   
      xhr.timeout必须为0

      xhr.withCredentials必须为 false

      xhr.responseType必须为""（注意置为"text"也不允许）  
      
   （10）上传下载进度，每50ms触发一次
      
      上传触发的是xhr.upload对象的 onprogress事件

      下载触发的是xhr对象的onprogress事件   
      
   （11）可发送的数据类型 ，如果是 GET/HEAD请求，send()方法一般不传参或传 null。不过即使你真传入了参数，参数也最终被忽略，xhr.send(data)中的data会被置为 null。
   
      ArrayBuffer

      Blob

      Document

      DOMString

      FormData

      null   
      
   （12）发同域请求时，浏览器会将cookie自动加在request header中，跨域请求时，cookie并没有自动加在request header中。
   
         在CORS标准中做了规定，默认情况下，浏览器在发送跨域请求时，不能发送任何认证信息（credentials）如"cookies"和"HTTP authentication schemes"。除非xhr.withCredentials为true（xhr对象有一个属性叫withCredentials，默认值为false） 。  
         
         根本原因是cookies也是一种认证信息，在跨域请求中，client端必须手动设置xhr.withCredentials=true，且server端也必须允许request能携带认证信息（即response header中包含Access-Control-Allow-Credentials:true），这样浏览器才会自动将cookie加在request header中。
         
         一旦跨域request能够携带认证信息，server端一定不能将Access-Control-Allow-Origin设置为*。

   （13）只有发生了网络层级别的异常才会触发onerror事件，对于应用层级别的异常，如响应返回的xhr.statusCode是4xx时，并不属于Network error，所以不会触发onerror事件。
   
   （14）事件触发顺序
   
      触发xhr.onreadystatechange(之后每次readyState变化时，都会触发一次)

      触发xhr.onloadstart
      //上传阶段开始：

      触发xhr.upload.onloadstart

      触发xhr.upload.onprogress

      触发xhr.upload.onload

      触发xhr.upload.onloadend
      //上传结束，下载阶段开始：

      触发xhr.onprogress

      触发xhr.onload

      触发xhr.onloadend   
   
   
## 16、HTTP2
   HTTP2.0性能增强的核心：二进制分帧。
   
   在应用层(HTTP2.0)和传输层(TCP or UDP)之间增加一个二进制分帧层。
   
   在二进制分帧层上， HTTP 2.0 会将所有传输的信息分割为更小的消息和帧,并对它们采用二进制格式的编码 ，其中HTTP1.x的首部信息会被封装到Headers帧，而我们的request body则封装到Data帧里面。
   
   HTTP 2.0 通信都在一个连接上完成，这个连接可以承载任意数量的双向数据流。相应地，每个数据流以消息的形式发送，而消息由一或多个帧组成，这些帧可以乱序发送，然后再根据每个帧首部的流标识符重新组装。
   
   HTTP 2.0 在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键-值对，对于相同的数据，不再通过每次请求和响应发送;通信期间几乎不会改变的通用键-值对(用户代理、可接受的媒体类型,等等)只需发送一次。
   
   
   （1）http2的性能优势集中体现在“多路复用”和“服务端推送”上
   
   （2）对于请求数目较少（约小于30个）的情况下，http1.x和http2的性能差异不大
   
   （3）对于网络状况较差的环境，http2的性能也高于http1.x
   
   （4）HTTP2.0的服务器推送，如果把静态资源都通过服务端推送的方式来处理，加载速度会得到更加巨大的提升
   
   （5）HTTP2.0的请求都在一个TCP链接上， HTTP 消息分解为独立的帧,交错发送,然后在另一端重新组装是 HTTP 2.0 最 重要的一项增强。
   
   （6）HTTP2.0的请求优先级，这个优先值确定着客户端和服务器处理不同的流采取不同的优先级策略，高优先级的流都应该优先发送，但又不会绝对的。
   
   
   ## 17、CSRF 
      （1）Cross-site request forgery，跨站请求伪造。
      
      （2）CSRF 攻击时源于 WEB 的隐式身份验证机制。WEB 的身份验证机制虽然可以保证一个请求是来自某个用户的浏览器，但无法保证该请求是经过用户批准发送的。
   （3）防御方法：
   
           1）Referer
           2）验证码，关键操作使用即可
           3）主流的做法是使用 Token 防御 CSRF 攻击
           4）双重Cookie验证：取cookie一个值出来作为参数跟cookie一起发送，服务端对cookie进行校验。
               
                  用双重Cookie防御CSRF的优点：

                  无需使用Session，适用面更广，易于实施。
                  Token储存于客户端中，不会给服务器带来压力。
                  相对于Token，实施成本更低，可以在前后端统一拦截校验，而不需要一个个接口和页面添加。
                  缺点

                  Cookie中增加了额外的字段。
                  如果有其他漏洞（例如XSS），攻击者可以注入Cookie，那么该防御方式失效。
                  难以做到子域名的隔离。
                  为了确保Cookie传输安全，采用这种防御方式的最好确保用整站HTTPS的方式，如果还没切HTTPS的使用这种方式也会有风险              

          5）Samesite Cookie属性：
               Samesite=Strict：这种称为严格模式，表明这个 Cookie 在任何情况下都不可能作为第三方 Cookie，绝无例外。
               Samesite=Lax：这种称为宽松模式，比 Strict 放宽了点限制：假如这个请求是这种请求（改变了当前页面或者打开了新页面）且同时是个GET请求，则这个Cookie可以作为第三方Cookie。但是，假如这个请求是从 http://a.com 发起的对 http://b.com 的异步请求，或者页面跳转是通过表单的 post 提交触发的，则不允许代cookie。SamesiteCookie目前有一个致命的缺陷：不支持子域
               
## 17、xss
  （1）Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。
  
  （2）注入的方式：
 
      在 HTML 中内嵌的文本中，恶意内容以 script 标签形成注入。

      在内联的 JavaScript 中，拼接的数据突破了原本的限制（字符串，变量，方法名等）。

      在标签属性中，恶意内容包含引号，从而突破属性值的限制，注入其他属性或者标签。

      在标签的 href、src 等属性中，包含 javascript: 等可执行代码。

      在 onload、onerror、onclick 等事件中，注入不受控制代码。

      在 style 属性和标签中，包含类似 background-image:url("javascript:..."); 的代码（新版本浏览器已经可以防范）。

      在 style 属性和标签中，包含类似 expression(...) 的 CSS 表达式代码（新版本浏览器已经可以防范）。

   （3）分类：存储型 XSS、反射型 XSS、DOM 型 XSS
   
      反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。

      反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。

      由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
      DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。

   （4）XSS攻击的预防
   
         输入过滤：对于明确的输入类型，例如数字、URL、电话号码、邮件地址等等内容，进行输入过滤还是必要的。
         
         预防存储型和反射型 XSS 攻击：
         
            改成纯前端渲染，把代码和数据分隔开；
            
            对 HTML 做充分转义，采用合适的转义库。
            
         预防 DOM 型 XSS 攻击：
         
            要把不可信的数据作为 HTML 插到页面上；
            
            不要把不可信的数据拼接到字符串中传递给这些DOM的一些 API
            
         其他方式：
            Content Security Policy（内容安全策略）
            禁止加载外域代码，防止复杂的攻击逻辑。

            禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。

            禁止内联脚本执行（规则较严格，目前发现 github 使用）。

            禁止未授权的脚本执行（新特性，Google Map 移动版在使用）。

            合理使用上报可以及时发现 XSS，利于尽快修复问题
            
            HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。

            验证码：防止脚本冒充用户提交危险操作。

   （5）预防xss原则
   
         利用模板引擎
         开启模板引擎自带的 HTML 转义功能。

         避免内联事件
         尽量不要使用 onLoad="onload('{{data}}')"、onClick="go('{{action}}')" 这种拼接内联事件的写法。在 JavaScript 中通过 .addEventlistener() 事件绑定会更安全。

         避免拼接 HTML
         前端采用拼接 HTML 的方法比较危险，如果框架允许，使用 createElement、setAttribute 之类的方法实现。或者采用比较成熟的渲染框架，如 Vue/React 等。

         时刻保持警惕
         在插入位置为 DOM 属性、链接等位置时，要打起精神，严加防范。

         增加攻击难度，降低攻击后果
         通过 CSP、输入长度配置、接口安全措施等方法，增加攻击的难度，降低攻击的后果。

         主动检测和发现
         可使用 XSS 攻击字符串和自动扫描工具寻找潜在的 XSS 漏洞。








   
   
   
