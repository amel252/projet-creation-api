import RoomModel from "../models/roomModel.js";

export const getTest = (req, res) => {
    res.send("Hello les amis ");
};

export const postTest = (req, res) => {
    res.send(req.body);
};

// ****create a room***
export const addRoom = async (req, res) => {
    // On crée un nouvel objet room à partir du modèle RoomModel.
    const room = new RoomModel(req.body);
    // On essaye d’enregistrer la nouvelle chambre dans la BD
    await room.save();
    // Si ok on renvoie la chambre enregistrée au client
    res.send(room);
};
// *****read all rooms****
export const getRooms = async (req, res) => {
    // aller chercher tout mes rooms
    const rooms = await RoomModel.find({});
    // envoyé la réponse
    res.send(rooms);
};

// **** read room by id**
export const getRoomById = async (req, res) => {
    const room = await RoomModel.findById(req.params.id);
    res.send(room);
};
//  ****update room****
export const updateRoom = async (req, res) => {
    //  chercher l'élement a modifier
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body);
    //  enregistrer la recherche
    await room.save();
    //  envoyé la mise a jour au BD
    res.send(room);
};
//  *** delete room **
export const deleteRoom = async (req, res) => {
    //  chercher l'élement a modifier
    const room = await RoomModel.findByIdAndDelete(req.params.id);
    //  si y a pas de chambre on envoie msg d'erreur
    if (!room) {
        res.status(404).send("Aucune chambre trouvé ");
    }
    // si ok envoie la réponse
    res.status(200).send("chambre est supprimé ");
};
