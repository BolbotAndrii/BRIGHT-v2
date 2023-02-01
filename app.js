const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')


// init app
const app = express()


// init port
const PORT = config.get('server_port') || 6000


// set json

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/api/group', require('./routes/group.route'))
// app.use('/api/user', require('./routes/user.route'))
// app.use('/api/permissions', require('./routes/permissions.route'))
//
//
// app.use('/api/catalog/category', require('./routes/catalog.category.route'))
// app.use('/api/catalog/product', require('./routes/catalog.product.route'))
// app.use('/api/catalog/property', require('./routes/catalog.property.route'))
//
//
// app.use('/api/article', require('./routes/article.route'))
// app.use('/api/sale', require('./routes/sale.route'))
// app.use('/api/new', require('./routes/new.route'))
// app.use('/api/comment', require('./routes/comment.route'))
//
//
// app.use('/api/delivery', require('./routes/delivery.route'))
// app.use('/api/payment', require('./routes/payment.route'))
// app.use('/api/price', require('./routes/price.route'))
// app.use('/api/status', require('./routes/status.route'))



const serverStart = async () => {
    try {


        await app.listen( PORT, () => console.log(`Started at port: ${PORT}`) )

    } catch (err) {
        console.log('Server Error', err.message)
        process.exit(1)
    }
}


serverStart()
