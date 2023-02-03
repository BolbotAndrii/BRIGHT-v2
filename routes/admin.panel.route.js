const {Router} = require('express')
const {getAdminMenuTree} = require('../controllers/admin.panel.controller')

const router = Router()

router.post(
    '/sidebar',
    getAdminMenuTree
)


module.exports = router
