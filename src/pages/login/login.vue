<template>
  <q-layout view="hHh lpR fFf">
    <!-- Barra superior -->
    <q-header elevated style="background-color: #306241; min-height: 60px;">
      <q-toolbar>
        <q-toolbar-title style="text-align: center; font-size: xx-large; justify-content: center;">
          ImpactoCoop
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Corpo da página -->
    <q-page-container class="container">
      <q-card class="img-content">
        <div>
          <img src="/src/assets/icone-tela-login.svg" alt="form" id="img-tela-login">
        </div>
      </q-card>
      <q-card class="form-content">
        <div class="form-card">
          <div class="title">
            <h3>Bem Vindo</h3>
          </div>
          <q-form @submit="onLogin" style="display: flex; flex-direction: column;">
            <q-input
              v-model="email"
              label="Email"
              type="email"
              :rules="[val => val && val.length > 0 || 'Por favor insira um email']"
              class="input"
            />

            <!-- Input para a senha -->
            <q-input
              v-model="senha"
              label="Senha"
              type="password"
              :rules="[val => val && val.length > 0 || 'Por favor insira sua senha']"
              class="input"
            />

            <!-- Botão de login -->
            <div class="btn-button">
              <q-btn :loading="loading[1]" class="btn-button" @click="simulateProgress(1)" style="background-color: #306241; color: white;">
                Entrar
                <template v-slot:loading>
                  Loading...
                </template>
              </q-btn>
            </div>
          </q-form>
        </div>
      </q-card>
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

<style>
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #C0D7BC;
  height: 100vh;
  gap: 8%;
}

#img-tela-login {
  background-color: #fff;
  height: 92vh;
  width: 60vw;
}

.form-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 24vw;
  background-color: #fff;
  /* padding: 20px; */
}

.form-card .input{
  width: 100%;
}

.form-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-button {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-button .q-btn:hover {
  background-image: linear-gradient(45deg, #275956, #289c66, #073c39);
  background-size: 180%;
  transition: 0.8s;
}

.btn-button .q-btn {
  width: 100%;
}
</style>