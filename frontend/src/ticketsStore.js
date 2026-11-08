import { ref } from 'vue'

export const items = ref([
  { id: 1, number: 'AVR-2026-0001', title: 'Прорыв на теплосети', siteId: 3, status: 'New' },
  { id: 2, number: 'AVR-2026-0002', title: 'Нет ГВС', siteId: 1, status: 'InProgress' }
])