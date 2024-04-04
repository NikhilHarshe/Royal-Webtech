const express = require("express");
const app = express();
const cors = require("cors")
const database = require("./config/DBconnection")
const paymentRoutes = require("./routes/payments");

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;
database.connect();

app.use(express.json());
app.use(
	cors()
  );
  
app.use("/api/v1/payment", paymentRoutes);

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});