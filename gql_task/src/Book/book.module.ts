import { Module } from '@nestjs/common';
import { Bookresolver } from './book.resolver';

@Module({
    providers:[Bookresolver]
})
export class BookModule {}
