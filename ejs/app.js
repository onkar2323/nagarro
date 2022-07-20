const express = require("express");
const path  = require("path");
const bodyparser = require("body-parser");
const session = ("express-session");

const { v4 : uuidv4} = require('uuid');

const router = require('./router');

const app = express();

const port = 3000;
