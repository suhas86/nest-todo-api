import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // type of database
      database: 'todo.sqlite', // database name
      entities: [], // We will fill this later
      synchronize: true, // Will create database on launch
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
