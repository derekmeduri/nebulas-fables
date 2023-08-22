const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
//const helpers = require("./utils/helpers");

const exp = require("constants");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
  //need to create cookie params
  secret: process.env.SECRET,
  cookie: {
    maxage: 600000,
    // httpOnly: true,
    // secure: false,
    // sameSite: "strict",
  },
  reseave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//set directory for views
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);


app.use(['/directory', '/api/constellation/:constellation_name'], function (req, res, next){
  next();
});
//connect to db before starting server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now Listening on port 'http://localhost:${PORT}'`)
  );
});
