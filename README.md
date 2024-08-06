## 🐞 FixHub: A Complete Fullstack Issue Tracker

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![](https://img.shields.io/badge/Radix_UI-6200EE?style=for-the-badge&logo=radix-ui&logoColor=white) ![](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

**FixHub** is a powerful and intuitive issue tracker built using **Next.js and SQL**, designed to streamline bug management and project tracking. With a focus on efficiency and user-friendliness, FixHub allows for seamless creation, viewing, updating, and deletion of issues. Key features include:

#### 🛖 Features:

1. **User Authentication and Access Control:** Secure login and personalized access levels ensure that only authorized users can manage or view issues.
2. **Issue Assignment:** Creating, Viewing, Updating and Deleting Issues. Assign tasks to team members effortlessly, keeping everyone accountable and informed.
3. **Advanced Filtering & Sorting:** Easily filter and sort issues to quickly find and prioritize tasks.
4. **Pagination & Analytics:** Navigate through large lists of issues with pagination and gain insights with charts and a comprehensive dashboard.
5. **Production-Ready Optimization:** Built for speed and reliability, FixHub is optimized for production environments, ensuring smooth performance at scale.

Whether you're a solo developer or part of a large team, FixHub is the perfect tool for tracking and resolving issues with ease.🐞

<hr>

## 📚 Libaries:

### Icons and Styling:

- **[React Icons](https://react-icons.github.io/react-icons/)** : Useful Icons for NextJs

```
npm install react-icons --save
```

- **[Classnames](https://www.npmjs.com/package/classnames)** : A simple utility for conditionally joining class names together.

```
npm i classnames@2.3.2
```

Example Usage:

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

<hr>

### Database and ORM:

- **[Prisma](https://www.prisma.io/)** : ORM for TypeScript and Node.js

```
npm install prisma@5.3.1
```

Commands:

```
npx prisma init
```

```
npx prisma format
```

```
npx prisma migrate dev
```

<hr>

### Authentication and Authorization:

- **[Goolge Cloud Console](https://console.cloud.google.com/welcome?project=issuetracker-431504)** : Google Account Login and OAuth

- **[NextAuth.js](https://next-auth.js.org/)** : Authentication for Next.js

```
 npm i next-auth@4.23.1  --legacy-peer-deps
```
```
npm i @next-auth/prisma-adapter@1.0.7 --legacy-peer-deps
```

- Generate a random base64 string:(NextAuth.js Secret)

```javascript
const crypto = require('crypto');

function generateRandomBase64(length) {
  return crypto.randomBytes(length).toString('base64');
}

const randomBase64String = generateRandomBase64(32);
console.log(randomBase64String);
```

<hr>

### Validation and Forms:

- **[Zod](https://zod.dev/)** : A TypeScript-first schema declaration and validation library.

```
npm install zod
```

- **[React Hook Form](https://react-hook-form.com/)** : Performant, flexible and extensible forms with easy-to-use validation.

```
npm install react-hook-form@7.46.1
```

- **[Hook Form Resolvers](https://www.npmjs.com/package/@hookform/resolvers)** : Resolvers for React Hook Form

```
npm i @hookform/resolvers@3.3.1
```

<hr>

### UI Components and Design:

- **[Radix UI](https://www.radix-ui.com/themes/docs/overview/getting-started)** : A collection of low-level UI components and hooks for building high-quality design systems and web apps.

```
npm install @radix-ui/themes
```

- **[React Simple MD Editor](https://www.npmjs.com/package/react-simplemde-editor)** : A simple markdown editor for React

```
npm install --save react-simplemde-editor easymde
```

- **[React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton)** : A React component to easily create loading skeletons

```
npm i react-loading-skeleton@3.3.1
```

- **[React Markdown](https://www.npmjs.com/package/react-markdown)** : Markdown component for React

```
npm i react-markdown@8.0.7
```

<hr>

### HTTP and API:

- **[Axios](https://axios-http.com/docs/intro)** : Promise based HTTP client for the browser and node.js

```
npm install axios@1.5.0
```

<hr>

### Utility and Helpers:

- **[Delay](https://www.npmjs.com/package/delay)** : Delay a promise a specified amount of time

```
npm i delay
```

- **[Tailwind Typography](https://www.npmjs.com/package/@tailwindcss/typography)** : A plugin for Tailwind CSS that provides a set of prose classes to help you design rich text content.

```
npm install -D @tailwindcss/typography
```

-
```
npm i @tanstack/react-query@4.35.3 --legacy-peer-deps
```

<hr>

## 🔗 Useful Resources:

- [How to Use VS Code to Run SQL on a Database](https://www.youtube.com/watch?v=C0y35FpiLRAs)
- [Tailwind CSS Shadow generator](https://ui.aceternity.com/tools/box-shadows)
- [ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost' (10061) solve](https://youtu.be/9haB3XP3FME?si=RrDhuNMpWIx27Gcd)
- [TW Elements](https://tw-elements.com/)
- [Image to Favicon Icon Generator](https://favicon.io/favicon-converter/)
