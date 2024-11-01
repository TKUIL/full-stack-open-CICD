// webpack.config.js
import path from 'path';

export default {
  entry: './src/main.jsx', // Adjust this if your entry file is named differently

  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'), // Output directory
    publicPath: '/',
  },

  devServer: {
    contentBase: path.join('dist'), // Serve content from the "dist" directory
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',
};
