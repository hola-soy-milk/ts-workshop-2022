Objetivo: Resolver el error "no implicit any's allowed"

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

En `./src/models/ShoppingCart.ts`:

```
-       const addCartItem = (item) => {
+       const addCartItem = (item: any) => {
```

En `./src/components/Cart.svelte`:

```
-  export let items;
-  export let amount;
-  export let total;
+  export let items: any[];
+  export let amount: any;
+  export let total: any;
```

En `./src/components/Menu.svelte`:

```
-  export let addCartItem;
+  export let addCartItem: any;
```

En `./src/models/Marshmallow.ts`:

```
-    abstract priceCents();
-    abstract name();
+    abstract priceCents(): any;
+    abstract name(): any;
```

En `./src/models/ShoppingCart.ts`:

```
-    items?;
+    items?: any[];

     constructor() {
         this.items = [];
     }

-    addItem(item) {
+    addItem(item: any) {
```