const express = require('express');
const ejs = require('ejs');
const {
    MongoClient
} = require('mongodb');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')

app.use('/', userRoutes)
app.use('/admi', adminRoutes)

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


app.get('/adm-cus', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('zxstore');
        const collection = db.collection('customer');

        const cus = await collection.find().toArray();
        res.render('./admin/admin-customer', {
            cus
        });
    } finally {
        await client.close();
    }
});

app.post('/adm-product', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('zxstore');
        const collection = db.collection('product');

        const {
            pname,
            page,
            psex,
            pplace,
            pdepartment,
            pdoctor,
            pbloodgroup,
            pphone,
            pdate
        } = req.body;

        const myobj = {
            pname,
            page,
            psex,
            pplace,
            pdepartment,
            pdoctor,
            pbloodgroup,
            pphone,
            pdate
        };
        await collection.insertOne(myobj);

        console.log("1 document inserted");
        res.redirect('/uapp'); // Redirect after successful insertion
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
});
// route

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});