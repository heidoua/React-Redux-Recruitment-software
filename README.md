# 实时聊天招聘APP
## 描述
这是一款React + React Router + Redux 开发的高颜值实时聊天招聘APP，技术上使用React16 + Redux + React Router4开发复杂的单页面应用，并使用node.js + express + socket.io管理实时应用的后端
## 下载源码
```
git clone https://github.com/fangfeiyue/React-Redux-Recruitment-software.git
```
## 运行项目
```
npm install
npm start
```
## 技术选型
- 版本控制：git
- 开发工具：vscode
- 软件开发过程：敏捷开发
- 前端：React16 + Redux + React Router4
- 后端：node.js + express + socket.io
- 模块化方案：ES6 + Webpack
- 前后端分离方式：完全分离，纯静态方式
## 知识点总结
### React开发环境
- create-react-app的使用
  - npm install -g create-react-app 
  - npm create-react-app 创建的项目名称
  - cd到项目目录，运行npm start 启动安装好的项目
  - 浏览器输入localhost:3000
  - npm install redux --save 安装第三方库
  - npm run eject 弹出配置文件，可以自定义配置webpack
  - 扩展package.json里的script字段，扩展 npm run命令
遇到的问题：在运行`npm install redux --save`安装redux时，报错
```
Failed to parse json
npm ERR! Unexpected token '/' at 8:5
npm ERR!     // webpack、eslint的配置都在react-scripts
npm ERR!     ^
npm ERR! File: /Users/fangfeiyue/Desktop/GuoAn/recruitment/package.json
npm ERR! Failed to parse package.json data.
```
原因：package.json文件中用了双斜杠注释
```
"dependencies": {
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    // webpack、eslint的配置都在react-scripts
    "react-scripts": "1.0.15"
},
```
解决办法：去掉双斜杠注释
## 传说中的彩蛋
## 说明
如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目
## 个人简介
作者：房飞跃

博客地址：[前端网](http://www.qdfuns.com/house/31986/note)  [博客园](https://www.cnblogs.com/fangfeiyue)  [GitHub](https://github.com/fangfeiyue)

职业：web前端开发工程师

爱好：探索新事物，学习新知识

座右铭：一个终身学习者

## 联系方式
坐标：北京

QQ：294925572

微信：

![XinShiJieDeHuHuan](http://note.youdao.com/yws/public/resource/c2361265179a03449f6d52397fd50033/xmlnote/100D55934BB446839482D3EA0CDC3E8D/17820)

## 赞赏
觉得有帮助可以微信扫码支持下哦，赞赏金额不限，一分也是您对作者的鼎力支持

![微信打赏](http://note.youdao.com/yws/public/resource/c2361265179a03449f6d52397fd50033/xmlnote/D77744C8EC944CF6AA232272CBC5CF6D/17828)
