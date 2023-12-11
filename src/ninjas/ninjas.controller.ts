import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { query } from 'express';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  findAll() {
    return this.ninjasService.findAll();
  }
  //-----   my finder
  @Get('specific')
  findSpecific(@Query('ninjaType') ninjaType: string) {
    return this.ninjasService.findSpecific(ninjaType);
  }
  //-----   my finder

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ninjasService.findOne(+id);
  }

  @Post()
  create(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.create(createNinjaDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.update(+id, updateNinjaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ninjasService.remove(+id);
  }
}
