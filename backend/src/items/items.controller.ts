import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.update(id, createItemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
