import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProdutoServiceBase } from "./base/produto.service.base";

@Injectable()
export class ProdutoService extends ProdutoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
