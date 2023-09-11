"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorizations_1 = require("../middleware/authorizations");
const upload_1 = require("../middleware/upload");
const vendorControllers_1 = require("../controllers/vendorControllers");
const router = express_1.default.Router();
router.post("/verifyvendor", vendorControllers_1.verifyVendor);
router.post("/registervendor", authorizations_1.authForVerifiedVendor, upload_1.upload.single("cover_image"), vendorControllers_1.registerVendor);
router.post("/createfood", authorizations_1.vendorauth, upload_1.upload.single("food_image"), vendorControllers_1.vendorcreatesFood);
router.get("/getallfood", authorizations_1.vendorauth, vendorControllers_1.vendorgetsAllHisFood);
router.get("/getsinglefood", authorizations_1.vendorauth, vendorControllers_1.vendorGetsSingleFood);
router.post("/login", vendorControllers_1.vendorLogin);
router.post("/passwordchange", authorizations_1.vendorauth, vendorControllers_1.vendorChangePassword);
router.put("/editprofile", authorizations_1.vendorauth, upload_1.upload.single("cover_image"), vendorControllers_1.vendorEditProfile);
router.put("/editfood/:id", authorizations_1.vendorauth, vendorControllers_1.updateFood);
router.put("/:foodID/ready", authorizations_1.vendorauth, vendorControllers_1.changeStatus);
router.get("/getsingleprofile", authorizations_1.vendorauth, vendorControllers_1.vendorGetsProfile);
router.delete("/deletefood/:foodid", authorizations_1.vendorauth, vendorControllers_1.DeleteSingleFood);
router.delete("/", authorizations_1.vendorauth, vendorControllers_1.DeleteAllFood);
router.get("/vendororders", authorizations_1.vendorauth, vendorControllers_1.vendorGetsOrderCount);
router.get("/revenuevendor", authorizations_1.vendorauth, vendorControllers_1.vendorTotalRevenue);
router.put("/availablevendor", authorizations_1.vendorauth, vendorControllers_1.vendorAvailability);
router.get("/singleorder/:id", vendorControllers_1.singleOrderDetails);
router.get("/popularfoods", authorizations_1.vendorauth, vendorControllers_1.vendorGetHisPopularFoods);
router.get("/totalearnings", authorizations_1.vendorauth, vendorControllers_1.vendorTotalEarnings);
router.get("/orderbyfood", authorizations_1.vendorauth, vendorControllers_1.orderByFood);
router.get("/earningsandrevenue", authorizations_1.vendorauth, vendorControllers_1.earningsAndRevenue);
router.delete('/deleteorder/:orderid', authorizations_1.vendorauth, vendorControllers_1.DeleteSingleOrder);
exports.default = router;
// vendorauth,