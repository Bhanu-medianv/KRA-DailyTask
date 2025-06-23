import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'book_db',
      entities: [__dirname + '/**/*.entity{.ts , .js}'],
      synchronize:true
  }),
  GraphQLModule.forRoot(
      {
        driver: ApolloDriver,
        playground :true,
        autoSchemaFile:join(process.cwd() , "src/schema.graphql"),
        definitions:{
          path:join(process.cwd() , "src/graphqlp.ts")
        }
      }
    ),AppResolver
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
