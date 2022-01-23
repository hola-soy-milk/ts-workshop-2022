In `./src/components/PostList.tsx`:

```
-  let rows = posts.map((post, index) => {
+  let rows = posts.map((post: Post, index: number) => {
```

In `./src/utils/formatters.ts`:

```
import Post from "../models/Post";
export let formatPostTimestamp = (post: Post) => {
  return new Date(post.timestamp).toLocaleString("en");
};
```
