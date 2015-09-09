module.exports = {
    entry: "./src/index.js",
    output: {
        path: "./dest",
        filename: "dest.js",
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
        ]
    }
};
