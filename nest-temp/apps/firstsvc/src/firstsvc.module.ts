import { Module } from '@nestjs/common';
import { FirstsvcController } from './firstsvc.controller';
import { FirstsvcService } from './firstsvc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
import { APP_GUARD } from '@nestjs/core';
import {  RolesGuard } from '@app/libs';
import { JwtModule } from '@nestjs/jwt';
// import { RolesGuard } from 'libs/libs/common/roles.guard';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'user',
      entities: [User],
      synchronize: true,
    }
  ),TypeOrmModule.forFeature([User]),
  JwtModule.register({
        global: true,
        secret: "bhanu",
        signOptions: { expiresIn: '300s' },
      })
],
  controllers: [FirstsvcController],
  providers: [FirstsvcService,{
    provide:APP_GUARD,
    useClass:RolesGuard,
    
  }],
  exports:[]
})
export class FirstsvcModule {}
