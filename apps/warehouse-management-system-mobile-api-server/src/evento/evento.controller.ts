import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventoService } from "./evento.service";
import { EventoControllerBase } from "./base/evento.controller.base";

@swagger.ApiTags("eventos")
@common.Controller("eventos")
export class EventoController extends EventoControllerBase {
  constructor(protected readonly service: EventoService) {
    super(service);
  }
}
