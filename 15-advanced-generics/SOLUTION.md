Add `./src/models/CartItemType.ts`:

```
export default abstract class CartItemType {
    abstract priceCents(): number;
    abstract name(): string;
}
```

In `./src/App.svelte`:

```
-       let cart = new ShoppingCart;
+       let cart = new ShoppingCart<Marshmallow>();
```

In `./src/models/Marshmallow.ts`:

```
-export abstract class Marshmallow {
-    abstract priceCents(): number;
-    abstract name(): string;
-}
+import CartItemType from "./CartItemType";
+
+export abstract class Marshmallow extends CartItemType {}
```

In `./src/models/ShoppingCart.ts`:

```
-import type { Marshmallow } from "./Marshmallow";
+import type CartItemType from "./CartItemType";

 export interface GroupedCartItem {
     name: string,
@@ -6,14 +6,14 @@ export interface GroupedCartItem {
     quantity: number
 }

-export class ShoppingCart {
-    items?: Marshmallow[];
+export class ShoppingCart<T extends CartItemType> {
+    items?: T[];

     constructor() {
         this.items = [];
     }

-    addItem(item: Marshmallow) {
+    addItem(item: T) {
         if (this.items !== undefined) {
             this.items = [...this.items, item]
         }
@@ -22,7 +22,7 @@ export class ShoppingCart {

     groupedItems() {
         if (this.items) {
-            return this.items.reduce((cartItems: GroupedCartItem[], item: Marshmallow) => {
+            return this.items.reduce((cartItems: GroupedCartItem[], item: T) => {
                 let cartItem: GroupedCartItem | undefined = cartItems.find(e => e.name === item.name());
                 if (!cartItem) {
                     cartItem = {
```

In `.src/models/__tests__/ShoppingCart.test.ts`:

```
 test("New cart has no items and 0 total", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Marshmallow>();
   expect(cart.total()).toBe(0);
   expect(cart.items).toEqual([]);
 });

 test("Adding item to cart successfully", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Marshmallow>();
   const bigMarshmallow = new Big()
   const updatedCart = cart.addItem(bigMarshmallow);
   expect(Object.getPrototypeOf(updatedCart.items![0].constructor).name).toEqual(Marshmallow.name);
@@ -25,7 +25,7 @@ test("Adding item to cart successfully", () => {
 });

 test("Cart with item adds to total", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Marshmallow>();
   cart.addItem({
     priceCents: () => 100,
     name: () => "Big marshmallow"
```