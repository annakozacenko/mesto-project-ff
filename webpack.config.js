const path = require('path'); // подключаем path к конфигу вебпак

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
                publicPath: ''
    }
}

// module.exports — это синтаксис экспорта в Node.js
// указали первое место, куда заглянет webpack, — файл index.js в папке src  
// указали, в какой файл будет собираться весь js, и дали ему имя main.js
// переписали точку выхода, используя утилиту path 
