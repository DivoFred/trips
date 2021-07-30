const express = require("express");
const router = require("./controller/router");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
const PORT = process.env.PORT || "5000";
app.use("/", router);
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "TRIPS API",
      description: "Normal CRUD",
      contact: {
        name: "Divo Fred",
        number: 08126887684,
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["server.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 * /trip/gettrip:
 *  get:
 *    description:  to request to customers
 *    tags:
 *        - TRIPS
 *    responses:
 *      '200':
 *        description: A sucessful response
 */
/**
 * @swagger
 * /trip/booktrip:
 *  post:
 *    description:  to request to customers
 *    tags:
 *        - TRIPS
 *    parameters:
 *      - in: body
 *        name: location, Destination
 *        schema:
 *          type: string
 *        description: Put Ya Location
 *        required: true
 *
 *    responses:
 *      '200':
 *        description: A sucessful response
 *      '404':
 *        description: NOT AVAILABLE
 *      default:
 *        description: SERVER ERROR
 */
/**
 * @swagger
 * /trip/deletetrip/{id}:
 *  delete:
 *    description:  deletes Based on id
 *    tags:
 *        - TRIPS
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: id Please
 *        required: true
 *
 *    responses:
 *      '200':
 *        description: A sucessful response
 *      '404':
 *        description: NOT AVAILABLE
 *      default:
 *        description: SERVER ERROR
 */
/**
 * @swagger
 * /trip/deleteall:
 *  delete:
 *    description: Deletes All The Salama
 *    tags:
 *      - TRIPS
 *    responses:
 *      '200':
 *        description: A sucessful response
 *      '404':
 *        description: NOT AVAILABLE
 *      default:
 *        description: SERVER ERROR
 */

// app.get("/customers", (req, res, next) => {
//   res.status(200).send("customer results");
// });

const connectDB = require("./db/config");

connectDB();
app.listen(PORT, console.log(`server starting at PORT ${PORT}`));
