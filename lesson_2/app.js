const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const { PORT } = require('./configs/config');
const users = require('./dataBase/users');

const app = express();
const staticPath = path.join(__dirname, 'static');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('views', staticPath);
app.use(express.static(staticPath));

app.get('/login', (req, res) => {
  res.render('login');
})
app.get('/registration', (req, res) => {
  res.render('registration');
})
app.get('/users', (req, res) => {
  res.render('users', { userName: "Viktor", users, isMale: true });
});

app.listen(5000, () => {
  console.log(('App listen 5000'))
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const validationResult = validateEmail(email);

  if (!validationResult) {
    res.redirect('/error/Incorrect format of email/login/Login');
    return;
  }

  const user = getUserByEmail(email);

  if (!user || !(user?.password === password)) {
    res.redirect('/error/Incorrect credentials/login/Login');
    return;
  }

  return res.redirect('/users');

});