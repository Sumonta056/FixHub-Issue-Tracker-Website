## 🥶 "FixHub" - A Issue Tracker Website

### 📌 Tools and Technology:

- TypeScript
- Next.js
- Tailwind CSS
- Radix UI
- Prisma
- NextAuth.js

### 📌 Features:

1. Creating and Issue
2. Viewing Issues
3. Updating Issues
4. Deleting Issues
5. User Authentication
6. Assigning Issues
7. Filtering Issues
8. Sorting Issues
9. Pagination
10. Dashboard

### 📌 Functionalities:

- Dashboard
- Charts
- Filtering and Sorting
- Pagination
- Form with Client Side Validation
- User Authentication and Access Control
- Modal Dialogs and Toast Notifications
- Fast and Responsive UI

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
