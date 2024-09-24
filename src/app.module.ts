  import { Module } from '@nestjs/common';
  import { ConfigModule } from '@nestjs/config';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { UsersController } from './users/users.controller';
  import { UsersService } from './users/users.service';
  import { User } from './users/entities/user.entity';

  @Module({
    imports: [
      ConfigModule.forRoot({isGlobal: true,}),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [User],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([User]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
  })
  export class AppModule {}
