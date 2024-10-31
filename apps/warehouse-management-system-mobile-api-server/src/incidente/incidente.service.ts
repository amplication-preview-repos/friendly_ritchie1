import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncidenteServiceBase } from "./base/incidente.service.base";

@Injectable()
export class IncidenteService extends IncidenteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
