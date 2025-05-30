const jwt = require("jsonwebtoken");

const loginController = {};

const credentials = {
    username: "admin",
    password: "sUpeRsecRetanDrandoMpasswoRd",
};

loginController.index = (req, res) => {
    res.send(`<h2>Hello From LoginController</h2>`);
};

loginController.loginPost = (req, res) => {
    if (
        req.body.username === credentials.username &&
        req.body.password === credentials.password
    ) {
        const token = jwt.sign(
            { username: credentials.username },
            "anotherSecret",
            { expiresIn: "1h" }
        );
        res.json({
            message: "Login Successful",
            token: token,
        });
    } else {
        res.send("Incorrect credentials");
    }
};

module.exports = loginController;
