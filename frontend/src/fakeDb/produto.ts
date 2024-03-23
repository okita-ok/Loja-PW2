import { Produto } from "@/types/produto";

const produtos: Produto[] = [
  { id: 1, nome: "Computador", preco: 5000, estoque: 10 },
  { id: 2, nome: "celular", preco: 4000, estoque: 15 },
  { id: 3, nome: "tablet", preco: 6000, estoque: 18 },
  { id: 4, nome: "calculardora", preco: 60, estoque: 45 },
];

export const getOneProduto = (id: number): Produto | undefined=> {
    return produtos.find((prod)=> prod.id === id);
}

export const getAllProdutos = () => produtos;
