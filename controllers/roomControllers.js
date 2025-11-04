export const getTest = (req, res) => {
    res.send("Hello les amis ");
};

export const postTest = (req, res) => {
    res.send(req.body);
};
