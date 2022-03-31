import { createConnection } from "typeorm";
import express from 'express';
import routes from './routes/routes';
import { BloodDonation } from "./entities/blood_donation";
import { Doctor } from "./entities/doctor";
import { Donor } from "./entities/donor";

const app = express();

const main = async() =>{

    try{
        await createConnection({
            type:"postgres",
            host:"localhost",
            port: 5432,
            username:"postgres",
            password:"confonet",
            database:"bb",
            entities:[BloodDonation,Doctor,Donor]
        })

        console.log("Connected")

        app.use(express.json());
   
        app.use('/auth', routes)

        app.use('/med', routes)
const port = 8081
        app.listen(port, ()=>{
            console.log("running on Port " +`${port}`)
        })
    }
    catch(error)
    {
        console.log("Not Connected " + error)
    }
   
}

main()