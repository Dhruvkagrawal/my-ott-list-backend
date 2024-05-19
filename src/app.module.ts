import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyListModule } from './mylist/mylist.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/my-ott-platform'),
    MyListModule,
  ],
})
export class AppModule {}
