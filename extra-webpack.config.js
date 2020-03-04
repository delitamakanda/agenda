var BundleTracker = require('webpack-bundle-tracker');
var path = require('path');

module.exports = {
    output: {
        "path": path.resolve('../static/ionic/'),
        "filename":  "[name].js",
        "chunkFilename":  "[id].chunk.js"
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    devServer: {
        "host": "localhost",
        "proxy": {
            "*": "http://localhost:8000/"
        },
        "historyApiFallback":  true,
        "publicPath":  "http://localhost:8100/",
        "headers": {
            'Access-Control-Allow-Origin':  '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
    },
    plugins:[
        new BundleTracker({filename: '../webpack-stats.json'})
    ]
};