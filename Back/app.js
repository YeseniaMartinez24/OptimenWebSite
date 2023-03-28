import express from "express";
import "./db.js";

//import Connect from "@adminjs/mongoose";
import session from "express-session";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
//Dependencias
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import mongooseAdminJs from "@adminjs/mongoose";
//Modelos
import User from './models/Users.js'
import New from "./models/News.js";
import Event from "./models/Events.js";
import passwordsFeature from "@adminjs/passwords";
import pkg from 'adminjs';

AdminJS.registerAdapter(mongooseAdminJs);

const app = express();

const DEFAULT_ADMIN = {
  email: 'fernandofchr@gmail.com',
  password: '12345',
  role: 'admin'
}

const SECOND_ADMIN = {
  email: 'abtaham0212@gmail.com',
  password: '12345',
  role:'creator'
}

// handle authentication
const authenticate = async (email, password, secondAdmin) => {
  //condition to check for correct login details for the default admin
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    //if the condition is true
    return Promise.resolve(DEFAULT_ADMIN)
  }
  //condition to check for correct login details for the second admin
  if (SECOND_ADMIN && email === SECOND_ADMIN.email && password === SECOND_ADMIN.password) {
    //if the condition is true
    return Promise.resolve(SECOND_ADMIN)
  }
  //if the conditions are false
  return null
}

// RBAC functions
const canModifyUsers = ({ DEFAULT_ADMIN }) => DEFAULT_ADMIN && DEFAULT_ADMIN.role === 'admin'

const canEditNews = ({ DEFAULT_ADMIN, SECOND_ADMIN, record }) => {
  return DEFAULT_ADMIN || (SECOND_ADMIN && (
    SECOND_ADMIN.role === 'creator' &&
    record.type === 'news'
  ))
}

const canEditEvents = ({ DEFAULT_ADMIN, SECOND_ADMIN, record }) => {
  return DEFAULT_ADMIN || (SECOND_ADMIN && (
    SECOND_ADMIN.role === 'creator' &&
    record.type === 'event'
  ))
}

const adminOptions = {
  resources: [
    {
      resource: User,
      options: {
        properties: {
          _id: {
            isVisible: false,
          },
          password: {
            isVisible: {
              show: false,
              edit: true,
              filter: false
            },
          },
        },
        
       

        navigation: {
          icon: "User",
          name: "Users",
        },
        edit: { isAccessible: canModifyUsers },
        delete: { isAccessible: canModifyUsers },
        new: { isAccessible: canModifyUsers },
      },
    },
    {
      resource: New,
      options: {
        properties: {
          _id: {
            isVisible: false,
          },
        },
        navigation: {
          icon: "Tree",
          name: "News",
        },
        edit: { isAccessible: canEditNews },
        delete: { isAccessible: canEditNews },
        new: { isAccessible: canEditNews },
      },
    },
    {
      resource: Event,
      options: {
        properties: {
          _id: {
            isVisible: false,
          },
        },
        navigation: {
          icon: "Purchase",
          name: "Events",
        },
        edit: { isAccessible: canEditEvents },
        delete: { isAccessible: canEditEvents },
        new: { isAccessible: canEditEvents },
      },
    },
  ],

  rootPath:'/admin',
  branding: {
    companyName: "Optimen | Admin",
    withMadeWithLove: false,
    logo: "https://optimen.com.mx/media/external/logo_optimen.ico",
    favicon: "https://optimen.com.mx/media/external/logo_no_name.png",
  },
};

const adminjs = new AdminJS(adminOptions);

const router = AdminJSExpress.buildAuthenticatedRouter(adminjs,  {
  authenticate,
  cookieName: "AdminJS",
  cookiePassword: "Secret",
},
null,
{
  resave: true,
  saveUninitialized: true,
  secret: 'Secret',
  name: 'adminjs',
})
  

app.use(adminjs.options.rootPath, router);

app.listen(4000);
console.log("server listen on port", 4000);
