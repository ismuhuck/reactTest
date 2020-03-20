const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//用于在内存中生成首页 内容

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),//源文件
    filename: "index.html"// 生成的内存中的首页名称 
})
module.exports = {
    mode: 'development', //development 代表开发环境 production 代表生产环境
    plugins:[ 
        htmlPlugin
    ],
    module:{
        // 所有第三方模块的配置规则
        rules:[
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader',{ loader: 'css-loader'}]},
            {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},
            {test:/.scss$/,use:['style-loader','css-loader?modules','sass-loader']}
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],//表示这几个文件的后缀名可以省略不写
        alias:{//别名
            '@':path.join(__dirname,'./src') // 这样@就表示项目根目录中src这一层路径
        }
    }
}