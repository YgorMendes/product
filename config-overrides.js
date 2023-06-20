function typescriptLoader() {
  return [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    },
    {
      loader: require.resolve('ts-loader'),
      options: {
        allowTsInNodeModules: true,
        transpileOnly: true
      }
    }
  ];
}

module.exports = function override(config) {
  config.module.rules.push({
    test: /\.ts(x?)$/,
    include: [
      /@neogrid\/react(?!.*node_modules)/,
      /@neogrid\\react(?!.*node_modules)/,
      /@neogrid\/react-design-system(?!.*node_modules)/,
      /@neogrid\\react-design-system(?!.*node_modules)/,
      /@neogrid\/react-core(?!.*node_modules)/,
      /@neogrid\\react-core(?!.*node_modules)/
    ],
    use: typescriptLoader(),
  });

  config.module.rules[1].oneOf.splice(2, 0, {
    test: /\.less$/i,
    exclude: /\.module\.(less)$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    ]
  });

  return config;
};
