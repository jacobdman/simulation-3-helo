module.exports = {
    addUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.add_user([req.body.data.username, req.body.data.password, req.body.data.profile_pic])
            .then( user => {
                res.status(200).send(user)
            })
            .catch( err => {
                res.status(500).send(err)
                console.log(err)
            })
    },
    loginUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.login_user([req.body.data.username, req.body.data.password])
            .then( user => {
                res.status(200).send(user)
            })
            .catch( err => {
                res.status(500).send(err)
                console.log(err)
            })
    },
    getPosts: (req, res, next) => {
        const dbInstance = req.app.get('db')
        if (req.query.userposts && req.query.search) {
            dbInstance.search_posts([req.query.search])
                .then( posts => {
                    res.status(200).send(posts)
                })
                .catch( err => {
                    res.status(500).send(err)
                    console.log(err)
                })
        } else if (!req.query.userposts && !req.query.search) {
            dbInstance.get_non_user_posts([req.params.id])
                .then( posts => {
                    res.status(200).send(posts)
                })
                .catch( err => {
                    res.status(500).send(err)
                    console.log(err)
                }) 
        } else if (!req.query.userposts && req.query.search) {
            dbInstance.search_non_user_posts([req.params.id, req.query.search])
                .then( posts => {
                    res.status(200).send(posts)
                })
                .catch( err => {
                    res.status(500).send(err)
                    console.log(err)
                })
        } else {
            dbInstance.get_posts()
                .then( posts => {
                    res.status(200).send(posts)
                })
                .catch( err => {
                    res.status(500).send(err)
                    console.log(err)
                })
        }
    },  
    getPost: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log('post id', req.params.id)
        dbInstance.get_post([req.params.id])
        .then( post => {
            res.status(200).send(post)
        })
        .catch( err => {
            res.status(500).send(err)
            console.log(err)
        })
    },
}