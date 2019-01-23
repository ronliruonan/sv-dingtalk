module.exports = {
    productionSourceMap: false,
    css: {
        sourceMap: false
    },
    pages: {
        // notice: {
        //     // 应用入口配置，相当于单页面应用的main.js，必需项
        //     entry: 'src/modules/notice/notice.js',
        //     // 应用的模板，相当于单页面应用的public/index.html， 可选项，省略时默认与模块名称相同
        //     template: 'public/notice.html',
        //     // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名称一致
        //     filename: 'notice.html',
        //     // 标题，可选项，一般情况下不适用，通常是在路由切换时设置title
        //     // 需要注意的是使用title属性template中的title标签需要是<title><%= htmlWebpackPlugin.options.title %></title>
        //     title: 'notice page',
        //     // 包含的模块，可选项
        //     chunks: ['notice']
        // },
        // 只有entry属性时，直接用字符串表示模块入口
        index: 'src/modules/index/index.js',
        todo: 'src/modules/todo/todo.js',
        dispatch: 'src/modules/dispatch/dispatch.js',
        notice: 'src/modules/notice/notice.js',
        article:'src/modules/article/article.js'
    }
}
