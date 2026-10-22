import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './model/book.model.js';
import { BookService } from './book.service.js';
import { CreateBookInput } from './dto/create-book.input.js';
import { UpdateBookInput } from './dto/update-book.input.js';

@Resolver(() => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService) { }

    @Query(() => [Book])
    getAllBooks() {
        return this.bookService.findAll();
    }


    @Query(() => Book)
    getOneBook(@Args(('id')) id: string) {
        return this.bookService.findOne(id);
    }


    @Mutation(() => Book)
    createBook(@Args('input') input: CreateBookInput) {
        return this.bookService.create(input)
    }

    @Mutation(() => Book)
    updateBook(@Args('input') input: UpdateBookInput) {
        return this.bookService.update(input)
    }

    @Mutation(() => Book)
    deleteBook(@Args('id') id: string) {
        return this.bookService.remove(id)
    }
}
