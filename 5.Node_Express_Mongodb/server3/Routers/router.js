import express from "express";
import { GetAnotherRoute, GetHome } from "../Controllers/controller";

let router = express.Router()

router.get("/", GetHome)

router.get("/another route", GetAnotherRoute)

export default router