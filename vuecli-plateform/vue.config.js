const CompressionPlugin = require("compression-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 10240, // 对超过10k的数据源进行压缩
            deleteOriginalAssets: false // 是否删除原文件
          })
        ]
      };
    }
  }
};
