import { getAllProdutos } from "@/fakeDb/produto";

export default function Home() {
  const produtos = getAllProdutos();
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((prod) => (
          <li key={prod.id}>{prod.nome}</li>
        ))}
      </ul>
    </div>
  );
}
