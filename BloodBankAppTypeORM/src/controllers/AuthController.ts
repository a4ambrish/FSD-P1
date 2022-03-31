// import { BaseEntity, getRepository } from "typeorm";
// import { Request, Response } from 'express';
// import { MediatorUser } from '../entities/mediator_user';

// class AuthController extends BaseEntity{

    
//     static login = async (req:Request, res:Response)=>
//     {
//         const{ email_id, password } = req.body;
//         if(!(email_id && password))
//         {
//             res.status(400).send();
//         }

//         const userRepo = getRepository(MediatorUser)

//         let user:any = MediatorUser;

//         try
//         {
             
//             user = await userRepo.findOne({email_id:email_id});

//             if(user==null && !user.isValidPassword(password))
//             {
//                 res.status(401).send('Invalid');
//                 return;
//             }
//             else{
//                 res.status(200).json(
//             { 
//                 tokens:{
//                     accessToken:user.generateJWT(),
//                     refreshToken:user.generateRefreshJWT()
//                 }, 
//                 success: true
//             });
//                 return;
//             }
            
//         }
//         catch(error)
//         {
//             res.status(401).send(error);
//         }
//     }
// }

// export default AuthController;










// // router.post('/api/employee',async (req,res)=>
// // {
// //     const{EmpId,
// //         Name
// //     } = req.body;

// //     const employee = Employee.create({
// //         EmpId:EmpId,
// //         Name:Name
// //     });

// //     await employee.save();

// //     return res.json(employee);
// // })



// // router.get('/api/employeeData',async (req,res)=>
// // {
// //     // const{EmpId,
// //     //     Name
// //     // } = req.body;

// //     // const employee = Employee.create({
// //     //     EmpId:EmpId,
// //     //     Name:Name
// //     // });

// //     const employee = await createQueryBuilder(
// //         'Employee'
// //     ).select('employee.EmpId')
// //     .addSelect('employee.Name')
// //     .addSelect('employee.created_at')
// //     .addSelect('employee.updated_at')
// //     .from(Employee,'employee').getMany();

// //     return res.json(employee);
// // })