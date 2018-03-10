const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  devtool: 'inline-source-map',
  devServer: {
       contentBase: './',
       port:3000,
       inline: true
  },
  
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
  
    // output: {
  //   path: __dirname,
  //   publicPath: '/',
  //   filename: 'bundle.js'
  // },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './'
  // }
};
