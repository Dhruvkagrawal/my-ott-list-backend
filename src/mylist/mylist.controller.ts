import {
  Controller,
  Post,
  Delete,
  Get,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { MyListService } from './mylist.service';

@Controller('mylist')
export class MyListController {
  constructor(private readonly myListService: MyListService) {}

  @Post('add')
  async addToList(
    @Body('userId') userId: string,
    @Body('contentId') contentId: string,
    @Body('contentType') contentType: 'Movie' | 'TVShow',
  ) {
    return this.myListService.addToList(userId, contentId, contentType);
  }

  @Delete('remove/:userId/:contentId')
  async removeFromList(
    @Param('userId') userId: string,
    @Param('contentId') contentId: string,
  ) {
    return this.myListService.removeFromList(userId, contentId);
  }

  @Get('list')
  async listItems(
    @Query('userId') userId: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.myListService.listItems(userId, page, limit);
  }
}
