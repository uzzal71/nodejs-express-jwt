import { 
    addNewUser,
    getUsers,
    getUserWithId,
    updateUser,
    deleteUser
 } from "../controllers/userController";

const routes = (app) => {
    app.route('/user')
        // Get All User
        .get(getUsers)

        // Add New User
        .post(addNewUser);

    app.route('/user/:userId')
        // Get Specific User
        .get(getUserWithId)

        // Update Specific User
        .put(updateUser)

        // Delete Specific User
        .delete(deleteUser);
}

export default routes;