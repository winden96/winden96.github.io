(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{418:function(t,e,a){"use strict";a.r(e);var s=a(56),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"初识-hexo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初识-hexo"}},[t._v("#")]),t._v(" 初识 Hexo")]),t._v(" "),a("h2",{attrs:{id:"_1-快速搭建自己的博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-快速搭建自己的博客"}},[t._v("#")]),t._v(" 1. 快速搭建自己的博客")]),t._v(" "),a("p",[t._v("首先需要安装 node.js，安装 npm 模块，切换为淘宝镜像源，更多可在其他文章下查看")]),t._v(" "),a("p",[t._v("本人使用的是win10系统进行搭建")]),t._v(" "),a("p",[t._v("具体文档：https://hexo.io/zh-cn/docs/")]),t._v(" "),a("p",[t._v("参照视频：https://www.bilibili.com/video/BV1Yb411a7ty?spm_id_from=333.999.0.0")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -g hexo-cli\n")])])]),a("p",[t._v("然后便可通过 "),a("code",[t._v("hexo -v")]),t._v(" 查看信息")]),t._v(" "),a("p",[t._v("生成一个文件夹 "),a("code",[t._v("mkdir block")])]),t._v(" "),a("p",[t._v("然后进入该文件夹下 "),a("code",[t._v("cd block")])]),t._v(" "),a("p",[t._v("进行博客初始化 "),a("code",[t._v("hexo init")]),t._v("，会从 github下clone，所以会有点慢")]),t._v(" "),a("p",[t._v("下载完成后，可通过 "),a("code",[t._v("dir")]),t._v(" 进行查看目录信息，linux通过 "),a("code",[t._v("ls -l")]),t._v("查看")]),t._v(" "),a("p",[t._v("然后可通过 "),a("code",[t._v("hexo s")]),t._v("  这里 s 为 start 的简写，进行启动，浏览器输入 http://localhost:4000/便可查看")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v('hexo n "我的第一篇博客文章"')]),t._v(" 便可创建")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/winden96/winden96.github.io/blob/main/img/1.png",alt:""}})]),t._v(" "),a("p",[t._v("然后通过 "),a("code",[t._v("hexo clean")]),t._v("清除缓存 网页正常情况下可以忽略此条命令，所以说这里可以不用")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("hexo g")]),t._v(" 进行生成静态网页")]),t._v(" "),a("p",[a("img",{attrs:{src:"assert//2.png",alt:""}})]),t._v(" "),a("p",[t._v("再次"),a("code",[t._v("hexo s")]),t._v(" 启动, 便可在 本地 看到变化  http://localhost:4000/")]),t._v(" "),a("h2",{attrs:{id:"_2-放入github进行外网访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-放入github进行外网访问"}},[t._v("#")]),t._v(" 2. 放入github进行外网访问")]),t._v(" "),a("ul",[a("li",[t._v("首先安装 git模块，当然也可以通过 git bash 直接进行")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install --save hexo-deployer-git\n")])])]),a("ul",[a("li",[t._v("在 github/gitee 上面 新建一个仓库进行管理，这里采用 github（先试试水）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"assert//3.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("在 你所创建的 hexo 目录下有个 "),a("code",[t._v("_config.yml")]),t._v("，"),a("code",[t._v("Deployment")]),t._v(" 修改其中内容")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deployment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Docs: https://hexo.io/docs/one-command-deployment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/winden96/winden96.github.io.git\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main\n")])])]),a("p",[t._v("这里我的github账号默认是 main 分支，也可以新建一个 master 分支，然后通过 "),a("code",[t._v("git checkout -b master")]),t._v(" 进行新建并切换到 "),a("code",[t._v("master")]),t._v(" 分支")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("hexo d")]),t._v(" 进行部署 等价 ("),a("code",[t._v("hexo deploy")]),t._v(")")])]),t._v(" "),a("p",[a("img",{attrs:{src:"assert//4.png",alt:""}})]),t._v(" "),a("p",[t._v("然后就可以通过  https://winden96.github.io/ 进行访问了")]),t._v(" "),a("h2",{attrs:{id:"_3-修改默认主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改默认主题"}},[t._v("#")]),t._v(" 3. 修改默认主题")]),t._v(" "),a("p",[t._v("选择  https://github.com/litten/hexo-theme-yilia.git  这个主题")]),t._v(" "),a("ul",[a("li",[t._v("克隆到本地 的 "),a("code",[t._v("themes/yilia")]),t._v(" 目录下，因为之前不是安装了 git模块吗，可以cmd直接克隆")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia\n")])])]),a("p",[a("img",{attrs:{src:"assert//5.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("还是修改之前的那个 "),a("code",[t._v("_config.yml")]),t._v(" 文件")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Extensions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Plugins: https://hexo.io/plugins/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Themes: https://hexo.io/themes/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("theme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yilia\n")])])]),a("p",[t._v("将主题改成 yilia")]),t._v(" "),a("p",[t._v("重新部署便可以得到了，依次执行")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("hexo clean\nhexo g\nhexo d\n")])])]),a("p",[a("img",{attrs:{src:"assert//6.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"todo-shoka的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo-shoka的使用"}},[t._v("#")]),t._v(" # TODO Shoka的使用")])])}),[],!1,null,null,null);e.default=_.exports}}]);