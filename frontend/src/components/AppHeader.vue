<script setup>
</script>

<template>
  <header>
    <h1>Аварийные заявки</h1>
    <nav>
      <router-link to="/">Список</router-link> | 
      <router-link to="/new">Создать</router-link> | 
      <router-link to="/login">Вход</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ccc;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: blue;
}
nav a.router-link-active {
  font-weight: bold;
  color: black;
}
</style>