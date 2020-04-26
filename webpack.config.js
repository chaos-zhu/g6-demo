let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        g6_topology: path.resolve(__dirname, 'g6_topology.js'),
        g6_tree: path.resolve(__dirname, 'g6_tree.js'),
        g6_reverseTree: path.resolve(__dirname, 'g6_reverseTree.js'),
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'template.html'),
            // chunks:[g6_topology, g6_tree]
        })
    ]
}