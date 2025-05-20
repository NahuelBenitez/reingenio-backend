import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ProvincesService } from '../provinces/provinces.service';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
    private provincesService: ProvincesService,
  ) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const province = await this.provincesService.findOne(createContactDto.provinceId);
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const contact = this.contactRepository.create({
      ...createContactDto,
      province,
    });
    return this.contactRepository.save(contact);
  }

  findAll(): Promise<Contact[]> {
    return this.contactRepository.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<Contact> {
    const contact = await this.contactRepository.findOne({
      where: { id },
      relations: ['province'],
    });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }

  async update(id: number, updateContactDto: UpdateContactDto): Promise<Contact> {
    const contact = await this.findOne(id);
    
    if (updateContactDto.provinceId) {
      const province = await this.provincesService.findOne(updateContactDto.provinceId);
      if (!province) {
        throw new NotFoundException('Province not found');
      }
      contact.province = province;
    }

    Object.assign(contact, updateContactDto);
    return this.contactRepository.save(contact);
  }

  async remove(id: number): Promise<void> {
    const contact = await this.findOne(id);
    await this.contactRepository.remove(contact);
  }
}