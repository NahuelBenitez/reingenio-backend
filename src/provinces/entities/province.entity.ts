import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Contact } from '../../contacts/entities/contact.entity';

@Entity()
export class Province {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => Contact, contact => contact.province)
  contacts: Contact[];
}