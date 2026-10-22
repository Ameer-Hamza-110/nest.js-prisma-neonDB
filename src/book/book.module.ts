import { Module } from '@nestjs/common';
import { BookService } from './book.service.js';
import { BookResolver } from './book.resolver.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  providers: [BookService, BookResolver],
  imports: [PrismaModule]
})
export class BookModule { }
