import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { BooksModule } from './books/books.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({}),
    HelloModule,
    BooksModule,
    CommonModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
