const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development', // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    watchFiles: ['./src/**/*'], // следить за всеми файлами в папке src
    open: true,// сайт будет открываться сам при запуске npm run dev
    hot: true // добавим поддержку HMR
  },
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      },
        // добавили правило для обработки файлов
 
  {
       // регулярное выражение, которое ищет все файлы с такими расширениями
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'images/[name].[hash][ext]',
}
},
{
    test: /\.(woff(2)?|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'fonts/[name].[hash][ext]',
    }
},






  {
    // применять это правило только к CSS-файлам
    test: /\.css$/,
    // при обработке этих файлов нужно использовать
    // MiniCssExtractPlugin.loader и css-loader
    use: [MiniCssExtractPlugin.loader, 
       'css-loader',
            'postcss-loader']
          // добавьте объект options

    }]
  
      // Добавьте postcss-loader

      
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html' // путь к файлу index.html
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin() 
  ] 
} 

// module.exports — это синтаксис экспорта в Node.js
// указали первое место, куда заглянет webpack, — файл index.js в папке src  
// указали, в какой файл будет собираться весь js, и дали ему имя main.js
// переписали точку выхода, используя утилиту path 
