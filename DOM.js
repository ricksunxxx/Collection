/*
 * DOM基础知识
 * 来源：http://javascript.ruanyifeng.com/#dom
 */

/*
 * DOM简介：
 * DOM是文档对象模型（Document Object Model）的简称，它的基本思想是把结构化文档（比如HTML和XML）解析成一系列的节点，
 * 再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口，以达到使用编程语言操作文档的目的
 *（比如增删内容）。所以，DOM可以理解成文档（HTML文档、XML文档和SVG文档）的编程接口。
 * 严格地说，DOM不属于JavaScript，但是操作DOM是JavaScript最常见的任务，而JavaScript也是最常用于DOM操作的语言。
 */

/*
 * 节点类型：
 * Document节点、DocumentType节点、Element节点、Attribute节点、Text节点和DocumentFragment节点。
 *
 * 节点	                  名称	               含义
 * Document             文档节点            整个文档（window.document）
 * DocumentType     	文档类型节点		文档的类型（比如<!DOCTYPE html>）
 * Element          	元素节点			HTML元素（比如<body>、<a>等）
 * Attribute         	属性节点    		HTML元素的属性（比如class=”right”）
 * Text	                文本节点            HTML文档中出现的文本
 * DocumentFragment   	文档碎片节点		文档的片段
 */

/*
 * 节点属性：
 * nodeName属性返回节点的名称，nodeType属性返回节点类型的常数值
 *
 * 类型	                        nodeName                nodeType
 * DOCUMENT_NODE                #document                   9
 * ELEMENT_NODE                 大写的HTML元素名            1
 * ATTRIBUTE_NODE               等同于Attr.name             2
 * TEXT_NODE                    #text                       3
 * DOCUMENT_FRAGMENT_NODE       #document-fragment          11
 * DOCUMENT_TYPE_NODE           等同于DocumentType.name     10
 */

/*
 *ownerDocument，nextSibling，previousSibling，parentNode，parentElement
 *
 *1)ownerDocument属性返回当前节点所在的顶层文档对象，即document对象。document对象本身的ownerDocument属性，返回null。
 *2)nextSibling属性返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回null。
 *  该属性还包括文本节点和评论节点。因此如果当前节点后面有空格（或者换行），该属性会返回一个文本节点，内容为空格。
 *  为了避免理解上的不一致，建议使用nextElementSibling，这个属性直接找下一个元素节点。
 *3)previousSibling属性跟nextSibling是类似的，也会包含文本节点和评论节点，建议使用previousElementSibling
 *4)parentNode属性返回当前节点的父节点，父节点只可能是三种类型：element节点、document节点和documentfragment节点。
 *  对于document节点和documentfragment节点，它们的父节点都是null。另外，对于那些生成后还没插入DOM树的节点，父节点也是null。
 *5)parentElement属性返回当前节点的父Element节点。如果当前节点没有父节点，或者父节点类型不是Element节点，则返回null。
 */
document.body.ownerDocument === document; //true
document.ownerDocument === null; //true


/*
 *textContent，nodeValue
 *textContent属性返回当前节点和它的所有后代节点的文本内容,它会自动忽略当前节点内部的HTML标签，返回所有文本内容。
 *设置该属性的值，会自动对HTML标签转义
 *
 *nodeValue属性返回或设置当前节点的值，格式为字符串。但是，该属性只对Text节点、Comment节点、XML文档的CDATA节点有效，
 *其他类型的节点一律返回null。
 *
 *1)innerText受CSS影响，textContent不受。比如，如果CSS规则隐藏（hidden）了某段文本，innerText就不会返回这段文本，
 *  textContent则照样返回。
 *2)innerText返回的文本，会过滤掉空格、换行和回车键，textContent则不会。
 *3)innerText属性不是DOM标准的一部分，Firefox浏览器甚至没有部署这个属性，而textContent是DOM标准的一部分。
 */
document.getElementById('foo').textContent = '<p>GoodBye!</p>'; //最终显示的内容就是 <p>GoodBye!</p>
