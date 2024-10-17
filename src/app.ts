import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

// 2 ta pacgae yordamida veriable hosil qiamiz  uni qiymati => ConnectMongoDB
const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL), //
  collection: "sessions",
});

// EXPRESSDA 4 BO'LIM MAVJUD.

/** 1-ENTRANCE **/
const app = express();
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
// sessionni Middleware  sifatida integrationni amalga oshirish uchun ishlatamiz
// Session hosil bolganda Mongodbda session colectionga murojat etadi
app.use(
  session({
    secret: String(process.env.SESSION_SECRET), // secret nu .env ichida hosil qildik va bu  3-shaxsga korsatish mumkin emas
    cookie: {
      maxAge: 1000 * 3600 * 6,
    },
    store: store, // yuqorida hosil qilgan  storeni qiymatini beryapmiz
    resave: true, // oxirgi kirgan vaqtdan 3 soat davomida. Kirilgan vaqtda ozini yangilaydi | agar false? kirganda 13:10gahca bosa yanaa kirsa shu vaqtgacha boladi.
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS  **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // Middlewere Design Pattern / SPA: REACT

export default app;
function cookieParser(): any {
  throw new Error("Function not implemented.");
}
