import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    FornecedorModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
