/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Evento } from "./Evento";
import { EventoCountArgs } from "./EventoCountArgs";
import { EventoFindManyArgs } from "./EventoFindManyArgs";
import { EventoFindUniqueArgs } from "./EventoFindUniqueArgs";
import { CreateEventoArgs } from "./CreateEventoArgs";
import { UpdateEventoArgs } from "./UpdateEventoArgs";
import { DeleteEventoArgs } from "./DeleteEventoArgs";
import { EventoService } from "../evento.service";
@graphql.Resolver(() => Evento)
export class EventoResolverBase {
  constructor(protected readonly service: EventoService) {}

  async _eventosMeta(
    @graphql.Args() args: EventoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Evento])
  async eventos(@graphql.Args() args: EventoFindManyArgs): Promise<Evento[]> {
    return this.service.eventos(args);
  }

  @graphql.Query(() => Evento, { nullable: true })
  async evento(
    @graphql.Args() args: EventoFindUniqueArgs
  ): Promise<Evento | null> {
    const result = await this.service.evento(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Evento)
  async createEvento(@graphql.Args() args: CreateEventoArgs): Promise<Evento> {
    return await this.service.createEvento({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Evento)
  async updateEvento(
    @graphql.Args() args: UpdateEventoArgs
  ): Promise<Evento | null> {
    try {
      return await this.service.updateEvento({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Evento)
  async deleteEvento(
    @graphql.Args() args: DeleteEventoArgs
  ): Promise<Evento | null> {
    try {
      return await this.service.deleteEvento(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
