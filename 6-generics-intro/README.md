Our objective is to generalise the API module so that it can use any type using generics.

In `./src/utils/api.ts`:

Rename `getPosts` to `getRequests` to handle a generic type, take a `relativeURL` string parameter and return a `Promise<T[]>`.

Change the get request to use that generic array.

Rename `postPost` to `PostRequest` to handle a generic type, take a data `T` type parameter, and a `relativeURL` string parameter.

Change the post request to use that generic array.

Remove the import of Post.
