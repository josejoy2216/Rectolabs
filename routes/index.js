const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
    res.render('index')
});

router.get('/demo', async (req, res) => {
    res.render('demo')
})

router.get('/blog', async (req, res) => {
    res.render('blog')
})

router.get('/blog-single', async (req, res) => {
    res.render('blog-single')
})

router.post('/contact', async (req, res) => {
    const contact = new Contact({
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail,
        contactSubject: req.body.contactSubject,
        contactMessage: req.body.contactMessage,
    })

    try {
        const newContact = await contact.save()
        res.render('index')
    } catch (err){
        console.log(err);
    }
})


module.exports = router;