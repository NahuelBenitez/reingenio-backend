import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Province } from './entities/province.entity';

@Injectable()
export class ProvincesSeederService implements OnModuleInit {
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  async onModuleInit() {
    await this.seedProvinces();
  }

  private async seedProvinces() {
    const count = await this.provinceRepository.count();
    if (count === 0) {
      const provinces = [
        { name: 'Buenos Aires' },
        { name: 'Catamarca' },
        { name: 'Chaco' },
        { name: 'Chubut' },
        { name: 'Córdoba' },
        { name: 'Corrientes' },
        { name: 'Entre Ríos' },
        { name: 'Formosa' },
        { name: 'Jujuy' },
        { name: 'La Pampa' },
        { name: 'La Rioja' },
        { name: 'Mendoza' },
        { name: 'Misiones' },
        { name: 'Neuquén' },
        { name: 'Río Negro' },
        { name: 'Salta' },
        { name: 'San Juan' },
        { name: 'San Luis' },
        { name: 'Santa Cruz' },
        { name: 'Santa Fe' },
        { name: 'Santiago del Estero' },
        { name: 'Tierra del Fuego' },
        { name: 'Tucumán' },
      ];

      await this.provinceRepository.save(provinces);
      console.log('Provincias argentinas cargadas en la base de datos');
    }
  }
}