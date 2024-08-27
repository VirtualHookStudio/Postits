module.exports = app => {
    app.route('/postit')
        .get(app.api.postit.get)
        .post(app.api.postit.save)
        .put(app.api.postit.update)
        .delete(app.api.postit.remove)
}

