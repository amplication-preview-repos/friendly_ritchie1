/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AtividadeWhereUniqueInput } from "./AtividadeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class AtividadeFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => AtividadeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AtividadeWhereUniqueInput)
  @Field(() => AtividadeWhereUniqueInput, { nullable: false })
  where!: AtividadeWhereUniqueInput;
}

export { AtividadeFindUniqueArgs as AtividadeFindUniqueArgs };
