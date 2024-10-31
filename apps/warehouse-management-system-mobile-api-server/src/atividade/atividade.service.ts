import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AtividadeServiceBase } from "./base/atividade.service.base";

@Injectable()
export class AtividadeService extends AtividadeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
