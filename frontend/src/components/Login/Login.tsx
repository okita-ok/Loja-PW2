import api from "@/utils/api";
import { Box, TextField, Button, Typography } from "@mui/material";
import React, { FormEvent, useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/provider/AuthProvider";

function Login() {
  const { auth, setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const credentials = { email, senha };
    api
      .post("/login", credentials, { withCredentials: true })
      .then((data) => {
        setError("");
        setAuth({ nome: data.data.nome, tipoUsuario: data.data.tipoUsuario });
        console.log(data);
        router.push("/produto");
      })
      .catch((err) => {
        if (err.response.status === 401)
          setError("Email e/ou Senha inválidos.");
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Login de Usuário</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            label="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ color: "red" }}>
            {error}
          </Typography>
        </Box>
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default Login;
