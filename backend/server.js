require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const ngouser = require("./router/ngouser-router");

const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const eventRoute = require("./router/eventRegis-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const Uploadrouter=require('./Routes/Upload')
const Apirouter=require('./Routes/Api')
const donationRouter=require('./router/donation-router')
const feedbackRouter=require('./router/feedback-router')




const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use(express.json())
app.use("/api/auth", router);
app.use("/api/ngo", ngouser);
app.use("/api/form", contactRoute);
app.use("/api/regis", eventRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use('/upload',Uploadrouter)
app.use('/Api',Apirouter)
app.use("/api/donations", donationRouter); 
app.use("/api/feedback", feedbackRouter); 



app.use(errorMiddleware);


connectDb().then(()=>{
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
});