import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BookModule } from './Book/book.module';
import { join } from 'path';


@Module({
  imports: [
    GraphQLModule.forRoot(
      {
        driver: ApolloDriver,
        playground :true,
        autoSchemaFile:join(process.cwd() , "src/schema.graphql"),
        definitions:{
          path:join(process.cwd() , "src/graphqlp.ts")
        }
      }
    ),BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}