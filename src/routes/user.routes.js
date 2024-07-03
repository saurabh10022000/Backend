import { Router } from "express";
import { loginUser, logoutUser, registerUser,refreshAccessToken,changeCurrentPassword,getCurrentUser,updateAccountDetails,updateAvatar,updateCover,getUserChannelProfile,getWatchHistory} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import {verifyjwt} from "../middlewares/auth.middleware.js";
const router=Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser)
router.route("/login").post(loginUser)


//secured routes
router.route("/logout").post(verifyjwt,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyjwt, changeCurrentPassword)
router.route("/current-user").get(verifyjwt, getCurrentUser)
router.route("/update-account").patch(verifyjwt, updateAccountDetails)
router.route("/avatar").patch(verifyjwt, upload.single("avatar"), updateAvatar)
router.route("/cover-image").patch(verifyjwt, upload.single("coverImage"), updateCover)
router.route("/c/:username").get(verifyjwt, getUserChannelProfile)
router.route("/history").get(verifyjwt, getWatchHistory)
export default router