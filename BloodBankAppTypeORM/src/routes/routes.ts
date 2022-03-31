import { Router } from 'express';

//import  AuthController from '../controllers/AuthController'
import Authorization from '../../authorization';
import BloodDonationController from '../controllers/BloodDonationController';


const router = Router();

//router.post('/login',AuthController.login)

//router.get('/data',Authorization.authenticateToken,MedCenterCaseFilingController.Data)

router.get('/data',BloodDonationController.Data)

export default router