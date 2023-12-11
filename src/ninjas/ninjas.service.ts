import { Injectable, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  create(createNinjaDto: CreateNinjaDto) {   
    return `This action adds a ${createNinjaDto.name} to the army`;
  }

  findAll() {
    return `This action returns all ninjas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ninja`;
  }
  // ------------
  findSpecific(ninjaType: string) {
    return `This action returns a whao super ${ninjaType} ninja`;
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto) {
    return `This action updates a #${updateNinjaDto.name} ${id} ninja`;
  }

  remove(id: number) {
    return `This action removes a #${id} ninja`;
  }
}
