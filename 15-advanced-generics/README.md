In our final step, we're going to extract the Marshmallow type from the ShoppingCart using generics.

Let's get it passing, making sure all three of these commands pass:

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

Let's add an abstract class `./src/models/CartItemType.ts` with two abstract functions:

`priceCents` that returns a number and `name` that returns string.

Change the ShoppingCart class to use a generic <T extends CartItemType>, and use that T class instead of Marshmallow.
