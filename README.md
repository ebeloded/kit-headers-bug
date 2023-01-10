# Issue: SvelteKit headers not set in production build when ssr = false

## Reproduction

0. Create SvelteKit skeleton project

1. Set headers in `hooks.server.ts`

https://github.com/ebeloded/kit-headers-bug/blob/6721be212e59feaa245df8e4a018163b7ece7987/src/hooks.server.ts#L3-L9

2. Disable SSR:

https://github.com/ebeloded/kit-headers-bug/blob/6721be212e59feaa245df8e4a018163b7ece7987/src/routes/+layout.server.ts#L1




1. `pnpm build`
2. `pnpm preview`
3. Get headers (`https -h http://127.0.0.1:4173/`)
4. Note the missing headers

<img width="278" alt="https -h http://127.0.0.1:4173/" src="https://user-images.githubusercontent.com/5859177/211444295-e2c44318-3fed-4733-9216-7d9ec8465e84.png">


## NB
1. In this reproduction I used `adapter-auto`, but behavior is the same with `adapter-node`
2. The headers are present in dev mode (`pnpm dev`):

<img width="278" alt="pnpm dev" src="https://user-images.githubusercontent.com/5859177/211446377-80fbe992-ba59-4f28-95be-7a0f1b800c03.png">
