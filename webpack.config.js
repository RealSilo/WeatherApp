var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main.js',
      Nav: 'app/components/nav.js',
      Weather: 'app/components/weather.js',
      WeatherForm: 'app/components/weather_form.js',
      WeatherMessage: 'app/components/weather_message.js',
      About: 'app/components/about.js',
      Examples: 'app/components/examples.js',
      openWeatherMap: 'app/api/open_weather_map.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public/'
  },
  devtool: 'cheap-module-eval-source-map'
};
