import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventoServiceBase } from "./base/evento.service.base";

@Injectable()
export class EventoService extends EventoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
