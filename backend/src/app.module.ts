
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://vasvikaulwar01:vasvi@itemstable.dc5e3ey.mongodb.net/?retryWrites=true&w=majority&appName=itemstable', {
      serverSelectionTimeoutMS: 5000, // Increase timeout to 5 seconds
    }),
    ItemsModule,
  ],
})
export class AppModule {}

