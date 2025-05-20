import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Province } from './entities/province.entity';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Province)
    private provinceRepository: Repository<Province>,
  ) {}

  findAll(): Promise<Province[]> {
    return this.provinceRepository.find();
  }

  async findOne(id: number): Promise<Province> {
  const province = await this.provinceRepository.findOne({ where: { id } });
  if (!province) {
    throw new NotFoundException(`Province with ID ${id} not found`);
  }
  return province;
}
}