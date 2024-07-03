import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './interfaces/item.interface.js';
import { CreateItemDto } from './dto/create-item.dto.js';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findById(id).exec();
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async update(id: string, createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, createItemDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id).exec();
  }
}
