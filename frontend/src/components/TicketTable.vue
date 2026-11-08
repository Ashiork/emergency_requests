<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
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
</template>