import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Province } from '../../provinces/entities/province.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @ManyToOne(() => Province)
  @JoinColumn({ name: 'provinceId' })
  province: Province;

  @Column()
  provinceId: number;

  @Column({ length: 20 })
  phone: string;
}