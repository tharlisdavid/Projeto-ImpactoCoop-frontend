import Form from "../../components/Form";
import BasePageLayout from "../../components/BasePageLayout";

const SocialActionCreate = () => {
  return (
    <BasePageLayout pageTitle="Criar Ação Social" labelTitle="Criar Ação Social">
      <Form type="social-action" />
    </BasePageLayout>
  );
};

export default SocialActionCreate;
