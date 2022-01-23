Objectivo: ultilizar tipos dentro de funciones.

Cambiar PostList.tsx:

```
-  let rows = posts.map((post, index) => {
+  let rows = posts.map((post: Post, index: number) => {
```

Ojo con la lina 16, nuevo helper!

Agregar funcion, nuevo archivo `./src/utils/formatters.ts`:

```
import Post from "../models/Post";
export let formatPostTimestamp = (post: Post) => {
  return new Date(post.timestamp).toLocaleString("es");
};
```