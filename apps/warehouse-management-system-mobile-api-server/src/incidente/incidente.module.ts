import { Module } from "@nestjs/common";
import { IncidenteModuleBase } from "./base/incidente.module.base";
import { IncidenteService } from "./incidente.service";
import { IncidenteController } from "./incidente.controller";
import { IncidenteResolver } from "./incidente.resolver";

@Module({
  imports: [IncidenteModuleBase],
  controllers: [IncidenteController],
  providers: [IncidenteService, IncidenteResolver],
  exports: [IncidenteService],
})
export class IncidenteModule {}
