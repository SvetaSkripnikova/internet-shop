const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./index');
//создание приложения
let app = express();
//установка порта для приложения
let port = 3000;

//задаем шаблонизатор для представления
app.set('view engine', 'pug');

app.use('/contact', function(req, res) {
    res.render('contact', {
      title: 'Наши контакты'
    })
  })
  

//задаем директорию со статистическими файлами
//для клиента (css, js, html, images...)
app.use(express.static(__dirname + '/public'));
//задаем парсер тела запроса (request body)
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

//запуск приложени с прослушиванием порта
app.listen(port, () => {
    console.info(`App run on http://localhost:${port}`);
});
