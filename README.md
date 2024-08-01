## 🥶 "FixHub" - A Issue Tracker Website

### 📌 Tools and Technology:

- TypeScript
- Next.js
- Tailwind CSS
- Radix UI
- MySQL
- Prisma
- NextAuth.js

### 📌 Features:

1. Creating, Viewing, Updating and Deleting Issues
2. User Authentication and Access Control
3. Assigning Issues to Users
4. Filtering & Sorting Issues
5. Pagination, Charts and Dashboard

### 📌 Libaries:

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
