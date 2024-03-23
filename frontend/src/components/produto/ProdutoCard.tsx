import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ButtonGroup from "@mui/material/ButtonGroup";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";

import { Produto } from "@/types/produto";
import api from "@/utils/api";
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ProdutoCardProps {
  id: string;
}

export default function ProdutoCard({ id }: ProdutoCardProps) {
  const router = useRouter();
  const [quantidade, setQuantidade] = useState(1);
  const [produto, setProduto] = useState<Produto>();
  const precoTotal = produto ? quantidade * produto.preco : 0;

  const handleDelete = (e: any) =>{
    e.preventDefault();
    api.delete(`/produto.${id}`)
    .then(()=>{
      router.push("/produto");
    })
  }

  useEffect(() => {
    api.get(`/produto/${id}`).then((data) => {
      setProduto(data.data);
    });
  }, [id]);

  const increaseQtd = () => {
    if (produto && quantidade < produto.estoque) setQuantidade(quantidade + 1);
  };
  const decreaseQtd = () => {
    if (quantidade >= 1) setQuantidade(quantidade - 1);
  };

  if (!produto) return <>Carregando...........</>;

  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        ></div>
        <Typography gutterBottom variant="h4" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: {produto.preco}
          <br />
          Estoque: {produto.estoque}
          <br />
          Quantidade: {quantidade}
          <br />
          Preço Total: {precoTotal}
          <br />
        </Typography>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button onClick={increaseQtd} variant="contained" size="small">
            <AddIcon />
          </Button>
          <Button onClick={decreaseQtd} variant="contained" size="small">
            <RemoveIcon />
          </Button>
        </ButtonGroup>
      </CardContent>
      <CardActions>
        <IconButton component={Link} href={`/produto/update/${id}`}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
