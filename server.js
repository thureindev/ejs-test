const express = require('express');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Temporary storage for form submissions
let submissions = [];

app.get('/', (req, res) => {
    res.send('home');
});

// Route to display the contact form
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  submissions.push({ name, email, message });
  res.send('Thank you for your message!');
});

// Route to view all submissions (for testing)
app.get('/submissions', (req, res) => {
  res.json(submissions);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
