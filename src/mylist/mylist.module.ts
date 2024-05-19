import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyListService } from './mylist.service';
import { MyListController } from './mylist.controller';
import { MyListSchema } from '../schemas/mylist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'MyList', schema: MyListSchema }]),
  ],
  providers: [MyListService],
  controllers: [MyListController],
})
export class MyListModule {}
