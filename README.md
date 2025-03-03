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

## App screenshots

[url=https://postimg.cc/gX8k0N9M][img]https://i.postimg.cc/gX8k0N9M/Zrzut-ekranu-2025-03-3-o-9-38-53-PM.png[/img][/url]

[url=https://postimg.cc/bGKw845D][img]https://i.postimg.cc/bGKw845D/Zrzut-ekranu-2025-03-3-o-9-39-04-PM.png[/img][/url]

## Additinal info:

In project directory is movie/[id].tsx file that is not used anywhere. It renders MovieDialog and should be trigger by NextJS <Link href="/movie/{movie.id}"> to achieve change layout and set path in url but it's not aligned with design (user stay on the same page) so I keep it here just to show that I understand dynamic routes in nextjs.
