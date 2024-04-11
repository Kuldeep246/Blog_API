const express = require('express');
const AuthRouter=require('./routes/Auth');
const BlogRouter=require('./routes/Blogs');
const UserRouter=require('./routes/User')


const app = express();
app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/blog",BlogRouter)
app.use("/user",UserRouter)

app.listen(3000, () => {
  console.log("Connected...");
});