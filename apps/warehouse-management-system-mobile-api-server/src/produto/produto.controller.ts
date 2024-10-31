import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProdutoService } from "./produto.service";
import { ProdutoControllerBase } from "./base/produto.controller.base";

@swagger.ApiTags("produtos")
@common.Controller("produtos")
export class ProdutoController extends ProdutoControllerBase {
  constructor(protected readonly service: ProdutoService) {
    super(service);
  }
}
