const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const registerModel = require('./Model/registermodel');
const quries = require('./Model/Querymodel')
const uploadnewsmodel = require('./Model/uploadnewsModel')
const uploadflatforrent = require('./Model/uploadFlatrentModel')
const documents = require('./Model/userDocs')
const session = require('express-session');
const fs = require('fs');
const multer = require('multer')
const path = require('path');
const app = express();



app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true in production
}));

var storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, 'uploads')
  },
  filename: function (req, file, cd) {
    cd(null, file.fieldname + "_" + file.originalname);
  }
})
var upload = multer({
  storage: storage,
}).single("image");

const upload1 = multer({ storage: storage }).array('image', 10); // Allow up to 10 files


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
  credentials: true
};





app.use(cors(corsOptions));
app.use(express.json()); // Add express.json() middleware here



mongoose.connect('mongodb+srv://techiesarjun1978:12345@realestate.uizycug.mongodb.net/?retryWrites=true&w=majority&appName=realestate')
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.error('MongoDB connection error:', err));



  app.post('/uploaddocuments/:id', upload1, async (req, res) => {
    try {
      const files = req.files; // Access the uploaded files
      const objectId = req.params.id;  // Access the object ID from the route parameter
      const name = req.body.name;
      if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }
  
      // Save each uploaded file to the database
      const documentPromises = files.map(file => {
        const newDocument = new documents({
          objectId: objectId,
          doc: file.filename,
          name:name
        });
        return newDocument.save();
      });
  
      // Wait for all documents to be saved
      const savedDocuments = await Promise.all(documentPromises);
  
      // Send success response
      res.json({ message: 'Documents uploaded successfully', documents: savedDocuments });
    } catch (err) {
      // Send error response
      res.status(400).json({ error: err.message });
    }
  });
 app.use('/documents', express.static(path.join(__dirname, 'uploads')));
  app.get('/getdocument', async (req, res) => {
    try {
        // Query all documents
        const allDocs = await documents.find();

        if (!allDocs || allDocs.length === 0) {
            return res.status(404).json({ message: 'No documents found' });
        }

        // Group documents by object ID
        const groupedDocs = groupByObjectId(allDocs);

        // Send the grouped documents data in the response
        res.json({ documents: groupedDocs });
    } catch (err) {
        // Send error response
        res.status(500).json({ error: err.message });
    }
});

// Function to group documents by object ID
function groupByObjectId(docs) {
    const groupedDocs = {};
    docs.forEach(doc => {
        const objectId = doc.objectId;
        if (!groupedDocs[objectId]) {
            groupedDocs[objectId] = [];
        }
        groupedDocs[objectId].push(doc);
    });
    return groupedDocs;
}

  app.delete("/deleteflate/:id", async (req, res) => {
    let id = req.params.id;
  
    try {
      const result = await uploadflatforrent.deleteOne({ _id: id });
  
  
  
      res.json({ message: "successfully deleted" })
    } catch (err) {
      console.error(err);
      res.json({ message: err.message });
    }
  });

  app.get('/alldocuments', (req, res) => {
    documents.find()
      .then(documents => res.json(documents))
      .catch(documents => res.json(err))
  })
  


  app.post('/newsupload', upload, async (req, res) => {
    try {
      const { heading, newsdiscription, date, Link } = req.body;
      const image = req.file.filename; // Access the filename from req.file
  
      // Create new instance of Gallery model
      const newGallery = new uploadnewsmodel({
        heading,
        date,
        Link,
        newsdiscription,
        images: image
      });
  
      // Save newGallery to database
      const savedGallery = await newGallery.save();
  
      // Send success response
      res.json({ message: 'news upload successfully', uploadnewsmodel: savedGallery });
    } catch (err) {
      // Send error response
      res.status(400).json({ error: err.message });
    }
  });

app.get('/allnews', (req, res) => {
  uploadnewsmodel.find()
    .then(uploadnewsmodel => res.json(uploadnewsmodel))
    .catch(uploadnewsmodel => res.json(err))
})

app.delete("/deleteNews/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const result = await uploadnewsmodel.deleteOne({ _id: id });



    res.json({ message: "successfully deleted" })
  } catch (err) {
    console.error(err);
    res.json({ message: err.message });
  }
});




app.post('/uploadflat/:personId', upload, async (req, res) => {
  try {
    const { flatlocation, pricing, rating, sqtfoot, bedroom, beds,name,email,conte } = req.body;
    const image = req.file.filename; // Access the filename from req.file
    const personId = req.params.personId; // Extract personId from URL params

    // Check if the provided personId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(personId)) {
      return res.status(400).json({ error: 'Invalid personId' });
    }

    // Find the person by personId
    const person = await registerModel.findById(personId);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Create a new instance of uploadflatforrent model
    const newFlat = new uploadflatforrent({
      flatlocation,
      pricing,
      rating,
      sqtfoot,
      bedroom,
      beds,
      imagesq: image,
      personId, // Associate the rental flat with the provided personId
      name,
      email,
      conte 
    });

    // Save newFlat to the database
    const savedFlat = await newFlat.save();

    // Send success response
    res.json({ message: 'Flat uploaded successfully', flat: savedFlat });
  } catch (err) {
    // Send error response
    res.status(400).json({ error: err.message });
  }
});



