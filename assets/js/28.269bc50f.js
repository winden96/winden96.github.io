(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{429:function(t,s,a){"use strict";a.r(s);var r=a(56),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jvm参数设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数设置"}},[t._v("#")]),t._v(" JVM参数设置")]),t._v(" "),a("p",[t._v("修改 bin/kafka-start-server.sh 中的 jvm 设置")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KAFKA_HEAP_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"‐Xmx16G ‐Xms16G ‐Xmn12G ‐XX:MetaspaceSize=256M ‐XX:+UseG1GC ‐XX:MaxGCPauseMillis=50"')]),t._v("\n")])])]),a("p",[t._v("这种大内存的情况一般都要用G1垃圾收集器，因为年轻代内存比较大，用G1可以设置GC最大停顿时间，不至于一次minor gc就花费太长时间。")]),t._v(" "),a("h1",{attrs:{id:"线上问题及优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线上问题及优化"}},[t._v("#")]),t._v(" 线上问题及优化")]),t._v(" "),a("h2",{attrs:{id:"消息丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息丢失"}},[t._v("#")]),t._v(" 消息丢失")]),t._v(" "),a("p",[a("strong",[t._v("发送端导致")])]),t._v(" "),a("p",[t._v("查看《Kafka-原理分析.md》中的 "),a("strong",[t._v("生产者ACK应答机制")]),t._v(" 一章")]),t._v(" "),a("p",[a("strong",[t._v("消费端导致")])]),t._v(" "),a("p",[t._v("如果消费这边配置的是自动提交，万一消费到数据还没处理完，就自动提交offset了，但是此时你consumer直接宕机了，未处理完的数据 丢失了，下次也消费不到了。")]),t._v(" "),a("h2",{attrs:{id:"消息重复生产或消费"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息重复生产或消费"}},[t._v("#")]),t._v(" 消息重复生产或消费")]),t._v(" "),a("p",[a("strong",[t._v("发送端导致")])]),t._v(" "),a("p",[a("strong",[t._v("发送消息如果配置了重试机制，比如网络抖动时间过长导致发送端发送超时，实际broker可能已经接收到消息只是还未来得及发送ack，但发送方会重新发送消息。")])]),t._v(" "),a("p",[a("strong",[t._v("消费端导致")])]),t._v(" "),a("p",[t._v("如果消费这边配置的是自动提交，刚拉取了一批数据处理了一部分，但还没来得及提交，服务挂了，下次重启又会拉取相同的一批数据重复处理。")]),t._v(" "),a("p",[a("strong",[t._v("一般消费端都是要做消费幂等处理的。")])]),t._v(" "),a("p",[t._v("消息重复可弄一个消息表，建立唯一索引。或者放在 redis 中。")]),t._v(" "),a("h2",{attrs:{id:"顺序消费"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顺序消费"}},[t._v("#")]),t._v(" 顺序消费")]),t._v(" "),a("p",[t._v("kafka为了保证顺序消费，一个 partition 在一个 consumer group 中只有一个 consumer 能消费。")]),t._v(" "),a("p",[t._v("Kafka只在partition的范围内保证消息消费的局部顺序性，不能在同一个topic中的多个partition中保证总的消费顺序 性。")]),t._v(" "),a("p",[a("strong",[t._v("如果有在总体上保证消费顺序的需求，那么可以通过将topic的partition数量设置为1，将consumer group中的 consumer instance数量也设置为1。")])]),t._v(" "),a("h2",{attrs:{id:"消息乱序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息乱序"}},[t._v("#")]),t._v(" 消息乱序")]),t._v(" "),a("p",[t._v("如果"),a("strong",[t._v("发送端")]),t._v("配置了重试机制，kafka不会等之前那条消息完全发送成功才去发送下一条消息，这样可能会出现，发送了1，2，3条消息，第一条超时了，后面两条发送成功，再重试发送第1条消息，这时消息在broker端的顺序就是2，3，1了，所以，是否一定要配置重试要根据业务情况而定。也可以用"),a("strong",[t._v("同步发送的模式")]),t._v("去发消息，当然acks不能设置为0，这样也能有助于保证消息从发送端到消费端全链路有序。")]),t._v(" "),a("h2",{attrs:{id:"消息积压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息积压"}},[t._v("#")]),t._v(" 消息积压")]),t._v(" "),a("p",[t._v("1）线上有时因为发送方发送消息速度过快，或者消费方处理消息过慢，可能会导致broker积压大量未消费消息。此种情况如果积压了上百万未消费消息需要紧急处理，处理方式：可以修改消费端程序，让其将收到的消息快速转发到其他topic，然后再启动多个消费者同时消费新主题的不同分区。")]),t._v(" "),a("p",[t._v("可以进行扩容，慢慢释放消息")]),t._v(" "),a("p",[t._v("2）由于消息数据格式变动或消费者程序有bug，导致消费者一直消费不成功，也可能导致broker积压大量未消费消息。此种情况可以将这些消费不成功的消息转发到其它队列里去(类似死信队列)，后面再慢慢分析死信队列里的消息处理问题。")]),t._v(" "),a("h2",{attrs:{id:"延时队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延时队列"}},[t._v("#")]),t._v(" 延时队列")]),t._v(" "),a("p",[t._v("延时队列存储的对象是延时消息。所谓的“延时消息”是指消息被发送以后，并不想让消费者立刻获取，而是等待特定的时间后，消费者才能获取这个消息进行消费，延时队列的使用场景有很多， 比如 ：")]),t._v(" "),a("p",[t._v("1）在订单系统中， 一个用户下单之后通常有 30 分钟的时间进行支付，如果 30 分钟之内没有支付成功，那么这个订单将进行异常处理，这时就可以使用延时队列来处理这些订单了。")]),t._v(" "),a("p",[t._v("2）订单完成1小时后通知用户进行评价。")]),t._v(" "),a("p",[a("strong",[t._v("实现思路")]),t._v("：先把消息按照不同的延迟时间段发送到指定的队列中（topic_1s，topic_5s，topic_10s，...topic_2h，这个一般不能支持任意时间段的延时），然后通过定时器进行轮训消费这些topic，查看消息中存储的发送时间戳与当前时间相比是否到期，如果到期就提交offset并把这个消息发送到具体业务处理的topic中，队列中消息越靠前的到期时间越早，具体来说就是定时器在一次消费过程中，对消息的发送时间做判断，看下是否延迟到对应时间了，如果到了就转发，如果还没到这一次定时任务就可以提前结束了。")]),t._v(" "),a("h2",{attrs:{id:"消息回溯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息回溯"}},[t._v("#")]),t._v(" 消息回溯")]),t._v(" "),a("p",[t._v("如果某段时间对已消费消息计算的结果觉得有问题，可能是由于程序bug导致的计算错误，当程序bug修复后，这时可能需要对之前已消 费的消息重新消费，可以指定从多久之前的消息回溯消费，这种可以用consumer的offsetsForTimes、seek等方法指定从某个offset偏移的消息开始消费。")]),t._v(" "),a("h2",{attrs:{id:"分区数越多吞吐量越高吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区数越多吞吐量越高吗"}},[t._v("#")]),t._v(" 分区数越多吞吐量越高吗")]),t._v(" "),a("p",[t._v("从压测结果来看，分区数到达某个值吞吐量反而开始下降，实际上很多事情都会有一个临界值，当超过这个临界值之后，很多原本符合既定逻辑的走向又会变得不同。一般情况分区数跟集群机器数量相当就差不多了。")]),t._v(" "),a("p",[t._v("当然吞吐量的数值和走势还会和磁盘、文件系统、 I/O调度策略等因素相关。")]),t._v(" "),a("p",[t._v('注意：如果分区数设置过大，比如设置10000，可能会设置不成功，后台会报错"java.io.IOException : Too many open files"。异常中最关键的信息是“ Too many open flies”，这是一种常见的 Linux 系统错误，通常意味着文件描述符不足，它一般发生在创建线程、创建 Socket、打开文件这些场景下 。在 Linux系统的默认设置下，这个文件描述符的个数不是很多 ，通过 ulimit -n 命令可以查看：一般默认是1024，可以将该值增大，比如：ulimit -n 65535。')])])}),[],!1,null,null,null);s.default=v.exports}}]);