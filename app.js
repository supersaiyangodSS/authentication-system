const express = require('express');
const path = require('path');
const hbs = require('hbs');
const flash = require('connect-flash');
const session = require('express-session');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const auth = require('./routes/auth');

const secret = crypto.randomBytes(32).toString('hex');
const port = process.env.PORT || 1111;
const viewsPath = path.join(__dirname, 'views');
const partialPath = path.join(__dirname, 'views/partials/');

app.use(cors())

const checkAuth = (req, res, next) => {
    if (req.session && req.session.user) {
      next();
    }
    else {
      res.status(401).redirect('/user/login');
    }
  }

const oneDay = 1000 * 60 * 60 * 24;
const onehour = 1000 * 60 * 60;
app.use(session({
    secret,
    saveUninitialized: true,
    cookie: { maxAge: onehour },
    resave: false
}))
app.use(flash());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('View', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialPath);

app.use('/user', auth);

app.get('/', checkAuth, (req, res) => {
    res.render('dashboard', {
        username: req.session.user
    })
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    contactSubmit: req.flash('contactSubmit')
  })
})

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => console.log(`server is listening at port ${port}`));
