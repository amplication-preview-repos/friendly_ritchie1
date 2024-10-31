import { Pedido } from "../pedido/Pedido";

export type Produto = {
  codigoProduto: string | null;
  createdAt: Date;
  id: string;
  localizacao: string | null;
  nomeProduto: string | null;
  pedidos?: Array<Pedido>;
  quantidadeDisponivel: number | null;
  updatedAt: Date;
};
