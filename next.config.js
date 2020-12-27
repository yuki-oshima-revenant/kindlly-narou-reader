module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.br$/,
            use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]' } }],
        })
        return config
    },
};
