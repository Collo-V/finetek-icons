const path = require('path')
require("copy-webpack-plugin")
module.exports = function override(config, env) {
    // Example: Add custom Webpack configuration here
    config.module.rules.push({
        test: /\.svg$/,
        use: [{
            loader:"@svgr/webpack" ,
            options:{
                icon:true
            }
        }],

    });

    return config;
};