import { Module } from "@nestjs/common";
import { MotoristaModuleBase } from "./base/motorista.module.base";
import { MotoristaService } from "./motorista.service";
import { MotoristaController } from "./motorista.controller";
import { MotoristaResolver } from "./motorista.resolver";

@Module({
  imports: [MotoristaModuleBase],
  controllers: [MotoristaController],
  providers: [MotoristaService, MotoristaResolver],
  exports: [MotoristaService],
})
export class MotoristaModule {}
