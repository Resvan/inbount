import dotenv from "dotenv";
dotenv.config();

const getConfigs = () => {
  return {
    morgan: {
      logStyle: "dev",
    },
    cors: {
      origin: [
        "http://localhost:3001",
        "http://localhost:3000",
        "https://inbount-backend.vercel.app",
        "https://inbound-frontend-76vwhtxqu-mishabs-projects-9264965a.vercel.app/",
      ],
      credentials: true,
    },
    server: {
      name: "INBOUND ENHANCEMENTS",
      port: process.env.PORT || 2001,
      baseURl: "/",
      APP_URL: process.env.APP_URL,
      serverId: "1",
      version: "V1",
      appBaseUrl: "/auth",
    },
    mongo: {
      url: process.env.MONGO_URL,
    },
    jwt: {
      accessSecret: process.env.ACCESS_TOKEN_SECRET,
      accessOptions: {
        expiresIn: process.env.JWT_EXPIRES,
      },
    },
    mail: {
      port: process.env.SMTP_PORT,
      host: process.env.SMPT_HOST,
      userMail: process.env.SMPT_MAIL,
      userPass: process.env.SMPT_PASSWORD,
    },
    salt: {
      salt: process.env.SALT,
    },
    cookie: {
      cookie_expire: process.env.COOKIE_EXPIRE,
    },
  };
};

export default getConfigs;