import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AtividadeService } from "./atividade.service";
import { AtividadeControllerBase } from "./base/atividade.controller.base";

@swagger.ApiTags("atividades")
@common.Controller("atividades")
export class AtividadeController extends AtividadeControllerBase {
  constructor(protected readonly service: AtividadeService) {
    super(service);
  }
}
