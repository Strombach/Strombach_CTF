const loginController = {};

loginController.index = (req, res) => {
    res.send(`<h2>Hello From LoginController</h2>`);
};

module.exports = loginController;