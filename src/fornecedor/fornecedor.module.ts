import { Module } from '@nestjs/common';
import { FornecedorController } from './fornecedor.controller';
import { FornecedorService } from './fornecedor.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FornecedorController],
  providers: [FornecedorService, PrismaService],
})
export class FornecedorModule {}
