## :pushpin: Vue全家桶开发电商管理系统

<a href="https://bestvueshop.netlify.app/#/login">:triangular_flag_on_post:在线体验地址</a> | <a href="https://yangchaoyi.vip/posts/2020704/">:triangular_flag_on_post:项目总结文档</a> | <a href="https://yangchaoyi.vip/posts/2020709/">:triangular_flag_on_post:后台API接口文档</a>

:warning: 体验时，请尽量不要随意删除数据，谢谢配合！

<p align="center">
<img src="https://camo.githubusercontent.com/87301d019d7f5fd66e4186fcf2f7e7a2276fd9f1/68747470733a2f2f7472617669732d63692e636f6d2f736877323031382f736877323031382e6769746875622e696f2e737667" alt="Build Status" data-canonical-src="https://travis-ci.comChocolate1999/vue-shop.svg" style="max-width:100%;">
<a href="http://hits.dwyl.com/Chocolate1999/vue-shop"><img src="http://hits.dwyl.com/Chocolate1999/vue-shop.svg" alt="HitCount"></a><a href="https://www.gnu.org/licenses/"> <img src="https://img.shields.io/github/license/Chocolate1999/vue-shop.svg" alt="License"></a><a href="https://github.com/Chocolate1999/vue-shop/network"> <img src="https://img.shields.io/github/forks/Chocolate1999/vue-shop.svg" alt="GitHub forks"></a> <a href="https://github.com/Chocolate1999/vue-shop/stargazers"> <img src="https://img.shields.io/github/stars/Chocolate1999/vue-shop.svg" alt="GitHub stars"></a></p>


## :rice_scene: 引言
>此项目经过两番学习，第一次是为了学习Vue，第二次是为了巩固知识并熟练运用，挖掘项目技术亮点，将原本不懂的技术点重新学习，整理一份新的文档。其次，请求比较慢属于正常现象。

**:sunrise:第一次：**

又是一个寒假，曾经一个学霸说过：`寒假是用来反超的！`，所以这个寒假来和我一起学习Vue把，我会把我做的全部整合在这一个目录当中，算是给自己一个学习记录，也方便读者进行查阅。我的项目其实在1月24日正好过除夕的那天完成了，边记录边做项目，后面发现我这个专栏访问量达到了5w，还是有一点人气的，休息三天后，今晚打算来一个总结吧，见证一个从一个不认识Vue是什么的小白到如何快速开发的成长吧~

 <a href="https://blog.csdn.net/weixin_42429718/category_9656024.html"> Vue❤学习专栏传送门</a>

**:sunrise:第二次：**

这是第二次开发实现本项目，终于将本项目进行了上线，代码已经更新完毕，你可以通过以下简单使用方法直接将项目跑起来。如若觉得不错的话，还望给一个 `star` 支持一下，Thanks♪(･ω･)ﾉ

### :rainbow: 简单使用方法

 1. `star` 本项目仓库 ^ o ^ 
 2. `fork` 一份本仓库代码
 3. `git clone -b master git@github.com:Chocolate1999/vue-shop.git` 拷贝源代码
 4.  执行 `npm install` 安装依赖
 5. `npm run serve`  打开本地服务
## :christmas_tree: 项目概述
### 2.1 电商项目基本业务概述
根据不同的应用场景，电商系统一般都提供了PC端、移动APP、移动Web、微信小程序等多种终端访问方式，我们主要是做关于PC后台管理方面
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020011509313545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 2.2 电商后台管理系统的功能
电商后台管理系统用于管理用户账号、商品分类、商品信息、订单、数据统计等业务功能
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200115093452392.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 2.3 电商后台管理系统的开发模式（前后端分离）
电商后台管理系统整体采用前后端分离的开发模式，其中前端项目是基于Vue技术栈的SPA项目。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200115093656584.png)

### 2.4 电商后台管理系统的技术选型
① 前端项目技术栈：
- Vue
- Vue-router
- Element-UI
- Axios
- Echarts

② 后端项目
- Node.js
- Express
- Jwt
- Mysql
- Sequelize

## :balloon: 快速入门篇
>本篇主要是给刚入门Vue的来学习的，里面有一些简单实例，比如记事本，所处城市天气查询，音乐播放配mv等，同时还解决了学习时遇到的问题，学会下面的内容就能快速入门Vue啦~

 1. <a href="https://blog.csdn.net/weixin_42429718/article/details/103952917">2020 零基础 Vue快速入门 Vue基础篇 【详细】</a>
 2. <a href="https://blog.csdn.net/weixin_42429718/article/details/103957276">2020 零基础 Vue快速入门 Vue指令 本地应用篇【整理】</a>
 3. <a href="https://blog.csdn.net/weixin_42429718/article/details/103964103">2020 零基础 Vue快速入门 教开发一个记事本（激发编程乐趣）【整理+源码】</a>
 4. <a href="https://blog.csdn.net/weixin_42429718/article/details/103969483">2020 零基础 Vue快速入门 Vue2.0使用ES6语法的箭头函数=> 对this作用域的理解 【整理】</a>
 5. <a href="https://blog.csdn.net/weixin_42429718/article/details/103969923">2020 零基础 Vue快速入门 Vue项目中引入外部css以及js文件的方法 【整理】</a>
 6. <a href="https://blog.csdn.net/weixin_42429718/article/details/103967761">2020 零基础 Vue快速入门 网络应用 axios+Vue【整理】</a>
 7. <a href="https://blog.csdn.net/weixin_42429718/article/details/103972240">2020 零基础 Vue快速入门 教开发天气查询网页—天知道（激发编程乐趣）【整理+源码】</a>
 8. <a href="https://blog.csdn.net/weixin_42429718/article/details/103974082">2020 零基础 Vue综合应用 教开发音乐播放器—悦听（激发编程乐趣）【整理+源码】</a>

