# TODO React + Next

With the evolution of the internet and its various tools, I often find myself learning much easier with a hands-on approach, gradually increasing the difficulty with chunks of functionality and complexity.

Despite the simplicity of a todo app, it is a great first project to implement:

- **Simple well-known interface**: Common UX.
- **Basic UI components** Powered with CSS framework: [TailwindCSS](https://tailwindcss.com/).
- **Simple navigation**: List page and Edit page.
- **CRUD operations**: Create, read, update, delete.
- **API response handling**: Success and error.
- **ORM**: using Prisma to abstract database interactions.
- **Continuous Integration (CI)**: Utilizes GitHub Actions to automate the testing and deployment pipeline.
- **End-to-end and Component tests**: combining Cypress and Vitest.

![NextJS](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css) ![Vitest](https://img.shields.io/badge/-Vitest-4FC08D?style=flat-square&logo=vitest) ![Cypress](https://img.shields.io/badge/-Cypress-17202C?style=flat-square&logo=cypress) ![Prisma](https://img.shields.io/badge/-Prisma-3982CE?style=flat-square&logo=prisma) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript) ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite)

## Other Implementations

- [Vue + Nuxt](https://github.com/elvisvidal/todo-nuxtjs)
- [AnalogJS (Angular)](https://github.com/elvisvidal/todo-analogjs)

---

## Next

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🛠 Setup

Run `npm install` to install the application dependencies.

Configure your `.env` file according to the provided `.env.example` to set up your database.

## 💽 Database Migrations

Execute `npx prisma migrate dev` to apply database migrations.

You can run `npx prisma studio` to watch updates on your database with [Prisma](https://www.prisma.io/).

## 🚀 Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## 🚀 Build

Run `npm run build` to build the project for production.

## 🧪 Test

Run `npm run test:e2e` or `npx cypress open` to execute end-to-end tests with [Cypress](https://www.cypress.io/).

Run `npm run test:unit` to execute unit tests with [Vitest](https://vitest.dev).

---

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 💻 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
