const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('user/index');
});
router.get('/sign', (req, res) => {
    res.render('user/signup.ejs');
});
router.get('/hom', (req, res) => {
    res.render('user/index1');
});
router.get('/col', (req, res) => {
    res.render('user/phones');
});
router.get('/sho', (req, res) => {
    res.render('user/laptop');
});
router.get('/racbo', (req, res) => {
    res.render('user/Desktop');
});
router.get('/con', (req, res) => {
    res.render('user/contact');
});
router.get('/pho', (req, res) => {
    res.render('user/phone2');
});
router.get('/des', (req, res) => {
    res.render('user/Desktop2');
});
module.exports = router;