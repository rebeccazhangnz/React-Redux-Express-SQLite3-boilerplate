const path = require('path')

//setup at the build (distribution) path and app path
//build directory is for the outputing the bundle js after built
//app directory is where the components and js files located
const BUILD_DIR = path.resolve(__dirname, 'client/built')
const APP_DIR = path.resolve(__dirname, 'client/src')

module.exports = {
  //default is production mode, which the bundle file will be compressed
  //Please remember that setting NODE_ENV doesn't automatically set mode.
  //We can also add webpack-CLI in package.json and use "webpack --mode=production"
  //in cmd to execute production mode/develompment mode.
  mode: 'development',
  // entry point indicates which module webpack should use to begin building out its internal dependency graph
  entry: [APP_DIR + '/index.js'],
  // output indicates the config of the output bundle files
  output: {
    path: BUILD_DIR, //the dir of the output bundle file
    filename: 'app.bundle.js', //the name of the outpub bundle file
    publicPath: BUILD_DIR // default dir for other genterated files
  },
  //devServer setup the dir for webpack-dev-server, this contentBase dir should point to the html file.
  devServer: {
    contentBase: BUILD_DIR,
  },
  // module indicates the loaders and plugins that are being used
  module: {
    //setting up loader:  Loaders can transform files from a different language (like TypeScript) to JavaScript or inline images as data URLs.
    rules: [
      {
        test: /\.js$/, //apply babel loader to all js/jsx files
        loader: 'babel-loader', //set babel as loader
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map'
}