import { Module } from "@nestjs/common";
import { EventoModuleBase } from "./base/evento.module.base";
import { EventoService } from "./evento.service";
import { EventoController } from "./evento.controller";
import { EventoResolver } from "./evento.resolver";

@Module({
  imports: [EventoModuleBase],
  controllers: [EventoController],
  providers: [EventoService, EventoResolver],
  exports: [EventoService],
})
export class EventoModule {}
