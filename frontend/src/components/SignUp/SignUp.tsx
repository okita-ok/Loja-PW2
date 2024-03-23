import React, { FormEvent, useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import api from "@/utils/api";
import { SignUpDto } from "@/types/auth";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUp() {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmeSenha, setConfirmeSenha] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [viewSenha, setViewSenha] = useState<boolean>(false);
  const [viewConfirmSenha, setViewConfirmSenha] = useState<boolean>(false);

  const onSubmit = (e: FormEvent) => {
    // e: any??
    e.preventDefault();
    if (senha !== confirmeSenha) setError("As senhas não batem");
    else {
      const credenciais: SignUpDto = {
        nome: nome!,
        email: email!,
        senha: senha!,
      };
      api.post("/signup", credenciais).then((data) => {
        router.push("/produto");
      });
    }
  };

  return (
    <>
      <h1>Criação de Conta</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Nome"
            sx={{ width: 300 }}
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Email"
            sx={{ width: 300 }}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Senha"
            required
            type={viewSenha ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setViewSenha(!viewSenha);
                    }}
                  >
                    {viewSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            label="Confirme a Senha"
            required
            sx={{ width: 300 }}
            type={viewConfirmSenha ? "text" : "password"}
            value={confirmeSenha}
            onChange={(e) => setConfirmeSenha(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setViewConfirmSenha(!viewConfirmSenha);
                    }}
                  >
                    {viewConfirmSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ color: "red" }}>
            {error}
          </Typography>
        </Box>
        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </form>
    </>
  );
}

export default SignUp;
