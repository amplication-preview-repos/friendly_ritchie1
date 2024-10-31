import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MotoristaService } from "./motorista.service";
import { MotoristaControllerBase } from "./base/motorista.controller.base";

@swagger.ApiTags("motoristas")
@common.Controller("motoristas")
export class MotoristaController extends MotoristaControllerBase {
  constructor(protected readonly service: MotoristaService) {
    super(service);
  }
}
