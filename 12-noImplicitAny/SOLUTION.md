
In `./src/models/ShoppingCart.ts`:

```
-       const addCartItem = (item) => {
+       const addCartItem = (item: any) => {
```

In `./src/components/Cart.svelte`:

```
-  export let items;
-  export let amount;
-  export let total;
+  export let items: any[];
+  export let amount: any;
+  export let total: any;
```

In `./src/components/Menu.svelte`:

```
-  export let addCartItem;
+  export let addCartItem: any;
```

In `./src/models/Marshmallow.ts`:

```
-    abstract priceCents();
-    abstract name();
+    abstract priceCents(): any;
+    abstract name(): any;
```

In `./src/models/ShoppingCart.ts`:

```
-    items?;
+    items?: any[];

     constructor() {
         this.items = [];
     }

-    addItem(item) {
+    addItem(item: any) {
```