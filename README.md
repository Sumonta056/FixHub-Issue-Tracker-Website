## 🥶 "FixHub" - A Issue Tracker Website

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![](https://img.shields.io/badge/Radix_UI-6200EE?style=for-the-badge&logo=radix-ui&logoColor=white) ![](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

### 🛖 Features:

1. Creating, Viewing, Updating and Deleting Issues
2. User Authentication and Access Control
3. Assigning Issues to Users
4. Filtering & Sorting Issues
5. Pagination, Charts and Dashboard

### 📚 Libaries:

- [React Icons](https://react-icons.github.io/react-icons/) : Useful Icons for NextJs

```
npm install react-icons --save
```

- [Classnames](https://www.npmjs.com/package/classnames) : A simple utility for conditionally joining class names together.

```
npm i classnames@2.3.2
```

```css
 className={`${
              link.href === currentPath ? "text-black font-semibold" : "text-zinc-500"
            }  hover:text-zinc-800 transition-colors`}
```

```css
className={classNames({
              "text-black font-semibold": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800": true,
              "transition-colors": true,
            })}
```

- [Prisma](https://www.prisma.io/): ORM for TypeScript and Node.js

```
npm install prisma@5.3.1
```

```
npx prisma init
```

```
npx prisma format
```

```
npx prisma migrate dev
```

- [Zod](https://zod.dev/) : A TypeScript-first schema declaration and validation library.

```
npm install zod
```

### 🔗 Useful Resources:

- [How to Use VS Code to Run SQL on a Database](https://www.youtube.com/watch?v=C0y35FpiLRAs)
