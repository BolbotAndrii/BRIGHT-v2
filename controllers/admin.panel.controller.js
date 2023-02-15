const {connection} = require('../db')


const getAdminMenuTree = async (req, res) => {
    try {
        const {lang} = req.body
        const title = 'title_'+lang
        const queryString = "SELECT  id, "+ title +" as title, type, path, icon, sort, depth, active  FROM `admin_sidebar` WHERE active=?"

        await connection.promise().query(queryString, 'true')
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