This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, please install all dependencies

```bash
yarn install
```

To run dev server please use 

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Additinal info:

I refactored my before aproach how Modal was implemented - I didn't like multiple instances of Dialog. It was not efficient. 

However changing it into Intercepting Routing didn't allows me reflect 100% design (Modal Overlay over ModalList)

In addition when we go directly into link we see open modal - that was not required but happy that works :)

My time for this task is over (limit 5h) so plan for future will be spend more time and work to pixel perfect design.