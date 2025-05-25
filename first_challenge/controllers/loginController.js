const loginController = {};

const credentials = {
    username: "admin",
    password: "sUpeRsecRetanDrandoMpasswoRd",
};

loginController.index = (req, res) => {
    res.send(`<h2>Hello From LoginController</h2>`);
};

loginController.login = (req, res) => {
    if (
        req.body.username === credentials.username &&
        req.body.password === credentials.password
    ) {
        res.send("Login Succesful");
    } else {
        res.send("Incorrect credentials");
    }
};

module.exports = loginController;
