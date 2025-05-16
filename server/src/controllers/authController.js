const { registerUser, loginUser, guestAccess } = require("../services/authService");
const jwtInB64 = "anNvbndlYnRva2Vu";

async function registerController(req, res) {
    try {
        const { username, password } = req.body;
        const result = await registerUser({ username, password });

        if (!result.success) {
            return res.status(400).json(result);
        }

        if (result.token) {
            res.cookie(jwtInB64, result.token, {
                httpOnly: true,
                secure: false,
                maxAge: 3600000,
                sameSite: 'strict'
            });
        }

        return res.json(result);
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
}

async function loginController(req, res) {
    try {
        const { username, password } = req.body;
        const result = await loginUser({ username, password });

        if (!result.success) {
            return res.status(401).json(result);
        }

        if (result.token) {
            res.cookie(jwtInB64, result.token, {
                httpOnly: true,
                secure: false,
                maxAge: 3600000,
                sameSite: 'strict'
            });
        }

        return res.json(result);
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
}

function guestController(req, res) {
    try {
        const result = guestAccess();

        if (result.token) {
            res.cookie(jwtInB64, result.token, {
                httpOnly: true,
                secure: false,
                maxAge: 3600000,
                sameSite: 'strict'
            });
        }

        return res.json(result);
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
}

module.exports = {
    registerController,
    loginController,
    guestController,
};