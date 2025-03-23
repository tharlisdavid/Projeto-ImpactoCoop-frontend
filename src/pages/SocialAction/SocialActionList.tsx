import { Stack, IconButton } from "@mui/material";
import { GridRenderCellParams, GridColDef } from "@mui/x-data-grid";
import MyDataGrid from "../../components/MyDataGrid";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BasePageLayout from "../../components/BasePageLayout";
import { getSocialActions, deleteSocialAction } from "../../services/socialActionsService";

const SocialActionList = () => {
  const navigate = useNavigate();
  const [actions, setActions] = useState([]);

  useEffect(() => {
    loadActions();
  }, []);

  const loadActions = async () => {
    const data = await getSocialActions();
    setActions(data);
  };

  function onEdit(params: GridRenderCellParams): void {
    if (!params.row.id) return;
    navigate(`/social-actions/${params.row.id}`);
  }

  async function onDelete(params: GridRenderCellParams) {
    if (!params.row.id) return;
    await deleteSocialAction(params.row.id);
    loadActions();
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Título", width: 200 },
    { field: "description", headerName: "Descrição", width: 300 },
    {
      field: "actions",
      headerName: "Ações",
      minWidth: 150,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Stack direction="row" spacing={2}>
          <IconButton color="info" size="small" onClick={() => onEdit(params)}>
            <Edit fontSize="inherit" />
          </IconButton>
          <IconButton color="error" size="small" onClick={() => onDelete(params)}>
            <Delete fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <BasePageLayout pageTitle="Listar Ações Sociais" labelTitle="Listar Ações Sociais">
      <MyDataGrid columns={columns} rows={actions} />
    </BasePageLayout>
  );
};

export default SocialActionList;
