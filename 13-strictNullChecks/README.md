Objetivo: Hacer pasar los strict null checks

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

En `./src/models/ShoppingCart.ts`:

```
     groupedItems() {
-        return Object.values(this.items.reduce((cartItem, item) => {
-            cartItem[item.name()] = cartItem[item.name()] || {
-                name: item.name(),
-                quantity: 0,
-                priceCents: item.priceCents()
-            };
-            cartItem[item.name()].quantity += 1;
-            cartItem[item.name()].priceCents += item.priceCents();
-            return cartItem;
-        }, {}));
+        if (this.items) {
+            return Object.values(this.items.reduce((cartItem, item) => {
+                cartItem[item.name()] = cartItem[item.name()] || {
+                    name: item.name(),
+                    quantity: 0,
+                    priceCents: item.priceCents()
+                };
+                cartItem[item.name()].quantity += 1;
+                cartItem[item.name()].priceCents += item.priceCents();
+                return cartItem;
+            }, {}));
+        } else {
+            return [];
+        }
     }

     numberOfItems() {
-        return this.items.length;
+        return this.items ? this.items.length : 0;
     }

     total() {
-        return this.items.reduce((x, y) => x + y.priceCents(), 0);
+        if (this.items) {
+            return this.items.reduce((x, y) => x + y.priceCents(), 0);
+        } else {
+            return 0;
+        }
     }
 }
```