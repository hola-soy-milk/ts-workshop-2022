Objetivo: Usar constructores de clases

En `./src/models/Dice.ts`:

```
export default class DieWrapper {
+  sides: number;
+
+  constructor(sides: number) {
+    this.sides = sides;
+  }
+
   value(): number {
-    let value: number = Math.floor(Math.random() * 6) + 1;
+    let value: number = Math.floor(Math.random() * this.sides) + 1;
     return value;
   }
 }
 ```