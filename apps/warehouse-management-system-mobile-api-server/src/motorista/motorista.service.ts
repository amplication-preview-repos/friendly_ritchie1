import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MotoristaServiceBase } from "./base/motorista.service.base";

@Injectable()
export class MotoristaService extends MotoristaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
