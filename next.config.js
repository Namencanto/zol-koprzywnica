module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(docx)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/documents",
            outputPath: `${isServer ? "../" : ""}static/documents`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};
