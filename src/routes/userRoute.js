import { 
    getUsers,
    getUserWithId,
    updateUser,
    deleteUser
 } from "../controllers/userController";

 import { 
    singup,
    login,
 } from "../controllers/authController";

 import { verify } from "../middlewares/verify";

const routes = (app) => {
    app.route('/signup')
        .post(singup)

    app.route('/login')
        .post(login)

    app.route('/user')
        // Get All User
        .get(verify, getUsers)

    app.route('/user/:userId')
        // Get Specific User
        .get(verify, getUserWithId)

        // Update Specific User
        .put(verify, updateUser)

        // Delete Specific User
        .delete(verify, deleteUser);
}

export default routes;