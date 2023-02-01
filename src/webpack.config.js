module.exports = {
    resolve: {
        fallback: {
            // assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify')
        },
    },
};