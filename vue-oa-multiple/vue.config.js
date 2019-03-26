const CompressionPlugin = require('compression-webpack-plugin')
// const path = require('path')
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')

module.exports = {
    productionSourceMap: false,
    css: {
        modules: false,
        sourceMap: false,
        loaderOptions: {
            sass: {
                data: `@import "@/theme/variables.scss";`
            }
        }
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
        news: 'src/modules/news/news.js',
        article: 'src/modules/article/article.js'
    },
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/, // 匹配文件名
                        threshold: 10240, // 超过10k的数据进行压缩
                        deleteOriginalAssets: false // 是否删除源文件
                    }),
                    // // Skeleton
                    // new SkeletonWebpackPlugin({
                    //     webapckConfig: {
                    //         entry: {
                    //             app: path.join(__dirname, './src/skeleton.js')
                    //         },
                    //         minimize: true,
                    //         quiet: true,
                    //     }
                    // }),
                ]
            }
        }
    }
}
