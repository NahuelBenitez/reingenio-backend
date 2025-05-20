import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ProvincesModule } from '../provinces/provinces.module';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]), ProvincesModule],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}