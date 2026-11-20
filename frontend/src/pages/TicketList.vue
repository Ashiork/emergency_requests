<script setup>
import { ref, onMounted } from 'vue'
import { getTickets } from '../api/tickets.js'
import TicketTable from '../components/TicketTable.vue'

const items = ref([])
const screen = ref('loading')
const errorMessage = ref('')

async function loadData() {
  screen.value = 'loading'
  try {
    const res = await getTickets()
    if (res.ok) {
      items.value = res.data
      screen.value = items.value.length === 0 ? 'empty' : 'data'
    } else {
      screen.value = 'error'
      errorMessage.value = `Сервер вернул ошибку: ${res.status}`
    }
  } catch (err) {
    screen.value = 'error'
    errorMessage.value = 'Нет связи с сервером. Проверьте сеть.'
  }
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <main>
    <h2>Список заявок</h2>
    
    <div v-if="screen === 'loading'">Загрузка...</div>
    <div v-else-if="screen === 'empty'">Записей пока нет</div>
    <div v-else-if="screen === 'error'" style="color: red;">{{ errorMessage }}</div>
    
    <TicketTable v-else-if="screen === 'data'" :items="items" />
  </main>
</template>