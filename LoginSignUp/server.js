const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3002;

// Connect to MongoDB
mongoose.connect('mongodb+srv://i_m_impending:anshabhi@signup.obtcf7l.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a User schema
const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: [true, "name is a requied field!"],
      },
  email: String,
  phone: String,
  password: String,
  state: String,
  district: String,
  userType: String,
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

// Handle form submission
app.post('/', async (req, res) => {
  try {
    // Extract form data from the request
    console.log('req.body: ', req.body.name);
    const { name, email, phone, password, state, district, userType } = req.body;

    // Create a new user document
    const newUser = new User({ 
      name,
      email,
      phone,
      password,
      state,
      district,
      userType
    });

    // Save the user document to MongoDB using async/await
    await newUser.save();
    console.log('new user: ', newUser);
    res.status(200).send('User signed up successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
