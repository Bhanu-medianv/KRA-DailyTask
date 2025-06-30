import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateCommand } from './commands/command.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEventHandler } from './events/event.handler';
import { User } from './entity';
import { notification } from './commands/notification.impl';
import { UserSaga } from './sagas/sagas';
import { CreateHandler } from './commands/notification.handler';

@Module({
  imports: [CqrsModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [AppService,CreateCommand,userEventHandler,CreateHandler,UserSaga],
})
export class AppModule {}
