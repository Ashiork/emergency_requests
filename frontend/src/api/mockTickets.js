const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let mockItems = [
  { id: 1, number: 'AVR-2026-0001', title: 'Прорыв на теплосети', siteId: 3, description: 'Утечка', status: 'New' }
]
let nextId = 2

export let FORCE_500 = false

export async function mockGetTickets() {
  await delay(500)
  return { ok: true, status: 200, data: [...mockItems] }
}

export async function mockCreateTicket(body) {
  await delay(700)
  
  if (FORCE_500) {
    return { ok: false, status: 500, data: { error: 'Сервер упал' } }
  }
  
  if (!body.title || body.title.length < 5) {
    return { ok: false, status: 400, data: { error: 'Короткая тема' } }
  }

  const newTicket = {
    id: nextId,
    number: `AVR-2026-000${nextId}`,
    title: body.title,
    siteId: body.siteId,
    description: body.description,
    status: 'New'
  }
  
  mockItems.push(newTicket)
  nextId++

  return { ok: true, status: 201, data: newTicket }
}