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
import { Atividade } from "./Atividade";
import { AtividadeCountArgs } from "./AtividadeCountArgs";
import { AtividadeFindManyArgs } from "./AtividadeFindManyArgs";
import { AtividadeFindUniqueArgs } from "./AtividadeFindUniqueArgs";
import { CreateAtividadeArgs } from "./CreateAtividadeArgs";
import { UpdateAtividadeArgs } from "./UpdateAtividadeArgs";
import { DeleteAtividadeArgs } from "./DeleteAtividadeArgs";
import { AtividadeService } from "../atividade.service";
@graphql.Resolver(() => Atividade)
export class AtividadeResolverBase {
  constructor(protected readonly service: AtividadeService) {}

  async _atividadesMeta(
    @graphql.Args() args: AtividadeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Atividade])
  async atividades(
    @graphql.Args() args: AtividadeFindManyArgs
  ): Promise<Atividade[]> {
    return this.service.atividades(args);
  }

  @graphql.Query(() => Atividade, { nullable: true })
  async atividade(
    @graphql.Args() args: AtividadeFindUniqueArgs
  ): Promise<Atividade | null> {
    const result = await this.service.atividade(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Atividade)
  async createAtividade(
    @graphql.Args() args: CreateAtividadeArgs
  ): Promise<Atividade> {
    return await this.service.createAtividade({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Atividade)
  async updateAtividade(
    @graphql.Args() args: UpdateAtividadeArgs
  ): Promise<Atividade | null> {
    try {
      return await this.service.updateAtividade({
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

  @graphql.Mutation(() => Atividade)
  async deleteAtividade(
    @graphql.Args() args: DeleteAtividadeArgs
  ): Promise<Atividade | null> {
    try {
      return await this.service.deleteAtividade(args);
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
