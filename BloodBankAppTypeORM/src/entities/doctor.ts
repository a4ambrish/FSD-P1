import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { BloodDonation } from "./blood_donation";
import { Donor } from "./donor";

@Entity('doctor')
export class Doctor
{
    
    @PrimaryColumn()
    id:number;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    // @OneToMany(() => Donor, donor => donor.id)
    // donor: Donor[];
}