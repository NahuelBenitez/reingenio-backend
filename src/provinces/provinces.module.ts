import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from './entities/province.entity';
import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';
import { ProvincesSeederService } from './provinces-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Province])],
  controllers: [ProvincesController],
  providers: [ProvincesService, ProvincesSeederService],
  exports: [ProvincesService],
})
export class ProvincesModule {}