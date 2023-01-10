import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    'cache-control': 'no-store',
  })
  return resolve(event)
}
