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
import { IncidenteWhereUniqueInput } from "./IncidenteWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IncidenteUpdateInput } from "./IncidenteUpdateInput";

@ArgsType()
class UpdateIncidenteArgs {
  @ApiProperty({
    required: true,
    type: () => IncidenteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IncidenteWhereUniqueInput)
  @Field(() => IncidenteWhereUniqueInput, { nullable: false })
  where!: IncidenteWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => IncidenteUpdateInput,
  })
  @ValidateNested()
  @Type(() => IncidenteUpdateInput)
  @Field(() => IncidenteUpdateInput, { nullable: false })
  data!: IncidenteUpdateInput;
}

export { UpdateIncidenteArgs as UpdateIncidenteArgs };
