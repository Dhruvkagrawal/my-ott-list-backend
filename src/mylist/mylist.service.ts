import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MyList } from '../schemas/mylist.schema';

@Injectable()
export class MyListService {
  constructor(
    @InjectModel('MyList') private readonly myListModel: Model<MyList>,
  ) {}

  async addToList(
    userId: string,
    contentId: string,
    contentType: 'Movie' | 'TVShow',
  ) {
    let list = await this.myListModel.findOne({ userId });
    if (!list) {
      list = new this.myListModel({ userId, items: [] });
    }
    if (!list.items.find((item) => item.contentId === contentId)) {
      list.items.push({ contentId, contentType });
    }
    return list.save();
  }

  async removeFromList(userId: string, contentId: string) {
    const list = await this.myListModel.findOne({ userId });
    if (list) {
      list.items = list.items.filter((item) => item.contentId !== contentId);
      return list.save();
    }
  }

  async listItems(userId: string, page: number = 1, limit: number = 10) {
    const list = await this.myListModel.findOne({ userId });
    if (list) {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      return list.items.slice(startIndex, endIndex);
    }
    return [];
  }
}
