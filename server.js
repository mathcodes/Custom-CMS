const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const config = require('config');
const db = config.get('mongoURI');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const connectDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://user1:user1@devconnection.xzy3k.mongodb.net/test");
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;

const PORT = process.env.PORT || 6060;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
