Objetivo: Ultilizar tipos estrictamente

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

En `./src/App.svelte`:

```
 <script lang="ts">
-       const addCartItem = (item: any) => {
+       const addCartItem = (item: Marshmallow) => {
                cart = cart.addItem(item);
        }
```

En `./src/components/Cart.svelte`:

```
-  export let items: any[];
-  export let amount: any;
-  export let total: any;
+  export let items: GroupedCartItem[];
+  export let amount: number;
+  export let total: number;
```

En `./src/components/Menu.svelte`:

```
-  import {availableMarshmallows} from '../models/Marshmallow';
-  export let addCartItem: any;
+  import {availableMarshmallows, Marshmallow} from '../models/Marshmallow';
+  export let addCartItem: (item: Marshmallow) => void;
```

En `./src/models/Marshmallow.ts`:

```
-  import {availableMarshmallows} from '../models/Marshmallow';
-  export let addCartItem: any;
+  import {availableMarshmallows, Marshmallow} from '../models/Marshmallow';
+  export let addCartItem: (item: Marshmallow) => void;
```

En `./src/models/ShoppingCart.ts`:

```
-export default class ShoppingCart {
-    items?: any[];
+import type { Marshmallow } from "./Marshmallow";
+
+export interface GroupedCartItem {
+    name: string,
+    priceCents: number,
+    quantity: number
+}
+
+export class ShoppingCart {
+    items?: Marshmallow[];

     constructor() {
         this.items = [];
     }

-    addItem(item: any) {
+    addItem(item: Marshmallow) {
         if (this.items !== undefined) {
             this.items = [...this.items, item]
         }
```

```
-            return Object.values(this.items.reduce((cartItem, item) => {
-                cartItem[item.name()] = cartItem[item.name()] || {
-                    name: item.name(),
-                    quantity: 0,
-                    priceCents: item.priceCents()
-                };
-                cartItem[item.name()].quantity += 1;
-                cartItem[item.name()].priceCents += item.priceCents();
-                return cartItem;
-            }, {}));
+            return this.items.reduce((cartItems: GroupedCartItem[], item: Marshmallow) => {
+                let cartItem: GroupedCartItem | undefined = cartItems.find(e => e.name === item.name());
+                if (!cartItem) {
+                    cartItem = {
+                      name: item.name(),
+                      priceCents: item.priceCents(),
+                      quantity: 0,
+                    };
+                    cartItems.push(cartItem);
+                }
+                cartItem.quantity += 1;
+                cartItem.priceCents += item.priceCents();
+                return cartItems;
+            }, []);
```

En `./src/models/__tests__/ShoppingCart.test.ts`:

```
-import ShoppingCart from '../ShoppingCart'
+import { Marshmallow } from '../Marshmallow';
+import { ShoppingCart } from '../ShoppingCart'
+
+class Big extends Marshmallow {
+    priceCents() {
+        return 999;
+    }
+    name() {
+        return "Big";
+    }
+}
```

```
-  const updatedCart = cart.addItem({data: "value"});
-  expect(updatedCart.items).toEqual([{
-    data: "value"
-  }]);
+  const bigMarshmallow = new Big()
+  const updatedCart = cart.addItem(bigMarshmallow);
+  expect(Object.getPrototypeOf(updatedCart.items![0].constructor).name).toEqual(Marshmallow.name);
+  expect(updatedCart.items).toEqual([bigMarshmallow]);
```

```
 test("Cart with item adds to total", () => {
   const cart = new ShoppingCart();
   cart.addItem({
-    priceCents: () => 100
+    priceCents: () => 100,
+    name: () => "Big marshmallow"
   });
   expect(cart.total()).toBe(100);
```