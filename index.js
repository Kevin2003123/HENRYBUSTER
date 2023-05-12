//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const fillMovie = require("./src/controllers/FillMovie.js");
const fillFormat = require("./src/controllers/fillFormat.js");
const fillGenre = require("./src/controllers/fillGenre.js");
const fillLanguage = require("./src/controllers/fillLanguage.js");
const fillRating = require("./src/controllers/fillRating.js");
const fillUser = require("./src/controllers/fillUser.js");
const {
  conn,
  Format,
  Genre,
  Language,
  Movie,
  User,
  Rating,
} = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    fillUser(User);
    fillFormat(Format);
    fillGenre(Genre);
    fillLanguage(Language);
    fillMovie(Movie);
    setTimeout(function() {
      fillRating(Rating);
    }, 3000);
    
  });
})
