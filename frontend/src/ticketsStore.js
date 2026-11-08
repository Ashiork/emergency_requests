import { ref } from 'vue'

export const items = ref([
  { id: 1, number: 'AVR-2026-0001', title: 'Прорыв на теплосети', siteId: 3, description: 'Утечка', status: 'New' },
  { id: 2, number: 'AVR-2026-0002', title: 'Нет ГВС', siteId: 1, description: 'Холодная вода', status: 'InProgress' }
])

export const nextId = ref(3)

export function addItem(newItem) {
  items.value.push({
    id: nextId.value,
    number: `AVR-2026-000${nextId.value}`,
    title: newItem.title,
    siteId: newItem.siteId,
    description: newItem.description,
    status: 'New'
  })
  nextId.value++
}