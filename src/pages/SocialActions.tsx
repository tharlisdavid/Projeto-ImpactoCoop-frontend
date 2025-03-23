import { useEffect, useState } from "react";
import { getSocialActions, createSocialAction, updateSocialAction, deleteSocialAction } from "../services/socialActionsService";
import { Button, Container, TextField, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const SocialActions = () => {
  const [actions, setActions] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadActions();
  }, []);

  const loadActions = async () => {
    const data = await getSocialActions();
    setActions(data);
  };

  const handleSubmit = async () => {
    if (editingId) {
      await updateSocialAction(editingId, title, description);
      setEditingId(null);
    } else {
      await createSocialAction(title, description);
    }
    setTitle("");
    setDescription("");
    loadActions();
  };

  const handleEdit = (action: any) => {
    setTitle(action.title);
    setDescription(action.description);
    setEditingId(action.id);
  };

  const handleDelete = async (id: string) => {
    await deleteSocialAction(id);
    loadActions();
  };

  return (
    <Container>
      <Typography variant="h4">Gerenciar Ações Sociais</Typography>
      <TextField label="Título" fullWidth margin="normal" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField label="Descrição" fullWidth margin="normal" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        {editingId ? "Atualizar Ação" : "Criar Ação"}
      </Button>

      <List>
        {actions.map((action: any) => (
          <ListItem key={action.id}>
            <ListItemText primary={action.title} secondary={action.description} />
            <IconButton onClick={() => handleEdit(action)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => handleDelete(action.id)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SocialActions;
