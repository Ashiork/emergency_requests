<script setup>
</script>

<template>
  <main>
    <h2>Вход в систему</h2>
    <form @submit.prevent>
      <div class="form-group">
        <label for="login">Логин</label>
        <input id="login" name="login" type="text" />
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input id="password" name="password" type="password" />
      </div>

      <button type="submit">Войти</button>
    </form>
  </main>
</template>

<style scoped>
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.form-group input {
  margin-top: 5px;
  padding: 8px;
  width: 100%;
  max-width: 400px;
}
</style>