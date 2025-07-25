import dotenv from "dotenv";
import path from "path"

dotenv.config({path: path.join(process.cwd(), ".env")})

export default {
    port: process.env.PORT || 6000,
    mongo_database_url: process.env.MONGO_DATABASE_URL
}