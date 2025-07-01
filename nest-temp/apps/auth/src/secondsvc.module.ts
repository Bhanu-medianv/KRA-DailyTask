import { Module } from '@nestjs/common';
import { SecondsvcController } from './secondsvc.controller';
import { AuthService } from './secondsvc.service';
import { JwtModule } from '@nestjs/jwt';
// import { User } from 'apps/firstsvc/src/Entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
// import { Auth } from './Entities/user.entity';

@Module({
  imports: [JwtModule.register({
      global: true,
      secret: "bhanu",
      signOptions: { expiresIn: '300s' },
    }),TypeOrmModule.forRoot({
        type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '12345',
          database: 'user',
          entities: [User],
          synchronize: true,
        }
      ),TypeOrmModule.forFeature([User])],
  controllers: [SecondsvcController],
  providers: [AuthService],
  exports:[AuthService]
})
export class SecondsvcModule {}
