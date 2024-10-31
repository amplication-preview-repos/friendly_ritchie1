/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProdutoService } from "../produto.service";
import { ProdutoCreateInput } from "./ProdutoCreateInput";
import { Produto } from "./Produto";
import { ProdutoFindManyArgs } from "./ProdutoFindManyArgs";
import { ProdutoWhereUniqueInput } from "./ProdutoWhereUniqueInput";
import { ProdutoUpdateInput } from "./ProdutoUpdateInput";
import { PedidoFindManyArgs } from "../../pedido/base/PedidoFindManyArgs";
import { Pedido } from "../../pedido/base/Pedido";
import { PedidoWhereUniqueInput } from "../../pedido/base/PedidoWhereUniqueInput";

export class ProdutoControllerBase {
  constructor(protected readonly service: ProdutoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Produto })
  async createProduto(
    @common.Body() data: ProdutoCreateInput
  ): Promise<Produto> {
    return await this.service.createProduto({
      data: data,
      select: {
        codigoProduto: true,
        createdAt: true,
        id: true,
        localizacao: true,
        nomeProduto: true,
        quantidadeDisponivel: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Produto] })
  @ApiNestedQuery(ProdutoFindManyArgs)
  async produtos(@common.Req() request: Request): Promise<Produto[]> {
    const args = plainToClass(ProdutoFindManyArgs, request.query);
    return this.service.produtos({
      ...args,
      select: {
        codigoProduto: true,
        createdAt: true,
        id: true,
        localizacao: true,
        nomeProduto: true,
        quantidadeDisponivel: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Produto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async produto(
    @common.Param() params: ProdutoWhereUniqueInput
  ): Promise<Produto | null> {
    const result = await this.service.produto({
      where: params,
      select: {
        codigoProduto: true,
        createdAt: true,
        id: true,
        localizacao: true,
        nomeProduto: true,
        quantidadeDisponivel: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Produto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProduto(
    @common.Param() params: ProdutoWhereUniqueInput,
    @common.Body() data: ProdutoUpdateInput
  ): Promise<Produto | null> {
    try {
      return await this.service.updateProduto({
        where: params,
        data: data,
        select: {
          codigoProduto: true,
          createdAt: true,
          id: true,
          localizacao: true,
          nomeProduto: true,
          quantidadeDisponivel: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Produto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProduto(
    @common.Param() params: ProdutoWhereUniqueInput
  ): Promise<Produto | null> {
    try {
      return await this.service.deleteProduto({
        where: params,
        select: {
          codigoProduto: true,
          createdAt: true,
          id: true,
          localizacao: true,
          nomeProduto: true,
          quantidadeDisponivel: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/pedidos")
  @ApiNestedQuery(PedidoFindManyArgs)
  async findPedidos(
    @common.Req() request: Request,
    @common.Param() params: ProdutoWhereUniqueInput
  ): Promise<Pedido[]> {
    const query = plainToClass(PedidoFindManyArgs, request.query);
    const results = await this.service.findPedidos(params.id, {
      ...query,
      select: {
        createdAt: true,
        dataPedido: true,
        id: true,

        produto: {
          select: {
            id: true,
          },
        },

        statusPedido: true,
        tipoPedido: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/pedidos")
  async connectPedidos(
    @common.Param() params: ProdutoWhereUniqueInput,
    @common.Body() body: PedidoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pedidos: {
        connect: body,
      },
    };
    await this.service.updateProduto({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/pedidos")
  async updatePedidos(
    @common.Param() params: ProdutoWhereUniqueInput,
    @common.Body() body: PedidoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pedidos: {
        set: body,
      },
    };
    await this.service.updateProduto({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/pedidos")
  async disconnectPedidos(
    @common.Param() params: ProdutoWhereUniqueInput,
    @common.Body() body: PedidoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pedidos: {
        disconnect: body,
      },
    };
    await this.service.updateProduto({
      where: params,
      data,
      select: { id: true },
    });
  }
}
