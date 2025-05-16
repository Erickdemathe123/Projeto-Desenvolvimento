const { registerUser, loginUser } = require('../services/authService');

async function registerController(req, res) {
    try {
        const { name, email, password } = req.body;
        const result = await registerUser({ name, email, password });

        return result.success ? res.status(201).json(result) : res.status(400).json(result);
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
}

async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        const result = await loginUser({ email, password });

        return result.success ? res.json(result) : res.status(401).json(result);
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
}

module.exports = { registerController, loginController };

