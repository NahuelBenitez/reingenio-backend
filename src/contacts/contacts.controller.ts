import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo contacto' })
  @ApiResponse({ status: 201, description: 'Contacto creado', type: Contact })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los contactos' })
  @ApiResponse({ status: 200, description: 'Lista de contactos', type: [Contact] })
  findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un contacto por ID' })
  @ApiParam({ name: 'id', description: 'ID del contacto' })
  @ApiResponse({ status: 200, description: 'Contacto encontrado', type: Contact })
  @ApiResponse({ status: 404, description: 'Contacto no encontrado' })
  findOne(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un contacto' })
  @ApiParam({ name: 'id', description: 'ID del contacto a actualizar' })
  @ApiResponse({ status: 200, description: 'Contacto actualizado', type: Contact })
  @ApiResponse({ status: 404, description: 'Contacto no encontrado' })
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto): Promise<Contact> {
    return this.contactsService.update(+id, updateContactDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un contacto' })
  @ApiParam({ name: 'id', description: 'ID del contacto a eliminar' })
  @ApiResponse({ status: 200, description: 'Contacto eliminado' })
  @ApiResponse({ status: 404, description: 'Contacto no encontrado' })
  remove(@Param('id') id: string): Promise<void> {
    return this.contactsService.remove(+id);
  }
}