module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {}
      },
    });

    // For bin file
    config.module.rules.push({
      test: /\.(bin)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]' // keep the original name
        }
      },
    });
    return config
  },
}