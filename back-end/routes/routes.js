import express from "express";
import {
    getTest,
    postTest,
    addRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
} from "../controllers/roomControllers.js";
import { catchErrors } from "../helpers.js";

const router = express.Router();

router.get("/", getTest);
router.post("/test", postTest);

router.post("/rooms", addRoom); // Créer une chambre
router.get("/rooms", catchErrors(getRooms)); // obtenir toute les chambres
router.get("/rooms/:id", getRoomById); // Obtenir une chambre
router.patch("/rooms/:id", updateRoom); // Mettre à jour partiellement
router.put("/rooms/:id", updateRoom); // Mettre à jour une chambre
router.delete("/rooms/:id", deleteRoom); // Supprimer une chambre

export default router;
