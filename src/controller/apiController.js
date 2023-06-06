const connection = require('../configs/connectDB');

let getAllUsers = async (req, res) => {
    let data;
    connection.query('SELECT * FROM users', (err, results) => {
        data = results.map((row) => row);
        return res.status(200).json({
            message: 'ok',
            dataUser: data
        });
    });
};

let createUser = (req, res) => {
    connection.query('INSERT INTO users SET?', req.body, (err, results) => {
        if (err) {
            return res.status(400).json({ message: err });
        } else {
            return res.status(200).json({
                message: 'ok',
            })
        }
    });
}

let deleteUser = (req, res) => {
    let id = req.params.id;
    connection.query('DELETE FROM users WHERE id =?', id, (err, results) => {

        if (err) {
            return res.status(400).json({ message: err });
        } else {
            return res.status(200).json({
                message: 'ok',
            })
        }
    });
}

let updateUser = (req, res) => {
    let id = req.params.id;
    connection.query('UPDATE users SET? WHERE id =?', [req.body, id], (err, results) => {
        if (err) {
            return res.status(400).json({ message: err });
        } else {
            return res.status(200).json({
                message: 'ok',
            })
        }
    });
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};