import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ContactsModule } from './contacts/contacts.module';
import { ProvincesModule } from './provinces/provinces.module';
import { Contact } from './contacts/entities/contact.entity';
import { Province } from './provinces/entities/province.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Contact, Province],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ContactsModule,
    ProvincesModule,
  ],
})
export class AppModule {}