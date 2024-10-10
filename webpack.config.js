const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  entry: './src/main.js', 
  output: {
    filename: 'bundle.js',  
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,    
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,    
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,    
        use: ['vue-style-loader', 'css-loader'],  
      }
    ]
  },
  resolve: {
    alias: {
      'Vue': 'vue/dist/vue.esm-bundler.js',
  },
  extensions: [ '.tsx', '.ts', '.js', '.vue' ],
  },
  plugins: [
    new VueLoaderPlugin()  
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),  
    compress: true,  
    port: 8080,  
    hot: true,  
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',  
};