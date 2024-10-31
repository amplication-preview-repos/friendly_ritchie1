/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Produto as PrismaProduto,
  Pedido as PrismaPedido,
} from "@prisma/client";

export class ProdutoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProdutoCountArgs, "select">): Promise<number> {
    return this.prisma.produto.count(args);
  }

  async produtos(args: Prisma.ProdutoFindManyArgs): Promise<PrismaProduto[]> {
    return this.prisma.produto.findMany(args);
  }
  async produto(
    args: Prisma.ProdutoFindUniqueArgs
  ): Promise<PrismaProduto | null> {
    return this.prisma.produto.findUnique(args);
  }
  async createProduto(args: Prisma.ProdutoCreateArgs): Promise<PrismaProduto> {
    return this.prisma.produto.create(args);
  }
  async updateProduto(args: Prisma.ProdutoUpdateArgs): Promise<PrismaProduto> {
    return this.prisma.produto.update(args);
  }
  async deleteProduto(args: Prisma.ProdutoDeleteArgs): Promise<PrismaProduto> {
    return this.prisma.produto.delete(args);
  }

  async findPedidos(
    parentId: string,
    args: Prisma.PedidoFindManyArgs
  ): Promise<PrismaPedido[]> {
    return this.prisma.produto
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pedidos(args);
  }
}
