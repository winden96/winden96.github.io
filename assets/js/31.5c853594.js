(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{427:function(_,v,t){"use strict";t.r(v);var r=t(56),s=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"osi七层网络结构-每层对应的有什么协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osi七层网络结构-每层对应的有什么协议"}},[_._v("#")]),_._v(" osi七层⽹络结构？每层对应的有什么协议？")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("OSI七层网络模型")]),_._v(" "),t("th",[_._v("TCP/IP五层网络模型")]),_._v(" "),t("th",[_._v("对应网络协议")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("应用层")]),_._v(" "),t("td",[_._v("应用层")]),_._v(" "),t("td",[t("strong",[_._v("HTTP、FTP")]),_._v("、"),t("strong",[_._v("SMTP、POP3、DNS(域名系统)")])])]),_._v(" "),t("tr",[t("td",[_._v("表示层")]),_._v(" "),t("td",[_._v("应用层")]),_._v(" "),t("td",[_._v("LPP（轻量级表示协议）、NBSSN（会话服务协议）")])]),_._v(" "),t("tr",[t("td",[_._v("会话层")]),_._v(" "),t("td",[_._v("应用层")]),_._v(" "),t("td",[_._v("SSL、TLS（安全协议）")])]),_._v(" "),t("tr",[t("td",[_._v("传输层")]),_._v(" "),t("td",[_._v("传输层")]),_._v(" "),t("td",[t("strong",[_._v("TCP、UDP")])])]),_._v(" "),t("tr",[t("td",[_._v("网络层")]),_._v(" "),t("td",[_._v("网络层")]),_._v(" "),t("td",[t("strong",[_._v("IP、ICMP")]),_._v("（互联网控制信息协议）")])]),_._v(" "),t("tr",[t("td",[_._v("数据链路层")]),_._v(" "),t("td",[_._v("数据链路层")]),_._v(" "),t("td",[t("strong",[_._v("PPTP(点对点隧道协议)、ARP")])])]),_._v(" "),t("tr",[t("td",[_._v("物理层")]),_._v(" "),t("td",[_._v("物理层")]),_._v(" "),t("td",[_._v("IEEE 802.1A、IEEE802.2到IEEE 802.11")])])])]),_._v(" "),t("p",[t("strong",[_._v("应用层的任务是通过应用进程间的交互来完成特定网络应用。应用层协议定义的是应用进程（进程：主机中正在运行的程序）间的通信和交互的规则， 包括 HTTP、SMTP、POP3")])]),_._v(" "),t("p",[t("strong",[_._v("传输层的主要任务就是负责向两台主机进程之间的通信提供通用的数据传输服务，建立起端到端的通信。包括TCP、UDP")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("网络层的任务就是选择合适的网间路由和交换结点， 确保数据及时传送。")]),_._v(" 在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组和包进行传送。在 TCP/IP 体系结构中，由于网络层使用 "),t("strong",[_._v("IP 协议")]),_._v("，因此分组也叫 "),t("strong",[_._v("IP 数据报")]),_._v(" ，简称 "),t("strong",[_._v("数据报")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("数据链路层两台主机之间的数据传输，总是在一段一段的链路上传送的，")]),_._v(" 在两个相邻节点之间传送数据时，"),t("strong",[_._v("数据链路层将网络层交下来的 IP 数据报组装成帧")]),_._v("，协议包括 ARP")]),_._v(" "),t("p",[t("strong",[_._v("物理层的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异，")]),_._v(" 使其上面的数据链路层不必考虑网络的具体传输介质是什么。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/winden96/jsdelivr@1.0/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/assert/1.gif",alt:""}})]),_._v(" "),t("h1",{attrs:{id:"tcp-和-udp的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-和-udp的区别"}},[_._v("#")]),_._v(" TCP 和 UDP的区别？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("TCP是⾯向连接的，UDP是⽆连接的；")])]),_._v(" "),t("li",[t("p",[_._v("TCP是可靠的，通过TCP连接传送的数据， ⽆差错，不丢失，不重复 ；UDP不可靠， 即不保证可靠交付")])]),_._v(" "),t("li",[t("p",[_._v("TCP只⽀持点对点通信，UDP⽀持⼀对⼀、⼀对多、多对⼀、多对多")])]),_._v(" "),t("li",[t("p",[_._v("TCP是⾯向字节流的，UDP是⾯向报⽂的")])]),_._v(" "),t("li",[t("p",[_._v("TCP有拥塞控制机制。UDP没有，因此⽹络出现的拥塞不会使源主机的发送速率降低，这\n对某些实时应⽤是很重要的，⽐如媒体通信，游戏；")])]),_._v(" "),t("li",[t("p",[_._v("TCP⾸部开销（20字节）⽐UDP⾸部开销（8字节）要⼤")])]),_._v(" "),t("li",[t("p",[_._v("UDP 的主机不需要维持复杂的连接状态表。")])])]),_._v(" "),t("h1",{attrs:{id:"tcp的可靠性是怎么保证的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp的可靠性是怎么保证的"}},[_._v("#")]),_._v(" TCP的可靠性是怎么保证的？")]),_._v(" "),t("p",[t("strong",[_._v("数据包校验")]),_._v("： TCP 将保持它首部和数据的检验和。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。")]),_._v(" "),t("p",[t("strong",[_._v("重新排序")]),_._v("：对失序数据包重新 排序 （TCP报⽂具有序列号）\n"),t("strong",[_._v("丢弃重复数据")]),_._v("：TCP 的接收端会丢弃重复的数据。\n"),t("strong",[_._v("应答机制")]),_._v("：接收⽅收到数据之后，会发送⼀个确认（通常延迟⼏分之⼀秒）；\n"),t("strong",[_._v("超时重传")]),_._v("：发送⽅发出数据之后，启动⼀个定时器，超时未收到接收⽅的确认，则重新发送这个报文段；\n"),t("strong",[_._v("流量控制")]),_._v("：通过滑动窗口，确保接收端能够接收发送⽅的数据⽽不会缓冲区溢出")]),_._v(" "),t("p",[t("strong",[_._v("拥塞控制：")]),_._v(" 当网络拥塞时，减少数据的发送。")]),_._v(" "),t("p",[t("strong",[_._v("ARQ 协议：")]),_._v(" 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。")]),_._v(" "),t("h1",{attrs:{id:"三次握手和四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手和四次挥手"}},[_._v("#")]),_._v(" 三次握手和四次挥手")]),_._v(" "),t("h2",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[_._v("#")]),_._v(" 概念")]),_._v(" "),t("p",[_._v("为什么需要握手：握手的作用就是为了同步一些信息，比如最大滑动窗口")]),_._v(" "),t("p",[_._v("TCP：是一个可靠的连接，也就是客户端和服务器双方必须感知对方的存在，也就是需要经历一个建立连接的过程")]),_._v(" "),t("p",[_._v("用三次握手建立TCP连接，连接有三个阶段")]),_._v(" "),t("ul",[t("li",[_._v("建立连接")]),_._v(" "),t("li",[_._v("数据传输")]),_._v(" "),t("li",[_._v("连接释放")])]),_._v(" "),t("p",[_._v("连接的管理就是使连接的建立和释放都能正常地进行，连接阶段过程中要解决以下三个问题")]),_._v(" "),t("ul",[t("li",[_._v("要使每一方都能确知对方的存在")]),_._v(" "),t("li",[_._v("要允许双方协商一些参数")]),_._v(" "),t("li",[_._v("能够对运输实体分配资源")])]),_._v(" "),t("h3",{attrs:{id:"说说tcp三次握手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说tcp三次握手过程"}},[_._v("#")]),_._v(" 说说TCP三次握手过程？")]),_._v(" "),t("p",[_._v("TCP建立连接的过程：被称为握手")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/1_%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B/images/image-20200412155010409.png",alt:"image-20200412155010409"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/winden96/jsdelivr@1.0/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/assert/2.png",alt:""}})]),_._v(" "),t("p",[_._v("1.第一次握手：建立连接。客户端发送连接请求报文段，将SYN位置为1，Sequence Number为x;然后，客户端进入SYN_SEND状态，等待服务器的确认;")]),_._v(" "),t("p",[_._v("2.第二次握手：服务器收到SYN报文段。服务器收到客户端的SYN报文段，需要对这个SYN报文段进行确认，设置Acknowledgment Number为x+1(Sequence Number+1);同时，自己自己还要发送SYN请求信息，将SYN位置为1，Sequence Number为y;服务器端将上述所有信息放到一个报文段(即SYN+ACK报文段)中，一并发送给客户端，此时服务器进入SYN_RECV状态;")]),_._v(" "),t("p",[_._v("3.第三次握手：客户端收到服务器的SYN+ACK报文段。然后将Acknowledgment Number设置为y+1，向服务器发送ACK报文段，这个报文段发送完毕以后，客户端和服务器端都进入ESTABLISHED状态，完成TCP三次握手。")]),_._v(" "),t("h3",{attrs:{id:"为什么是三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么是三次握手"}},[_._v("#")]),_._v(" 为什么是三次握手？")]),_._v(" "),t("blockquote",[t("p",[_._v("四次握手")])]),_._v(" "),t("p",[_._v("四次连接有点多余，第三次的时候，我们已经互相进行了连接确认")]),_._v(" "),t("p",[_._v("但是因为我们无法保证百分百的可靠性")]),_._v(" "),t("blockquote",[t("p",[_._v("两次握手")])]),_._v(" "),t("p",[t("strong",[_._v("客户端知道服务器有接收 和 发送的能力，服务器不知道客户端有没有接收数据的能力")]),_._v("，因为通过第一次握手，已经知道了客户端能够发送数据，但是能不能接收数据，还是不清楚，因此这个TCP连接是不可靠的。")]),_._v(" "),t("p",[_._v("为什么不能两次握手就建立连接")]),_._v(" "),t("p",[_._v("因为超时重传机制的存在")]),_._v(" "),t("p",[_._v("但客户端发送第一次握手的时候，可能会经历网络拥塞，然后客户端会以为这个连接已经丢失，然后会重新发送一个请求连接的信息到服务器，这次发送的消息很快被服务器接受，然后服务器建立连接就开始建立连接。但是当第一次发送的请求经过一段时间的阻塞后，成功到达服务器，然后服务器又连接连接，而此时客户端是不会理会这次请求的建立，所以服务器一直在等待客户端数据的发送。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/1_%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B/images/image-20200412162156748.png",alt:"image-20200412162156748"}})]),_._v(" "),t("h2",{attrs:{id:"四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/1_%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B/README?id=%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B",target:"_blank",rel:"noopener noreferrer"}},[_._v("四次挥手"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("所谓的四次挥手，就是关闭TCP连接的过程，指的是断开一个TPC连接，需要客户端和服务端总共发送4个包，以确定双方连接的断开。")]),_._v(" "),t("p",[_._v("主要目的：保证TCP连接的全双工连接")]),_._v(" "),t("h3",{attrs:{id:"四次挥手示意图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手示意图"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"http://moxi159753.gitee.io/learningnotes/#/./%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/1_%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B/README?id=%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%A4%BA%E6%84%8F%E5%9B%BE",target:"_blank",rel:"noopener noreferrer"}},[_._v("四次挥手示意图"),t("OutboundLink")],1)]),_._v(" "),t("p",[t("img",{attrs:{src:"http://moxi159753.gitee.io/learningnotes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/1_%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B/images/20181120162254477.png",alt:"img"}})]),_._v(" "),t("p",[_._v("由于TCP连接是全双工的，因此每个方向都必须单独关闭，这个原则是当以防完成它的数据发送任务后，就能发送一个FIN包来终止这个方向的连接。")]),_._v(" "),t("p",[_._v("收到一个FIN包只意味着这一方向上没有数据流动，一个TCP连接在收到一个FIN后，仍然能发送数据，首先进行关闭的一方将执行主动关闭，而另一方执行被动关闭。")]),_._v(" "),t("h3",{attrs:{id:"说说四次挥手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说四次挥手过程"}},[_._v("#")]),_._v(" 说说四次挥手过程？")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/winden96/jsdelivr@1.0/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/assert/3.png",alt:""}})]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("第一次挥手")]),_._v("：客户端发送一个FIN包（FIN=1，seq=U）给服务器，用来关闭客户端到服务器端的数据传输，客户端进入FIN_WAIT_1状态（终止等待）")]),_._v(" "),t("li",[t("strong",[_._v("第二次挥手")]),_._v("：服务器端收到FIN包后，发送一个ACK包（ACK=1，ack=u+1，在随机产生一个值v 给seq）给客户端，服务器进入了CLOSE_WAIT状态（关闭等待）")]),_._v(" "),t("li",[t("strong",[_._v("第三次挥手")]),_._v("：服务器端发送一个FIN包（FIN=1，ACK=1，ack=u+1，在随机产生 一个w值给seq）给客户端，用来关闭服务器到客户端的数据传输，服务端进入了LAST_ACK（最后确定）状态")]),_._v(" "),t("li",[t("strong",[_._v("第四次挥手")]),_._v("：客户端接收FIN包，然后进入TIME_WAIT状态，接着发送一个ACK包（ACK=1，seq=u+1, ack = w+1） 给服务端，服务端确定序号，进入CLOSe状态，完成了四次挥手。")])]),_._v(" "),t("h3",{attrs:{id:"挥手中的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挥手中的状态"}},[_._v("#")]),_._v(" 挥手中的状态")]),_._v(" "),t("ul",[t("li",[_._v("CLOSED：表示初始状态")]),_._v(" "),t("li",[_._v("ESTABLISHED：表示连接已经连接")]),_._v(" "),t("li",[_._v("FIN_WAIT：状态FIN_WAIT_1和FIN_WAIT_2都表示等待对方的FIN报文，这两个状态的区别是，当主动发送方给对方发送了断开请求时，就进入了FIN_WAIT_1状态，而到被动方在回应后，主动发送方就进入了FIN_WAIT_2。")]),_._v(" "),t("li",[t("strong",[_._v("FIN_WAIT_2")]),_._v("：上面已经详细解释了这种状态，实际上FIN_WAIT_2状态下的SOCKET，表示半连接，也即有一方要求close连接，但另外还告诉对方，我暂时还有点数据需要传送给你，稍后再关闭连接")]),_._v(" "),t("li",[_._v("CLOSE_WAIT：这个状态的含义是 表示在等待关闭")]),_._v(" "),t("li",[_._v("LAST_ACK：在被动关闭放发送FIN报文后，最后等待对方的ACK报文，当收到了ACK报文后，就进入了CLOSE状态。")])]),_._v(" "),t("h3",{attrs:{id:"为什么time-wait状态还需要等待2msl后才能返回close"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么time-wait状态还需要等待2msl后才能返回close"}},[_._v("#")]),_._v(" 为什么TIME_WAIT状态还需要等待2MSL后才能返回CLOSE")]),_._v(" "),t("p",[_._v("这是因为虽然双方都同意了关闭连接，而且握手的4个报文也都协调和发送完毕，按道理可以直接回到CLOSE状态")]),_._v(" "),t("p",[_._v("但是因为我们需要假设网络是不可靠的，你无法保证你最后发送的ACK报文是会一定被对方收到，因此处于LAST_ACK状态下的socket可能会因为超时未收到ACK报文，而重发FIN报文，所以这个TIME_WAIT状态的作用就是用来重发可能丢失的报文。")]),_._v(" "),t("h1",{attrs:{id:"tcp-粘包-拆包问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-粘包-拆包问题"}},[_._v("#")]),_._v(" TCP 粘包 拆包问题？")]),_._v(" "),t("h2",{attrs:{id:"tcp粘包-拆包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp粘包-拆包"}},[_._v("#")]),_._v(" TCP粘包/拆包")]),_._v(" "),t("p",[_._v("TCP是个“流”协议，所谓流，就是没有界限的一串数据。大家可以想想河里的流水，是连成一片的，其间并没有分界线。TCP底层并不了解上层业务数据的具体含义，它会根据TCP缓冲区的实际情况进行包的划分，所以在业务上认为，一个完整的包可能会被TCP拆分成多个包进行发送，也有可能把多个小的包封装成一个大的数据包发送，这就是所谓的TCP粘包和拆包问题。")]),_._v(" "),t("h3",{attrs:{id:"tcp粘包-拆包问题说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp粘包-拆包问题说明"}},[_._v("#")]),_._v(" TCP粘包/拆包问题说明")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/990532/201612/990532-20161212192914995-1758321651.png",alt:"img"}})]),_._v(" "),t("p",[_._v("假设客户端分别发送了两个数据包D1和D2给服务端，由于服务端一次读取到的字节数是不确定的，故可能存在以下4种情况。")]),_._v(" "),t("p",[_._v("（1）服务端分两次读取到了两个独立的数据包，分别是D1和D2，没有粘包和拆包；")]),_._v(" "),t("p",[_._v("（2）服务端一次接收到了两个数据包，D1和D2粘合在一起，被称为TCP粘包；")]),_._v(" "),t("p",[_._v("（3）服务端分两次读取到了两个数据包，第一次读取到了完整的D1包和D2包的部分内容，第二次读取到了D2包的剩余内容，这被称为TCP拆包；")]),_._v(" "),t("p",[_._v("（4）服务端分两次读取到了两个数据包，第一次读取到了D1包的部分内容D1_1，第二次读取到了D1包的剩余内容D1_2和D2包的整包。")]),_._v(" "),t("p",[_._v("如果此时服务端TCP接收滑窗非常小，而数据包D1和D2比较大，很有可能会发生第五种可能，即服务端分多次才能将D1和D2包接收完全，期间发生多次拆包。")]),_._v(" "),t("h3",{attrs:{id:"tcp粘包-拆包发生的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp粘包-拆包发生的原因"}},[_._v("#")]),_._v(" TCP粘包/拆包发生的原因")]),_._v(" "),t("p",[_._v("问题产生的原因有三个，分别如下。")]),_._v(" "),t("p",[_._v("（1）应用程序write写入的字节大小大于套接口发送缓冲区大小；")]),_._v(" "),t("p",[_._v("（2）进行MSS大小的TCP分段；")]),_._v(" "),t("p",[_._v("（3）以太网帧的payload大于MTU进行IP分片。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/990532/201612/990532-20161212193751011-992309759.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"粘包问题的解决策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#粘包问题的解决策略"}},[_._v("#")]),_._v(" 粘包问题的解决策略")]),_._v(" "),t("p",[_._v("由于底层的TCP无法理解上层的业务数据，所以在底层是无法保证数据包不被拆分和重组的，这个问题只能通过上层的应用协议栈设计来解决，根据业界的主流协议的解决方案，可以归纳如下。")]),_._v(" "),t("p",[_._v("（1）消息定长，例如每个报文的大小为固定长度200字节，如果不够，空位补空格；")]),_._v(" "),t("p",[_._v("（2）在包尾增加回车换行符进行分割，例如FTP协议；")]),_._v(" "),t("p",[_._v("（3）将消息分为消息头和消息体，消息头中包含表示消息总长度（或者消息体长度）的字段，通常设计思路为消息头的第一个字段使用int32来表示消息的总长度；")]),_._v(" "),t("p",[_._v("（4）更复杂的应用层协议。")]),_._v(" "),t("p",[_._v("但是一旦压力上来，或者发送大报文之后，就会存在粘包/拆包问题。如果代码没有考虑，往往就会出现解码错位或者错误，导致程序不能正常工作")]),_._v(" "),t("p",[_._v("ps：上述其实可以 是 HTTP 的 header 记录一个 数据包的长度即可，动态调整")])])}),[],!1,null,null,null);v.default=s.exports}}]);