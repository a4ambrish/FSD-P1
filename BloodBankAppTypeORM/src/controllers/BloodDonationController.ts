import { BaseEntity, getRepository } from "typeorm";
import { Request, Response } from 'express';
import { BloodDonation } from "../entities/blood_donation";

class BloodDonationController extends BaseEntity{

    
    static Data = async (req:Request, res:Response)=>
    {
       
        const Header = req.headers;
      
        if(!(Header))
        {
            res.status(400).send();
        }

        const userRepo = getRepository(BloodDonation);

        let object:any = BloodDonation;

        try
        {
             
            object = await userRepo.createQueryBuilder('blood_donation')
            .innerJoin('blood_donation.donor','donor')
            .innerJoin('blood_donation.doctor','doctor')
            .select(['blood_donation.quantity','donor.name','doctor.firstname','doctor.lastname'])
            .getMany();

                res.status(200).json(
            { 
                response:{
                    object
                }, 
                success: true
            });
                return;
         
        }
        catch(error)
        {
            res.status(401).send(error);
        }
    }


    // static Data2 = async (req:Request, res:Response)=>
    // {
       
    //     const Header = req.headers;
      
    //      let H1:any = Header.mcf_mediator_id;
    //      let H2:any = Header.mcf_status

    //     if(!(Header))
    //     {
    //         res.status(400).send();
    //     }

    //     const userRepo = getRepository(MediationCenterCaseFiling)

    //     let object:any = MediationCenterCaseFiling;

    //     try
    //     {
             
    //         object = await userRepo.count({mcf_mediator_id:H1});

    //         object = await userRepo.find({mcf_mediator_id:H1});

    //             res.status(200).json(
    //         { 
    //             response:{
    //                 object
    //             }, 
    //             success: true
    //         });
    //             return;
    //        // }
            
    //     }
    //     catch(error)
    //     {
    //         res.status(401).send(error);
    //     }
    //}

}

export default BloodDonationController;










// router.post('/api/employee',async (req,res)=>
// {
//     const{EmpId,
//         Name
//     } = req.body;

//     const employee = Employee.create({
//         EmpId:EmpId,
//         Name:Name
//     });

//     await employee.save();

//     return res.json(employee);
// })



// router.get('/api/employeeData',async (req,res)=>
// {
//     // const{EmpId,
//     //     Name
//     // } = req.body;

//     // const employee = Employee.create({
//     //     EmpId:EmpId,
//     //     Name:Name
//     // });

//     const employee = await createQueryBuilder(
//         'Employee'
//     ).select('employee.EmpId')
//     .addSelect('employee.Name')
//     .addSelect('employee.created_at')
//     .addSelect('employee.updated_at')
//     .from(Employee,'employee').getMany();

//     return res.json(employee);
// })