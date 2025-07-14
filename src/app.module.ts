import { Module } from '@nestjs/common';
import { StatusController } from 'modules/status/status.controller';

@Module({
  imports: [],
  controllers: [StatusController],
})
export class AppModule {}
