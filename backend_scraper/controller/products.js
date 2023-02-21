const { productsModel } = require("../models");
const cron = require("node-cron");
const { scraping } = require("../scraping");

/**
 * Obtener lista de la base de datos.
 * @param {*} req
 * @param {*} res
 */

// LEER BASE DE DATOS
const getProducts = async (req, res) => {
  try {
    const data = await productsModel.find({});
    res.send({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Servicio no disponible." });
  }
};

/**
 * Crear un registro.
 * @param {*} req
 * @param {*} res
 */

// LEER BASE DE DATOS MANDAR UN
const createProduct = async (req, res) => {
  try {
    const body = req.body;
    const data = await productsModel.create(body);
    res.send({ data });
  } catch (error) {
    res.status(500).json({ message: "Servicio no disponible." });
  }
};

/**
 * Carga masiva.
 * @param {*} req
 * @param {*} res
 */

// MANDAR VARIOS PRODUCTOS

const manyProducts = async (req, res) => {
  try {
    const body = req.body;
    const data = await productsModel.insertMany(body);
    res.send({ data });
  } catch (error) {
    res.status(500).json({ message: "Servicio no disponible." });
  }
};

//AUTOMATIZAR CADA 28 DIAS

const automatic = async (req, res) => {
  try {
    cron.schedule("*/5 * * * *", async () => {
      const dia = new Date();
      const hoy = dia.toLocaleString();
      let datos = await scraping();
      console.log(datos);
      console.log(hoy);
      /*       await productsModel.insertMany(datos); */
      res.status(204);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Servicio no disponible." });
  }
};
//MANDAR SCRAPIN  A DATABASE
const postScraping = async (req, res) => {
  try {
    const datos = await scraping();
    await productsModel.insertMany(datos);
    res.json({ datos });
  } catch (error) {
    res.json({ ok: false, message: "Servicio no disponible." });
  }
};
// LEER SCRAPING
const GetScarping = async (req, res) => {
  try {
    const datos = await scraping();
    res.json(datos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Servicio no disponible." });
  }
};

//delete
const deleteProducts = async (req, res) => {
  try {
    await productsModel.deleteMany({});
    res.status(200).json({ menssage: "documentos eliminados" });
  } catch (error) {
    res.status(500).json({ message: "Servicio no disponible." });
  }
};
module.exports = {
  getProducts,
  GetScarping,
  manyProducts,
  createProduct,
  automatic,
  deleteProducts,
  postScraping,
};
