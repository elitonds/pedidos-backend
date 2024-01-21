import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { Fornecedor, Prisma } from '@prisma/client';

@Controller('fornecedor')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Get()
  async findAll(): Promise<Fornecedor[]> {
    return this.fornecedorService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fornecedorService.findOne({ id });
  }

  @Post()
  create(@Body() createFornecedorDto: Prisma.FornecedorCreateInput) {
    return this.fornecedorService.create(createFornecedorDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFornecedorDto: Prisma.FornecedorUpdateInput,
  ) {
    return this.fornecedorService.update({
      where: { id },
      data: updateFornecedorDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fornecedorService.remove({ id });
  }
}
