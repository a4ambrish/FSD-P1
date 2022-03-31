import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Doctor } from "./doctor";
import { Donor } from "./donor";

@Entity('blood_donation')
export class BloodDonation
{
    
    @PrimaryColumn()
    id:number;

    @Column()
    donor_id:number;

    @Column()
    doctor_id:number;

    @Column()
    quantity:number;

    @OneToOne(() => Donor)
    @JoinColumn({name:'id'})
    donor: Donor;

    @OneToOne(() => Doctor)
    @JoinColumn({name:'id'})
    doctor: Doctor;

}