const express = require('express');
const router = express.Router();

router.get('/adm-cat', (req, res) => {
    res.render('admin/admin-category');
});
// router.get('/adm-cus', (req, res) => {
//     res.render('admin/admin-customer');
// });
router.get('/adm-dash', (req, res) => {
    res.render('admin/admin-dashboard');
});
router.get('/adm-log', (req, res) => {
    res.render('admin/admin-login');
});
router.get('/adm-mark', (req, res) => {
    res.render('admin/admin-marketing');
});
router.get('/adm-notify', (req, res) => {
    res.render('admin/admin-notify');
});
router.get('/adm-brand', (req, res) => {
    res.render('admin/admin-brand');
});
router.get('/adm-order', (req, res) => {
    res.render('admin/admin-order');
});
// router.get('/adm-product', (req, res) => {
//     res.render('admin/admin-product');
// });
router.get('/adm-register', (req, res) => {
    res.render('admin/admin-register');
});
router.get('/adm-icon', (req, res) => {
    res.render('admin/icon-tabler');
});
router.get('/pag', (req, res) => {
    res.render('admin/sample-page');
});
router.get('/aler', (req, res) => {
    res.render('admin/ui-alerts');
});
router.get('/butt', (req, res) => {
    res.render('admin/ui-buttons');
});
router.get('/card', (req, res) => {
    res.render('admin/ui-card');
});
router.get('/form', (req, res) => {
    res.render('admin/ui-forms');
});
router.get('/typo', (req, res) => {
    res.render('admin/ui-typography');
});

module.exports = router;