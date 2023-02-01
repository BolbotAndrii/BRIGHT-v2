const {connection} = require('../db')


const getAdminMenuTree = async (req, res) => {
    try {
        await connection.promise().query('SELECT * FROM `admin_sidebar`')
            .then((results) => {
                return res.status(200).json(results[0])
            }).catch(e => {
                return res.status(400).json({message: `${e}`})
            })

    } catch (e) {
        return res.status(500).json({message: `${e}`})
    }
}


module.exports = {
    getAdminMenuTree
}