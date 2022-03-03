(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{425:function(t,e,r){"use strict";r.r(e);var _=r(56),n=Object(_.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http1-0和http1-1、http2-0有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http1-0和http1-1、http2-0有什么区别"}},[t._v("#")]),t._v(" HTTP1.0和HTTP1.1、HTTP2.0有什么区别？")]),t._v(" "),r("blockquote",[r("p",[t._v("首先HTTP1.0和HTTP1.1的区别")])]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("缓存处理")]),t._v(" ，在"),r("strong",[t._v("HTTP1.0中主要使⽤header⾥的If-Modified-Since,Expires来做为缓存判断的标准，")]),t._v(" "),r("strong",[t._v("HTTP1.1则引⼊了更多的缓存控制策略")]),t._v("例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match\n等更多可供选择的缓存头来控制缓存策略。")]),t._v(" "),r("li",[r("strong",[t._v("带宽优化及⽹络连接的使⽤")]),t._v("，HTTP1.0中，存在⼀些浪费带宽的现象，例如客户端只是需要某个对象\n的⼀部分，⽽"),r("strong",[t._v("服务器却将整个对象送过来了，并且不⽀持断点续传功能")]),t._v("，"),r("strong",[t._v("HTTP1.1则在请求头引⼊了\nrange头域，它允许只请求资源的某个部分，即返回码是206")]),t._v("（Partial Content），这样就⽅便了开发\n者⾃由的选择以便于充分利⽤带宽和连接。")]),t._v(" "),r("li",[r("strong",[t._v("错误通知的管理")]),t._v("，在HTTP1.1中"),r("strong",[t._v("新增了24个错误状态响应码")]),t._v("，如409（Conflict）表示请求的资源与资\n源的当前状态发⽣冲突；410（Gone）表示服务器上的某个资源被永久性的删除。")]),t._v(" "),r("li",[r("strong",[t._v("Host头处理")]),t._v("，在"),r("strong",[t._v("HTTP1.0中认为每台服务器都绑定⼀个唯⼀的IP地址")]),t._v("，因此，请求消息中的URL并没\n有传递主机名（hostname）。但随着虚拟主机技术的发展，在⼀台物理服务器上可以存在多个虚拟主\n机（Multi-homed Web Servers），并且它们共享⼀个IP地址。"),r("strong",[t._v("HTTP1.1的请求消息和响应消息都应⽀\n持Host头域，且请求消息中如果没有Host头域会报告⼀个错误（400 Bad Request）")]),t._v("。")]),t._v(" "),r("li",[r("strong",[t._v("⻓连接")]),t._v("，"),r("strong",[t._v("HTTP 1.1⽀持⻓连接（PersistentConnection）和请求的流⽔线（Pipelining）处理，在⼀个\nTCP连接上可以传送多个HTTP请求和响应，减少了建⽴和关闭连接的消耗和延迟")]),t._v("，在HTTP1.1中默认\n开启Connection："),r("strong",[t._v("keep-alive")]),t._v("，⼀定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。")])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("HTTP2.0和HTTP1.X相比的新特性")])])]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("新的二进制格式")]),t._v("（Binary Format），"),r("strong",[t._v("HTTP1.x的解析是基于文本")]),t._v("。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑"),r("strong",[t._v("HTTP2.0的协议解析决定采用二进制格式")]),t._v("，实现方便且健壮。")]),t._v(" "),r("li",[r("strong",[t._v("多路复用")]),t._v("（MultiPlexing），即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。")]),t._v(" "),r("li",[r("strong",[t._v("header压缩")]),t._v("，如上文中所言，对前面提到过HTTP1.x的header带有大量信息，而且每次都要重复发送，"),r("strong",[t._v("HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表")]),t._v("，既避免了重复header的传输，又减小了需要传输的大小。")]),t._v(" "),r("li",[r("strong",[t._v("服务端推送")]),t._v("（server push），同SPDY一样，HTTP2.0也具有server push功能。")])]),t._v(" "),r("blockquote",[r("p",[t._v("补充：")])]),t._v(" "),r("p",[r("strong",[t._v("HTTP2.0的多路复用和HTTP1.X中的长连接复用有什么区别？")])]),t._v(" "),r("ul",[r("li",[t._v("HTTP/1.* 一次请求-响应，建立一个连接，用完关闭；每一个请求都要建立一个连接；")]),t._v(" "),r("li",[t._v("HTTP/1.1 Pipeling解决方式为，"),r("strong",[t._v("若干个请求排队串行化单线程处理")]),t._v("，后面的请求等待前面请求的返回才能获得执行机会，一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；")]),t._v(" "),r("li",[t._v("HTTP/2多个请求可"),r("strong",[t._v("同时在一个连接上并行执行")]),t._v("。某个请求任务耗时严重，不会影响到其它连接的正常执行；")])]),t._v(" "),r("p",[r("strong",[t._v("关于⻓连接和短连接的理解及使⽤场景")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("短连接：例如"),r("strong",[t._v("普通的web请求")]),t._v("，在三次握⼿之后建⽴连接，发送数据包并得到服务器返回的结果之\n后，通过客户端和服务端的四次握⼿进⾏关闭断开。")])]),t._v(" "),r("li",[r("p",[t._v("⻓连接：区别于短连接，由于三次握⼿链接及四次握⼿断开，在请求频繁的情况下，链接请求和断开\n请求的开销较⼤，影响效率。采⽤⻓连接⽅式，"),r("strong",[t._v("执⾏三次握⼿链接后，不断开链接，保持客户端和服\n务端通信，直到服务器超时⾃动断开链接，或者客户端主动断开链接。")])]),t._v(" "),r("p",[t._v("适⽤场景：\n短连接：适⽤于⽹⻚浏览等数据刷新频度较低的场景。\n⻓连接：适⽤于客户端和服务端通信频繁的场景，例如聊天室，实时游戏等。")])])]),t._v(" "),r("h1",{attrs:{id:"http-和-https的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-和-https的区别"}},[t._v("#")]),t._v(" HTTP 和 HTTPS的区别？")]),t._v(" "),r("p",[t._v("HTTPS与HTTP的⼀些区别\nHTTPS协议需要到CA申请证书，⼀般免费证书很少，需要交费。\nHTTP协议运⾏在TCP之上，所有传输的内容都是明⽂，HTTPS运⾏在SSL/TLS之上，SSL/TLS运⾏在\nTCP之上，所有传输的内容都经过加密的。\nHTTP和HTTPS使⽤的是完全不同的连接⽅式，⽤的端⼝也不⼀样，前者是80，后者是443。\nHTTPS可以有效的防⽌运营商劫持，解决了防劫持的⼀个⼤问题。")]),t._v(" "),r("h1",{attrs:{id:"http"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),r("p",[t._v("http是一种无状态协议。无状态是指客户机和服务器之间不需要建立持久连接，这意味着当一个客户端向服务器发出请求，然后服务器返回响应（response），连接就被关闭了，在服务器端不保留连接的有关信息，HTTP遵循请求/应答模型。客户机向服务器发送请求，服务器处理请求并返回适当的应答。所有HTTP连接都构成一套请求和应答。")]),t._v(" "),r("h2",{attrs:{id:"https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),r("p",[t._v("HTTPS是以安全为目标的HTTP通道，简单将就是HTTP的安全版。即HTTP下加入SSL层，HTTPS的安全基础是SSL。其所用的端口是443，过程大致如下：")]),t._v(" "),r("h3",{attrs:{id:"获取连接证书"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取连接证书"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/README?id=%E8%8E%B7%E5%8F%96%E8%BF%9E%E6%8E%A5%E8%AF%81%E4%B9%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("获取连接证书"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("SSL客户端通过TCP和服务器建立连接后（443端口），并且在一般的TCP连接协商过程中请求证书。即客户端发出一个消息给服务器，这个消息里面包含了自己可实现的算法列表和其它一些需要的消息，SSL的服务器端会回应一个数据包，这里面确定了这次通信所需要的算法，然后服务器向客户端返回证书。（证书里面包含了服务器信息：域名。申请证书的公司，公共密钥）")]),t._v(" "),r("h3",{attrs:{id:"证书验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#证书验证"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/README?id=%E8%AF%81%E4%B9%A6%E9%AA%8C%E8%AF%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("证书验证"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("客户端在收到服务器返回的证书后，判断签发这个证书的公共签发机构，并使用这个机构的公共密钥确认签名是否有效，客户端还会确保证书中列出的域名就是它正在连接的域名")]),t._v(" "),r("h3",{attrs:{id:"数据加密和传输"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据加密和传输"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/README?id=%E6%95%B0%E6%8D%AE%E5%8A%A0%E5%AF%86%E5%92%8C%E4%BC%A0%E8%BE%93",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据加密和传输"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("如果确认证书有效，那么生成对称密钥并使用服务器的公共密钥进行加密。然后发送给服务器，服务器使用它的密钥进行解密，这样两台计算机可以开始进行对称加密进行通信。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/images/image-20200413085448943.png",alt:"image-20200413085448943"}})]),t._v(" "),r("p",[t._v("对称加密：是指加密和解密用的都是同一个密钥，目前微信小程序采用的就是这个加密方式")]),t._v(" "),r("h3",{attrs:{id:"对称加密存在的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对称加密存在的问题"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/README?id=%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("对称加密存在的问题"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("首先我们知道对称加密是指：加密和解密都使用的同一个密钥，这种方式存在的最大的问题就是密钥发送问题，即如果安全的将密钥发送给对方。")]),t._v(" "),r("h4",{attrs:{id:"为什么叫对称加密"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么叫对称加密"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/README?id=%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AB%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么叫对称加密？"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("一方通过密钥将信息加密后，把密文传给另一个方，另一方通过这个相同的密钥将密文解密，转换成可以理解的明文。他们之间的关系如下")]),t._v(" "),r("blockquote",[r("p",[t._v("明文 -> 密钥 -> 密文")])]),t._v(" "),r("p",[t._v("但是从上面的图我们可以看出，我们在进行加密后，首先需要将密钥发送给服务器，那么这个过程就可能存在危险的")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/images/image-20200413091318404.png",alt:"image-20200413091318404"}})]),t._v(" "),r("h3",{attrs:{id:"非对称加密"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/README?id=%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("非对称加密"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("上面提到的是对称加密，其实还有一种是非对称加密，非对称加密是通过两个密钥（公钥 - 私钥）来实现对数据的加密和解密的，公钥用于加密，私钥用于解密。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/images/image-20200413085937800.png",alt:"image-20200413085937800"}})]),t._v(" "),r("p",[t._v("过程如下：")]),t._v(" "),r("p",[t._v("首先服务器会颁发一个公钥放在网络中，同时它自己还有一份私钥，然后客户端可以直接获取到对应的公钥")]),t._v(" "),r("p",[t._v("然后将客户端的数据进行公钥的加密，加密后传输的服务器中，服务器在进行私钥解密，得到最终的数据")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/images/image-20200413102124070.png",alt:"image-20200413102124070"}})]),t._v(" "),r("p",[t._v("由于非对称加密的方式不需要发送用来解密的私钥，所以可以保证安全性，但是和对称加密比起来，它非常慢，所以我们还是要用对称加密来传送消息，但是对称加密使用的密钥我们通过非对称加密的方式发送出去。这个结果就变成了：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/images/image-20200413102622594.png",alt:"image-20200413102622594"}})]),t._v(" "),r("p",[t._v("但是我们需要注意的是，此时交换的两个公钥不一定正确，因为可能会被中间人截获，同时掉包")]),t._v(" "),r("p",[t._v("例如：中间人虽然不知道小红的私钥是什么，但是在截获了小红的公钥Key1之后，却可以偷天换日，自己另外生成一对公钥私钥，把自己的公钥Key3发送给小灰。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/images/image-20200413102718466.png",alt:"image-20200413102718466"}})]),t._v(" "),r("p",[t._v("这一次通信再次被中间人截获，中间人先用自己的私钥解开了Key3的加密，获得Key2，然后再用当初小红发来的Key1重新加密，再发给小红")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/images/image-20200413102738635.png",alt:"image-20200413102738635"}})]),t._v(" "),r("h3",{attrs:{id:"证书机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#证书机制"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/README?id=%E8%AF%81%E4%B9%A6%E6%9C%BA%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("证书机制"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("这个时候我们需要做的就是从指定的机构出获取公钥，而不是任由其在网络传输")]),t._v(" "),r("ul",[r("li",[t._v("作为服务器端的小红，首先先把自己的公钥给证书颁发机构，向证书颁发机构申请证书")]),t._v(" "),r("li",[t._v("证书颁发机构自己也有一堆公钥和私钥。机构利用自己的私钥来解密Key1，通过服务端网址等信息生成一个证书签名，证书签名同样经过机构的私钥加密。证书制作完成后，机构把证书发送给服务端的小红。")]),t._v(" "),r("li",[t._v("当小灰向小红请求通信的时候，小红不再直接返回自己的公钥，而是把自己申请的证书返回给小灰。")]),t._v(" "),r("li",[t._v("小灰收到证书以后，要做的第一件事就是验证证书的真伪，需要说明的是，各大浏览器和操作系统已经维护了所有权威证书机构的名称和公钥，所以小灰只需要知道是哪个机构颁发的证书，就可以从本地找到对应的机构公钥，解密出证书签名。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2_https%E5%92%8Chttp/images/image-20200413103251089.png",alt:"image-20200413103251089"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);