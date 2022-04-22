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

const routes = (app) => {
    app.route('/signup')
        .post(singup)

        .post(login);

    app.route('/user')
        // Get All User
        .get(getUsers)

    app.route('/user/:userId')
        // Get Specific User
        .get(getUserWithId)

        // Update Specific User
        .put(updateUser)

        // Delete Specific User
        .delete(deleteUser);
}

export default routes;