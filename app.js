const express = require('express')
const ejs = require('ejs')
const multer = require('multer')
const {MongoClient} = require('mongodb')




const app = express();
const port = 8000;

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/admin/images/prodect/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }
});

const upload = multer({ storage: storage });

// new
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
// new

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

app.get('/adm-pro', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('zxstore');
        const collection = db.collection('product');

        const pro = await collection.find().toArray();
        res.render('./admin/admin-product', {
            pro
        });
    } finally {
        await client.close();
    }
});

app.post('/adm-pro', upload.single('pimg'), async (req, res) => {
    try {
        await client.connect();
        const db = client.db('zxstore');
        const collection = db.collection('product');

        const {pname,pcategory,pprice,pquantity,pdescription} = req.body;
        
           // Save the filename in the database
           const pimg = req.file.filename;


        const myobj = {pname,pcategory,pprice,pquantity,pdescription,pimg};
        await collection.insertOne(myobj);

        console.log("1 document inserted");
        res.redirect('/adm-pro'); // Redirect after successful insertion
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