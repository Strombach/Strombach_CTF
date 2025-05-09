const indexController = {};

indexController.index = (req, res) => {
    res.send(`<h2>Hello From IndexController</h2>`);
};

module.exports = indexController;
