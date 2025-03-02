<template>
  <q-layout view="hHh lpR fFf">
    <!-- Barra superior -->
    <q-header elevated style="background-color: #145A31; min-height: 60px;">
      <q-toolbar>
        <q-toolbar-title style="text-align: center; font-size: xx-large; justify-content: center;">
          ImpactoCoop
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Corpo da página -->
    <q-page-container>
      <q-page class="flex flex-center" style="align-items: center; gap: 8rem;">

        <q-card-section>
          <div>
            <img src="/src/assets/icon.svg" alt="form" style="width: 460px;">
          </div>
        </q-card-section>

        <q-card class="q-pa-md" style="width: 480px;">
          <q-card-section>
            <div class="text-h4 text-center" style="text-align: center; font-weight: bold; color: #000; letter-spacing: 2px;">Bem Vindo</div>
          </q-card-section>
          <q-card-section>
            <q-form @submit="onLogin">
              <!-- Input para o email -->
              <q-input
                v-model="email"
                label="Email"
                type="email"
                :rules="[val => val && val.length > 0 || 'Por favor insira um email']"
                class="q-mb-md"
              />

              <!-- Input para a senha -->
              <q-input
                v-model="senha"
                label="Senha"
                type="password"
                :rules="[val => val && val.length > 0 || 'Por favor insira sua senha']"
                class="q-mb-md"
              />

              <!-- Botão de login -->
              <div class="q-pa-md q-gutter-sm">
                <q-btn :loading="loading[1]" class="btn-button" @click="simulateProgress(1)">
                  Button
                  <template v-slot:loading>
                    Loading...
                  </template>
                </q-btn>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      senha: '',
      loading: [false]
    };
  },
  methods: {
    onLogin() {
      if (this.email && this.senha) {
        console.log('Login realizado com sucesso');
      } else {
        console.log('Preencha todos os campos');
      }
    },
    simulateProgress(number) {
      // Definindo o estado de "loading"
      this.loading[number] = true;

      // Simulando um atraso
      setTimeout(() => {
        // Após 3 segundos, resetamos o estado de "loading"
        this.loading[number] = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.q-page {
  /* background-image: linear-gradient(70deg, #00642b, #03441f) ; */
  background-color: #fff;
}

.q-card {
  height: 540px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f1f1f1;
  border-radius: 25px;
  gap: 2rem;
  padding: 2rem;
}

.btn-button {
  height: 45px;
  width: 100%;
  background-color: #145A31;
  color: #fff;
  border-radius: 15px;
  align-items: center;
  transition: background 0.8s ease-in-out; /* Suaviza a transição do hover */
}

.btn-button:hover {
  background-image: linear-gradient(to left, #00C759, #145A31, #06782C); /* Corrigido: utilizando background-image */
}
</style>
