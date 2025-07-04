# 📦 package-checker-lite

A tiny CLI tool to scan your project’s **dependencies** and report which ones are unused.

✅ Lightweight
✅ TypeScript Support
✅ ESM Ready
✅ Perfect for monorepo / single project audits

---

## 📥 Installation

Install globally:

```bash
npm install -g package-checker-lite
```

Or use with npx (no install needed):

```bash
npx package-checker-lite
```

---

## 🚀 Usage

Run inside your project root (where package.json lives):

```bash
package-checker-lite
```

Or via npx:

```bash
npx package-checker-lite
```

---

## 🔎 What it does

- Reads `dependencies` from package.json
- Recursively scans all `.ts` and `.js` files inside `src/`
- Detects which packages are unused in source code
- Reports unused ones

---

## 📦 Example Output

If you run:

```bash
npx package-checker-lite
```

You’ll get something like:

```
🔍 Unused Dependencies:

❌ lodash
❌ axios
```

If everything is used:

```
🔍 Unused Dependencies:

✅ No unused dependencies found!
```

---

## 👨‍💻 Author

Made with ❤️ by [Hammad Sadi](https://github.com/hammadsadi)

---

## 📄 License

MIT

---

```json
"repository": {
  "type": "git",
  "url": "https://github.com/hammadsadi/package-checker-lite.git"
},
"homepage": "https://github.com/hammad-sadiq/package-checker-lite#readme"
```
