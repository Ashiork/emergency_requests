<script setup>
import { ref } from 'vue'
const screen = ref('list')
const items = ref([
  { id: 1, number: 'AVR-2026-0001', title: 'Прорыв на теплосети', siteId: 3, status: 'New' },
  { id: 2, number: 'AVR-2026-0002', title: 'Нет ГВС', siteId: 1, status: 'InProgress' }
])
</script>

<template>
  <div class="app-container">
    <header>
      <h1>Аварийные заявки</h1>
      <nav>
        <button type="button" @click="screen = 'list'">Список</button>
        <button type="button" @click="screen = 'new'">Создать</button>
        <button type="button" @click="screen = 'login'">Вход</button>
      </nav>
    </header>

    <main v-if="screen === 'list'">
      <h2>Список заявок</h2>
      <table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th>Номер</th>
            <th>Тема</th>
            <th>Объект сети</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.number }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.siteId }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </main>

    <main v-else-if="screen === 'new'">
      <h2>Создать заявку</h2>
      <form @submit.prevent>
        <div class="form-group">
          <label for="title">Тема</label>
          <input id="title" name="title" type="text" autofocus />
        </div>
        
        <div class="form-group">
          <label for="siteId">Объект сети (ID)</label>
          <input id="siteId" name="siteId" type="number" />
        </div>

        <div class="form-group">
          <label for="description">Описание</label>
          <textarea id="description" name="description"></textarea>
        </div>

        <button type="submit">Создать</button>
      </form>
    </main>

    <main v-else-if="screen === 'login'">
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
  </div>
</template>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  font-family: sans-serif;
}
header {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ccc;
}
nav button {
  margin-right: 10px;
  padding: 5px 15px;
  cursor: pointer;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.form-group input, .form-group textarea {
  margin-top: 5px;
  padding: 8px;
  width: 100%;
  max-width: 400px;
}
</style>