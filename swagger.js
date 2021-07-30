// const express = require("express");
// const app = express();
// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const PORT = process.env.PORT || "5000";
// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: "Customer API",
//       description: "Na fredrick Get sense",
//       contact: {
//         name: "Divo Fred",
//         number: 08126887684,
//       },
//       servers: ["http://localhost:5000"],
//     },
//   },
//   apis: ["swagger.js"],
// };

// const swaggerDocs = swaggerJsdoc(swaggerOptions);

// app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// //Routes
// /**
//  * @swagger
//  * /customers:
//  *  get:
//  *    description: Use to request to customers
//  *    responses:
//  *      '200':
//  *        description: A sucessful response
//  */
// app.get("/customers", (req, res, next) => {
//   res.status(200).send("customer results");
// });
// app.listen(PORT, console.log("App started at " + PORT));
