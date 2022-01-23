Objectivo: Configurar archivos de TypeScript

Renombrar archivos a `.tsx` o a `.ts`:

```
src/App.tsx
src/components/PostForm.tsx
src/components/PostList.tsx
src/index.tsx
src/reportWebVitals.ts
```

Agregar lo siguiente a `tsconfig.json`:

```
  "include": [
    "./src/**/*.ts"
  ],
```