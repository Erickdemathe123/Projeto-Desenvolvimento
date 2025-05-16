const helper = require("../helper/helper");
const crud = require("../crud/crud");
const { v4: uuidv4 } = require('uuid');

const globalUser = { id: -1 };

async function registerUser({ username, password }) {
    try {
        helper.ensureSignUpArguments(username, password);

        await helper.checkUserExistence(globalUser, "Username", username);

        const hashed = await helper.createNewPassword(password);

        const newUser = await crud.create(globalUser, "Users", {
            Username: username,
            Password: hashed,
            Namespace: uuidv4(),
            Deleted: false,
            Plan: "FREE",
        });

        if (newUser.Error) {
            throw new Error(newUser.Errormessage || "Failed to create user.");
        }

        const token = helper.createJWT(newUser);

        return { success: true, token };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

async function loginUser({ username, password }) {
    try {
        if (!username || !password) {
            throw new Error("Username/password missing.");
        }

        const usersFound = await helper.getUserFromDatabase(globalUser, "Username", username);

        if (!usersFound.length) {
            throw new Error("Invalid credentials.");
        }

        const user = usersFound[0];
        const validPass = await helper.comparePassword(password, user.Password);

        if (!validPass) {
            throw new Error("Invalid credentials.");
        }

        const token = helper.createJWT(user);

        return { success: true, token };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

function guestAccess() {
    const token = helper.createJWT({ guest: true });

    return { success: true, token };
}

function checkAuth(token) {
    const userData = helper.verifyJWT(token);

    return userData;
}

module.exports = { registerUser, loginUser, guestAccess, checkAuth, };