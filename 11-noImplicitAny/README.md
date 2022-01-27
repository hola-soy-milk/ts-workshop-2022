In this app, we've activated the `noImplicityAny` strict mode.

Let's get it passing, making sure all three of these commands pass:

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

Let's fix the implicit `any` errors by declaring the `any` type where needed.
