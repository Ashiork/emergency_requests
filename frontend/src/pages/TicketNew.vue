<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addItem } from '../ticketsStore.js'

const router = useRouter()

const form = ref({
  title: '',
  siteId: 0, // По умолчанию 0
  description: ''
})

const errors = ref({
  title: '',
  siteId: '',
  description: ''
})

function onCreate() {
  errors.value = { title: '', siteId: '', description: '' }
  let isValid = true

  const cleanTitle = form.value.title.trim()
  const cleanDesc = form.value.description.trim()

  if (cleanTitle.length < 5 || cleanTitle.length > 80) {
    errors.value.title = 'Тема: от 5 до 80 символов'
    isValid = false
  }

  if (!form.value.siteId || form.value.siteId <= 0) {
    errors.value.siteId = 'Укажите объект сети (ID > 0)'
    isValid = false
  }

  if (cleanDesc.length < 10 || cleanDesc.length > 500) {
    errors.value.description = 'Описание: от 10 до 500 символов'
    isValid = false
  }

  if (!isValid) return

  addItem({
    title: cleanTitle,
    siteId: form.value.siteId,
    description: cleanDesc
  })

  form.value = { title: '', siteId: 0, description: '' }

  router.push('/')
}
</script>

<template>
  <main>
    <h2>Создать заявку</h2>
    
    <form @submit.prevent="onCreate">
      
      <div class="form-group">
        <label for="title">Тема</label>
        <input id="title" v-model="form.title" type="text" autofocus />
        <span v-if="errors.title" class="error">{{ errors.title }}</span>
      </div>
      
      <div class="form-group">
        <label for="siteId">Объект сети (ID)</label>
        <input id="siteId" v-model.number="form.siteId" type="number" />
        <span v-if="errors.siteId" class="error">{{ errors.siteId }}</span>
      </div>

      <div class="form-group">
        <label for="description">Описание</label>
        <textarea id="description" v-model="form.description"></textarea>
        <span v-if="errors.description" class="error">{{ errors.description }}</span>
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
.error {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}
</style>