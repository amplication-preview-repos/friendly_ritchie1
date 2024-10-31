import { Module } from "@nestjs/common";
import { ProdutoModuleBase } from "./base/produto.module.base";
import { ProdutoService } from "./produto.service";
import { ProdutoController } from "./produto.controller";
import { ProdutoResolver } from "./produto.resolver";

@Module({
  imports: [ProdutoModuleBase],
  controllers: [ProdutoController],
  providers: [ProdutoService, ProdutoResolver],
  exports: [ProdutoService],
})
export class ProdutoModule {}
