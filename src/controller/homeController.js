const connection = require('../configs/connectDB');


let getHomePage = (req, res) => {
    let data = [];
    connection.query('SELECT * FROM users', (err, results) => {
        data = results.map((row) => row);
        return res.render('index.ejs', { dataUser: data });
    });
}

let getDetailPage = (req, res) => {
    let id = req.params.id;
    connection.execute('SELECT * FROM users WHERE id =?', [id], (err, results) => {
        data = results[0];
        return res.render('detail.ejs', { dataUserDetail: data });
    });
}

let createUser = (req, res) => {
    connection.query('INSERT INTO users SET?', req.body, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            return res.redirect('/');
        }
    });
}

let deleteUser = (req, res) => {
    let userId = req.body.userId;
    connection.query('DELETE FROM users WHERE id =?', [userId], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            return res.redirect('/');
        }
    });
}

let getEditPage = (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id =?', [id], (err, results) => {
        data = results[0];//phan tu thu nhat la data, thu 2 la field
        return res.render('update.ejs', { dataUser: data });
    });
}

let updateUser = (req, res) => {
    let id = req.body.id;
    connection.query('UPDATE users SET? WHERE id =?', [req.body, id], (err, results) => {
        return res.redirect('/');
    });
}

module.exports = {
    getHomePage,
    getDetailPage,
    createUser,
    deleteUser,
    getEditPage,
    updateUser
}