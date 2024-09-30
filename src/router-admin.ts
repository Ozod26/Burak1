import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import makeUploader from "./libs/utils/uploader";
import productController from "./controllers/Product.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup
  );
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */

/** Faqat AUTHENTICATED bolhan Restauranlar ishlataolishi kerak
 * boshqa userlar bu pagelarga ummuman kiraolamydi
 * Quyidagi mantiqlarni middlware orqali hosil qilamiz */
routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts
); // verifyRestaurant  <= sabab: faqt restrn memberlr mumkn
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  // uploadProductImage.single("productImage"),
  makeUploader("products").array("productImages", 7),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct
);

/** User */

export default routerAdmin;
