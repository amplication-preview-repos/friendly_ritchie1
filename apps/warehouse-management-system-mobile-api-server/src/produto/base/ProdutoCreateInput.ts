/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { PedidoCreateNestedManyWithoutProdutosInput } from "./PedidoCreateNestedManyWithoutProdutosInput";
import { Type } from "class-transformer";

@InputType()
class ProdutoCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  codigoProduto?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  localizacao?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nomeProduto?: string | null;

  @ApiProperty({
    required: false,
    type: () => PedidoCreateNestedManyWithoutProdutosInput,
  })
  @ValidateNested()
  @Type(() => PedidoCreateNestedManyWithoutProdutosInput)
  @IsOptional()
  @Field(() => PedidoCreateNestedManyWithoutProdutosInput, {
    nullable: true,
  })
  pedidos?: PedidoCreateNestedManyWithoutProdutosInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantidadeDisponivel?: number | null;
}

export { ProdutoCreateInput as ProdutoCreateInput };