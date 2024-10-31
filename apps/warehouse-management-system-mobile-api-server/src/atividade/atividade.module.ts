import { Module } from "@nestjs/common";
import { AtividadeModuleBase } from "./base/atividade.module.base";
import { AtividadeService } from "./atividade.service";
import { AtividadeController } from "./atividade.controller";
import { AtividadeResolver } from "./atividade.resolver";

@Module({
  imports: [AtividadeModuleBase],
  controllers: [AtividadeController],
  providers: [AtividadeService, AtividadeResolver],
  exports: [AtividadeService],
})
export class AtividadeModule {}
