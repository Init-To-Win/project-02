const path = require("path");
const express = require("express");
const session = require("express-session");
console.log(session);
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();

const routes = "/controllers";
const sequelize = "./config/connection";
// const helpers = require(".utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    //do we need to have the sid
  },
  resave: false,
  store: new SequelizeStore({ db: sequelize }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`\nServer running on port ${PORT}.`));
});
