const express = require('express');
const urlencoded = require('body-parser').urlencoded({extended: true});
//создание приложения
let app = express();
//установка порта для приложения
let port = 3000;

//задаем шаблонизатор для представления
app.set('view engine', 'pug');
//задаем директорию со статистическими файлами
//для клиента (css, js, html, images...)
app.use(express.static(__dirname + '/public'));
//задаем парсер тела запроса (request body)
app.use(urlencoded);

//запуск приложени с прослушиванием порта
app.listen(port, () => {
    console.info(`App run on http://localhost:${port}`);
});
