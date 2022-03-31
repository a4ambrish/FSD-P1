import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('donor')
export class Donor
{
    
    @PrimaryColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    dob:Date;
    
    @Column()
    date_of_reg:Date;
    
    @Column()
    blood_group:string;

    @Column()
    address:string;

    @Column()
    city:string;

    @Column()
    pincode:string;

}








