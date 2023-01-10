import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    'x-foo': 'bar',
    'cache-control': 'no-store',
  })
  return resolve(event)
}
