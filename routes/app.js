const express = require('express');
//создание приложения
let app = express();
//установка порта для приложения
let port = 3000;
//запуск приложени с прослушиванием порта
app.listen(port, () => {
    console.info(`App run on http://localhost:${port}`);
});
