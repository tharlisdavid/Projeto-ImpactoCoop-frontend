import BasePageLayout from "../../components/BasePageLayout";
import Form from "../../components/Form";

const SocialActionEdit = () => {
  return (
    <BasePageLayout pageTitle="Editar Ação Social" labelTitle="Editar Ação Social">
      <Form type="social-action" />
    </BasePageLayout>
  );
};

export default SocialActionEdit;
