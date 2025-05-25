const loginController = {};

loginController.index = (req, res) => {
    res.send(`<h2>Hello From LoginController</h2>`);
};

loginController.login = (req,res) => {
    res.send(req.body)
}

module.exports = loginController;