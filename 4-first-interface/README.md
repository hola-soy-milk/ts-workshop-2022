Objectivo: Agregar primera interfaz.

Nuevo archivo: src/models/Post.ts
```
export default interface Post {
  id: number;
  name: string;
  handle: string;
  body: string;
  timestamp: Date;
}
```