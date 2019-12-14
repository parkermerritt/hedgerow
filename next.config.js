module.exports = {
    /* assetPrefix: process.env.NODE_ENV === 'production' ? '/{hedgerow}' : '', */
    exportTrailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    }
};