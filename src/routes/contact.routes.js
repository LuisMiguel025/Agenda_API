import { Router } from "express";
import { methods as contactController } from "../controllers/contact.controller";

const router = Router();

router.get("/", contactController.getContacts);
router.get("/:id", contactController.getContact);
router.post("/", contactController.addContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

export default router;
