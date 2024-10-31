import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IncidenteService } from "./incidente.service";
import { IncidenteControllerBase } from "./base/incidente.controller.base";

@swagger.ApiTags("incidentes")
@common.Controller("incidentes")
export class IncidenteController extends IncidenteControllerBase {
  constructor(protected readonly service: IncidenteService) {
    super(service);
  }
}
