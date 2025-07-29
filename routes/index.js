 const express = require ('express');
 const router = express.Router();
 
 const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

//index route
router.get('/', (req, res) => {
    res.render('index', { title: 'Mini messageboard', messages});
});

//new message form
router.get('/new', (req, res) => {
    res.render('form');
});

// Handle POST form
router.post('/new', (req, res) => {
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;

    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date()
    });
    res.redirect('/');
})

// Message detail page
router.get('/message/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const message = messages[index];

    if(!message) {
        return res.status(404).send('Message not found');
    }

    res.render('message', {title: "Message Details",
        message,
        index: req.params.id
    });
});

module.exports = router;