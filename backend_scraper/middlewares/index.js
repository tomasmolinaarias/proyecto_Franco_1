const express = require("express");
const path = require("path");

exports.load = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