## :closed_book: 电商管理系统开发（百科全书）

 1. <a href="https://blog.csdn.net/weixin_42429718/article/details/103983409">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）项目概述篇</a>
 2. <a href="https://blog.csdn.net/weixin_42429718/article/details/103983723">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）项目初始化篇</a>
 3. <a href="https://blog.csdn.net/weixin_42429718/article/details/103990497">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）使用码云托管项目篇</a>
 4. <a href="https://blog.csdn.net/weixin_42429718/article/details/103995613">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）配置MySQL</a>
 5. <a href="https://blog.csdn.net/weixin_42429718/article/details/103996682">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）登录退出功能实现</a>
 6. <a  href="https://blog.csdn.net/weixin_42429718/article/details/104012018">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）主页布局开发</a>
 7. <a href="https://blog.csdn.net/weixin_42429718/article/details/104018448">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）用户列表开发</a>
 8. <a href="https://blog.csdn.net/weixin_42429718/article/details/104023786">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）【添加用户】</a>
 9. <a href="https://blog.csdn.net/weixin_42429718/article/details/104024379">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）【修改用户】</a>
 10. <a href="https://blog.csdn.net/weixin_42429718/article/details/104031033">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）【删除用户】</a> 
 11. <a href="https://blog.csdn.net/weixin_42429718/article/details/104031835">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）【权限列表】</a>
 12. <a href="https://blog.csdn.net/weixin_42429718/article/details/104033075">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）【角色列表】</a>
 13. <a href="https://blog.csdn.net/weixin_42429718/article/details/104044038">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）【分配权限】</a>
 14. <a href="https://blog.csdn.net/weixin_42429718/article/details/104044630">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）【分配角色】</a>
 15. <a href="https://blog.csdn.net/weixin_42429718/article/details/104045709">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）商品分类篇</a>
 16. <a href="https://blog.csdn.net/weixin_42429718/article/details/104056728">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）分类参数篇</a>
 17. <a href="https://blog.csdn.net/weixin_42429718/article/details/104063899">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）商品列表篇</a>
 18. <a href="https://blog.csdn.net/weixin_42429718/article/details/104077321">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）订单管理篇</a>
 19. <a href="https://blog.csdn.net/weixin_42429718/article/details/104078211">2020 零基础到快速开发 Vue全家桶开发电商管理系统（Element-UI）数据统计篇</a>
 20. <a href="https://blog.csdn.net/weixin_42429718/article/details/104079409">2020 Vue零基础 基于Element-UI开发 （全）项目优化与部署上线（npm，基于vue ui） 上篇</a>
 21. <a href="https://blog.csdn.net/weixin_42429718/article/details/104079909">2020 Vue零基础 基于Element-UI开发 （全）项目优化与部署上线（npm，基于vue ui） 下篇</a>
 

## :heavy_check_mark: 项目部分截图展示
![](https://img-blog.csdnimg.cn/20200709102037177.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20200709102614662.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20200709102743836.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20200709102704285.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20200709102628200.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)


##  :pencil2: 结束语
>学如逆水行舟，不进则退

 **神奇の沟通**

- 沟通是<font color=red> **传递**</font> 沟通是<font color=red> **交流**</font>
- 沟通是<font color=red> **分享**</font> 沟通是<font color=red> **智慧**</font>
- 沟通是<font color=red> **友谊**</font> 沟通是<font color=red> **力量**</font>

" **<font color=chocolate>认识自我、超越自我</font>** " 是沟通的最高境界

- 当你在项目中感觉所要学习的人和事越来越多时，说明你在 **<font color=chocolate>成长</font>** 。
- 当你感觉要责怪的人和事越来越少时，说明你在 **<font color=chocolate>成熟</font>** 。
- 当你在项目中不断获得了友谊和朋友时，说明你将取得项目的 **<font color=chocolate>成功</font>** 。

人们能够记住的东西有如下规律：
- **听到**的内容的 <font color=chocolate>5%</font>
- **读过**的内容的<font color=chocolate>10%</font>
- **见过**的内容的 <font color=chocolate>30%</font>
- **讨论过**的内容的 <font color=chocolate>50%</font>
- **亲自做**的内容的 <font color=chocolate>75%</font>
- **教给别人**所做过的事情的 <font color=chocolate>90%</font>


因此，我觉得我如果把我学过的知识开源也是一件有意义的事情，你读完本篇文章后，你学会了Vue基础用法与使用，你得到了好处，我呢，因为这篇文档，也让自己受益颇多，将知识梳理的同时，也对这件事情记忆深刻了，这难道不是双赢的局面嘛。所以，赶快给本仓库点个star吧，<a href="https://github.com/Chocolate1999/Front-end-learning-to-organize-notes">传送门：小狮子前端の学习笔记</a>。请博主一杯冰阔乐，笑～

>更多详情内容，强烈推荐阅读我写的：<a href="https://yangchaoyi.vip/posts/2020704/">【项目总结文档】Vue全家桶开发电商管理系统项目</a>

有什么问题可以在文章最后评论区**留言和讨论**，当然，欢迎点击文章最后的打赏按键，请博主一杯冰阔乐，笑～

>最后，如果项目和教程对你有所帮助或者你看见了还算比较喜欢，欢迎给我star，谢谢您！

## :name_badge:License

MIT


