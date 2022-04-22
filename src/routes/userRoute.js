const routes = (app) => {
    app.route('/user')
        .get((req, res) => {res.send('GET Request');})
        .post((req, res) => {res.send('POST Request');});

    app.route('/user/:userId')
        .get((req, res) => {res.send('GET Single Request');})
        .put((req, res) => {res.send('PUT Request');})
        .delete((req, res) => {res.send('DELETE Request');});
}

export default routes;