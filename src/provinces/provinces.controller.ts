import { Controller, Get, Param } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { Province } from './entities/province.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('provinces')
@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las provincias' })
  @ApiResponse({ status: 200, description: 'Lista de provincias', type: [Province] })
  findAll(): Promise<Province[]> {
    return this.provincesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una provincia por ID' })
  @ApiResponse({ status: 200, description: 'Provincia encontrada', type: Province })
  @ApiResponse({ status: 404, description: 'Provincia no encontrada' })
  findOne(@Param('id') id: string): Promise<Province> {
    return this.provincesService.findOne(+id);
  }
}