app.get('/images/:personId', async (req, res) => {
  try {
    const personId = req.params.personId;

    // Check if the provided personId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(personId)) {
      return res.status(400).json({ error: 'Invalid personId' });
    }

    // Find the images associated with the provided personId
    const images = await uploadflatforrent.find({ personId: personId });

    // Check if any images were found
    if (!images || images.length === 0) {
      return res.status(404).json({ error: 'No images found for the provided personId' });
    }

    // Send the images as the response
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/user/:personId', async (req, res) => {
  try {
    const personId = req.params.personId;

    // Check if the provided personId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(personId)) {
      return res.status(400).json({ error: 'Invalid personId' });
    }

    // Find the user information associated with the provided personId
    const user = await registerModel.findById(personId);

    // Check if the user information was found
    if (!user) {
      return res.status(404).json({ error: 'User not found for the provided personId' });
    }

    // Send the user information as the response
    res.json(user);
  } catch (error) {
    console.error('Error fetching user information:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/logout', (req, res) => {
  if (req.session) {
    // Destroy the session
    req.session.destroy(err => {
      if (err) {
        return res.status(500).json({ message: 'Failed to log out' });
      } else {
        return res.status(200).json({ message: 'Logged out successfully' });
      }
    });
  } else {
    return res.status(200).json({ message: 'No active session' });
  }
});


app.get('/persons/:id', async (req, res) => {
  const objectId = req.params.id;

  try {
      // Find the person in the database based on the object ID
      const person = await uploadflatforrent.findById(objectId);

      // Check if person exists
      if (person) {
          res.json(person); // Return person's details as JSON response
      } else {
          res.status(404).json({ error: 'Person not found' }); // Return 404 error if person not found
      }
  } catch (err) {
      console.error('Error fetching person:', err);
      res.status(500).json({ error: 'Internal Server Error' }); // Return 500 error if there's an internal server error
  }
});



app.post('/register', async (req, res) => {
  try {
    const { name, email, password, contact, isAdmin, role } = req.body;

    // Check if user with the provided email already exists
    const existingUser = await registerModel.findOne({ email });
    if (existingUser) {
      // If user already exists, send a response indicating the conflict
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a unique personId using uuid
    const personId = uuidv4();

    // Create a new user instance with the hashed password
    const newUser = new registerModel({
      name,
      email,
      password: hashedPassword,
      // Corrected the field name to 'contact'
      contact,
      role,
      isAdmin,
      personId,
    });

    // Save the new user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Send error response
    console.error('Error during user registration:', error);
    res.status(400).json({ error: error.message });
  }
});



app.post('/forget/api/pswforget', async (req, res) => {
  const { email, resetToken, newPassword } = req.body;
  try {
    const user = await registerModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    if (user.resetPasswordToken !== resetToken || user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }


    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;


    await user.save();

    // Return success message
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/finduser/api/finduser', async (req, res) => {
  const { email } = req.body; // Assuming email is sent in the request body

  try {
    // Query the database to find the user by email
    const user = await registerModel.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If user is found, return the user data
    res.status(200).json({ user });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
});


app.post("/login/api/check", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Received login request for email:", email);

    // Find user by username
    const user = await registerModel.findOne({ email });

    console.log("Found user:", user);

    if (!user) {
      console.log("User not found.");
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    console.log("Password validity:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("Incorrect password.");
      return res.status(401).json({ message: 'Authentication failed. Incorrect password.' });
    }

    // Determine user type based on isAdmin and role fields
    let greetingMessage = '';
    if (user.isAdmin) {
      greetingMessage = `Hello admin. User logged in successfully`;
    } else if (user.role === 'tenant') {
      greetingMessage = `Hello tenant. User logged in successfully`;
    } else {
      greetingMessage = `Hello user. User logged in successfully`;
    }

    console.log("Greeting message:", greetingMessage);

    // Retrieve all information about the logged-in user
    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      // Include other fields as needed
    };

    console.log("User data:", userData);

    // If authentication succeeds, return the user profile along with the greeting message
    res.status(200).json({ message: greetingMessage, user: userData });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/alluser', (req, res) => {
  registerModel.find({ role: 'user' })
    .then(registerModel => res.json(registerModel))
    .catch(registerModel => res.json(err))
})

app.get('/allflatesfind', (req, res) => {
  uploadflatforrent.find()
    .then(uploadflatforrent => res.json(uploadflatforrent))
    .catch(uploadflatforrent => res.json(err))
})

app.get('/alltenant', (req, res) => {
  registerModel.find({ role: 'tenant' }) // Filtering by role "tenant"
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.delete("/deleteUser/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const result = await registerModel.deleteOne({ _id: id });



    res.json({ message: "successfully deleted" })
  } catch (err) {
    console.error(err);
    res.json({ message: err.message });
  }
});


app.post('/submitquery', async (req, res) => {
  try {
    const { name, flatno, mobileno, service } = req.body;

    // Hash the password

    // Create a new user instance with the hashed password
    const newUser = new quries({
      name, flatno, mobileno, service

    });

    // Save the new user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User query submit successfully' });
  } catch (error) {
    // Send error response
    console.error('Error during user register query:', error);
    res.status(400).json({ error: error.message });
  }
});


app.get('/getallUSer', (req, res) => {
  quries.find()
    .then(quries => res.json(quries))
    .catch(quries => res.json(err))
})


app.delete("/deleteQuery/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const result = await quries.deleteOne({ _id: id });



    res.json({ message: "successfully deleted" })
  } catch (err) {
    console.error(err);
    res.json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
