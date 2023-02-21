const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, res) => {
      console.log(error);
      if (!error) {
        console.log("**** CONEXION CORRECTA ****");
      } else {
        console.log("**** ERROR DE CONEXION ****");
      }
    }
  );
};

module.exports = dbConnect;
