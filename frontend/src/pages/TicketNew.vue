<script setup>
</script>

<template>
  <main>
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
</template>

<style scoped>
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