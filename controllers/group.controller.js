const {connection} = require('../db')
const Joi = require('joi')

const getGroups = async (req, res) => {
    try {
        await connection.promise().query('SELECT * FROM `groups`')
            .then((results) => {
                return res.status(200).json(results[0])
            }).catch(e => {
                return res.status(400).json({message: `${e}`})
            })

    } catch (e) {
        return res.status(500).json({message: `${e}`})
    }
}

const getGroupById = async (req, res) => {
    try {
        const id = req.params.id
        await connection.promise().query('SELECT * FROM `groups` WHERE id=?', id)
            .then((results) => {
                if (results[0].length < 1) {
                    return res.status(200).json({message: `Group with id ${id} is not found!`})
                } else {
                    return res.status(200).json(results[0])
                }

            }).catch(e => {
                return res.status(400).json({message: `${e}`})
            })

    } catch (e) {
        return res.status(500).json({message: `${e}`})
    }
}


const createGroup = async (req, res) => {
    try {
        const date = new Date()
        const month = ("0" + (date.getMonth() + 1)).slice(-2)

        const schema = Joi.object({
            create_date: Joi.string()
                .required(),
            title_ua: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            title_en: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            title_ru: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            active: Joi.boolean()
                .required()
        })

        const model = {
            create_date: `${date.getFullYear()}-${month}-${date.getHours()}:${date.getMinutes()}-${date.getSeconds()}`,
            title_ua: req.body.title_ua,
            title_en: req.body.title_en,
            title_ru: req.body.title_ru,
            active: req.body.active
        }

        const valid = schema.validate(model)
        if (valid.error) {
            return res.status(404).json({
                message: valid.error.message
            })
        }
        await connection.promise().query('INSERT INTO `groups` VALUES (id, create_date, title_ua, title_en, title_ru, active)', model)
            .then((results) => {
                return res.status(200).json({
                    message: "Group created successfully",
                    result: true,
                    data: results[0]
                })
            }).catch(e => {
                return res.status(400).json({message: `${e}`})
            })
    } catch (e) {
        return res.status(500).json({message: `${e}`})
    }
}


const updateGroup = async (req, res) => {
    try {
        await connection.promise().query('INSERT INTO `groups` VALUES (id, create_date, title_ua, title_en, title_ru, active)', model)
            .then((results) => {
                return res.status(200).json({
                    message: "Group updated successfully",
                    result: true,
                    data: results[0]
                })
            }).catch(e => {
                return res.status(400).json({message: `${e}`})
            })
    } catch (e) {
        res.status(500).json({message: `${e}`})
    }
}


const removeGroup = async (req, res) => {
    try {
        const id = req.params.id

        await connection.promise().query('SELECT `id` FROM `groups` WHERE id=?', id)
            .then((results) => {
                if (!results[0][0]) {
                    return res.status(400).json({message: `Group with ${id} does not exist`})
                } else {
                    connection.promise().query('DELETE FROM `groups` WHERE id=?', id)
                        .then((results) => {
                            return res.status(200).json({
                                message: `Group with ${id} deleted successfully`,
                                result: true,
                                data: results
                            })
                        }).catch(e => {
                        return res.status(400).json({message: `${e}`})
                    })
                }
            }).catch(e => {
                return res.status(400).json({message: `${e}`})
            })
    } catch (e) {
        res.status(500).json({message: `${e}`})
    }
}


module.exports = {
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    removeGroup
}