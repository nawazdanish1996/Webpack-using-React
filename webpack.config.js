const path = require('path');
const port  = process.env.port || 3500;

module.exports = {
    mode : "development",
    entry : "./src/App.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename : "output.js"
    },
    // Loader
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    // Loader
    devServer : {
        static : {
            directory : path.join(__dirname, 'dist'),
        },
        compress : true,
        port : port,
    }
}