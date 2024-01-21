import { Injectable } from '@nestjs/common';
import { Fornecedor, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FornecedorService {
  constructor(private prisma: PrismaService) {}

  private fornecedores = [];

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FornecedorWhereUniqueInput;
    where?: Prisma.FornecedorWhereInput;
    orderBy?: Prisma.FornecedorOrderByWithRelationInput;
  }): Promise<Fornecedor[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.fornecedor.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    userWhereUniqueInput: Prisma.FornecedorWhereUniqueInput,
  ): Promise<Fornecedor | null> {
    return this.prisma.fornecedor.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async create(data: Prisma.FornecedorCreateInput) {
    this.fornecedores.push(data);
    return data;
  }

  async update(params: {
    where: Prisma.FornecedorWhereUniqueInput;
    data: Prisma.FornecedorUpdateInput;
  }): Promise<Fornecedor> {
    const { where, data } = params;
    return this.prisma.fornecedor.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.FornecedorWhereUniqueInput): Promise<Fornecedor> {
    return this.prisma.fornecedor.delete({
      where,
    });
  }
}
