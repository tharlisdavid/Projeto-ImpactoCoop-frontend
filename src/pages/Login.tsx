import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      setError("Email ou senha inválidos.");
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="src/assets/InternationalCooperation.gif" // Substitua pelo caminho da sua imagem
          alt="Login"
          sx={{
            maxWidth: "400px",
            width: "100%",
            height: "auto",
            display: { xs: "none", md: "block" }, // Oculta em telas pequenas
          }}
        />
        {/* Formulário */}
        <Box
          sx={{
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{marginBottom:'20px', fontWeight: 'Bold', fontSize: '44px'}}>
            Bem Vindo
          </Typography>
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{
              mt: 2,
              backgroundColor: "#219A52",
              borderRadius: "20px",
              height: "6vh",
              color: "#fff",
              transition: "background 0.3s ease-in-out", // Adiciona transição
              "&:hover": {
                background:
                  "linear-gradient(45deg,rgb(19, 129, 63),rgb(99, 194, 102))",
              },
            }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
