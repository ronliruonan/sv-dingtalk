# vue-oa-multiple
- a 01. 【ok】***md5 localstorage，提供用户体验，为了提高离线应用的使用***
- a 02. 【??】全局color
- a 03. 【no】公告发文有些重复 
- a 04. 【ok】文章的发文人没有字典，自己想办法 
- a 05. 【--】缺一个admin的加号在applist展示中
- a 06. 【ok】***.gz 文件拦截 (验证办法，把原始js删掉，只留.gz文件)节省服务器性能***
- a 07. 【??】axois 全局拦截
- a 08. 【ok】离线缓存   preload 不要用 【ok】
- a 09. 【ok】离线缓存后，为何应用列表不出数据，都已经存在localStorage了 【ok】
- a 10. 【ok】async await, 捕捉错误，success==false 怎么处理
- a 11. 【ok】将api.ayaron.work换成www.ayaron.work的配置减少dns解析
- a 12. 【??】Tab滑动手势
- a 13. 【ok】Tab切换的动画
- 
- b 01. 【ok】Position:absolute 如果超出父position的区域，会被隐藏？不会的，因为有一个overflow:hidden;
- 
- c 01. 移动端预览页面
- c 02. 移动端文章样式
- c 03. 移动端脚本预防
- c 04. 【ok】Index页：发文信息、公告信息自动更新数据

# 上线需要
1. ***HTTPS协议，及ssl证书 .crt .key文件***
2. ***Nginx***
   - ***启用gzip***
   - ***配置Https协议 及 接口代理配置***
   - ***编码格式***
   - ***端口***


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## 技术要点：

### 1. Webpack 打包（vue.config.js）
1.    采用Compression-webpack-plugin 超过10k的压缩为 .gzip文件
2.    ProductionSourceMap: false 是否生成 .map文件
3.    css 配置scss全局变量使用
4.    pages：Vue生成多页面配置
5.    过滤器 /或者管道 filters
6.    localStorage 的使用
   -     DingMiniApp的数据缓存、md5值校验
   -     字典项的使用
7.     es7 中的async 、await，当然对于无依赖的多个请求，可以使用Promise.all()包裹起来；如果存在依赖关系，则await排队等待
8.     es6 的...运算符，操作名称是什么？
9.     scss 的基本编写
10.    父子组件的配置，还缺少平行组件通信，对，
       可以用node作为中间件 将【待办+发文+公告首页的刷新合并到一起】【这个要好好想一下，还有tab是否要发送一次请求】，动态组件
11.    es6 中的函数参数默认值，解构赋值
12.    String.replace() 高级用法，字符串模板
13.    防抖：字面意思 抖动的频繁了要抑制一下；节流：一定的时间内js方法只运行一次。
重新审视一下：函数节流 和 函数防抖
#### 函数节流：
应用场景：监听页面元素滚动事件的时候会用到，因为滚动事件是一个高频触发的事件。

#### 函数防抖：
因公场景：最常见的的就是用户注册时候的手机号码验证和邮箱验证，只有等着用户输入完成之后前端次需要检查各式是否正确，如果不正确，友情提示

重新审视：来自w3cplus
  *** 防抖（Debounce）*** 和 ***节流（Throttle）*** 都是用来控制某个函数在一定时间内执行多少次的技巧，两者相似而又不同

## 防抖（Debounce）待续？？？？
--------------------------------------------------------------
防抖技术可以把多个顺序的调用合并成一次。
1. 应用场景：调整浏览器窗口大小的时候，会触发很多次resize事件
2. 应用场景：基于AJAX请求的自动完成功能，通过keypress触发
为什么用户还在输入的时候，每个50ms就向服务器发送一次AJAX请求？_.debounce 可以帮忙，当用户停止输入的时候，在发送请求。

### 如何使用debounce 和 throttle 以及常见的坑
-----------------------------------------------------------------
自己造一个debounce / throttle 的轮子看起来是多么诱人，或者找个博文Copy一下。建议采用一下Lodash,生成一个2kb的压缩库
```
  npm i -g lodash-cli
  lodash-cli include=debounce, throttle
```

常见的坑是：不止一次地调用_.debounce方法：

```
  // 错误
  $(window).on('scroll', function () {
      _.debounce(doSomething, 3000);
  })
  
  // 正确
  $(window).on('scroll', _.debounce(doSomething, 300))
```

debounce 方法保存到一个变量后，可以用它的私有方法 cancle
```
var debounced_version = _.debounce(doSomething, 200);
$(window).on('scroll',debounced_version);

// 如果需要取消的话
debounced_version.cancel();
```




## axios的使用，
1. 全局配置headers，配置默认请求参数
2. 封装请求，包装async await

## Object.assign
为什么要使用 Object.assign, 使用Object 点语法不行吗？二者有啥区别


## 离线缓存的旧方式，psa的新方式？


两个事儿：Service Worker  Node中间件：例如将请求合并