import { mockGetTickets, mockCreateTicket } from './mockTickets.js'


const USE_MOCK = true
const baseUrl = import.meta.env.VITE_API_BASE_URL

export async function getTickets() {
  if (USE_MOCK) return mockGetTickets()

  const response = await fetch(`${baseUrl}/api/tickets`)
  if (!response.ok) throw new Error(`Ошибка: ${response.status}`)
  return { ok: true, status: response.status, data: await response.json() }
}

export async function createTicket(body) {
  if (USE_MOCK) return mockCreateTicket(body)

  const response = await fetch(`${baseUrl}/api/tickets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = await response.json().catch(() => ({}))
  return { ok: response.ok, status: response.status, data }
}