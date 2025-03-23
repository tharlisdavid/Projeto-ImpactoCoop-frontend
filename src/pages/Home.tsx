import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { getSocialActions } from "../services/socialActionsService";

const Home = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [socialActions, setSocialActions] = useState<any[]>([]);


  useEffect(() => {
    const fetchSocialActions = async () => {
      try {
        const response = await getSocialActions();
        setSocialActions(response.data);
      } catch (error) {
        console.error("Erro ao buscar ações sociais", error);
      }
    };
    fetchSocialActions();
  }, []);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#2D6A4F" }}> {/* Verde escuro cooperativismo */}
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ImpactoCoop
          </Typography>
          <Button color="inherit" onClick={signOut} sx={{ backgroundColor: "#D88C3A", color: "#fff" }}> {/* Laranja cooperativismo */}
            Sair
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#2D6A4F", color: "#fff" }}
              onClick={() => navigate("/users")}
            >
              Gerenciar Usuários
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#D88C3A", color: "#fff" }}
              onClick={() => navigate("/social-actions")}
            >
              Gerenciar Ações Sociais
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
          Ações Sociais Recentes
        </Typography>

        <Grid container spacing={3}>
        {Array.isArray(socialActions) && socialActions.length > 0 ? (
            socialActions.map((action) => (
              <Grid item xs={12} sm={6} md={4} key={action.id}>
                <Card sx={{ backgroundColor: "#F1F3F4", color: "#333" }}>
                  <CardContent>
                    <Typography variant="h6">{action.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {action.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigate(`/social-actions/${action.id}`)}>
                      Ver Detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" sx={{ textAlign: "center", width: "100%" }}>
              Nenhuma ação social cadastrada.
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
