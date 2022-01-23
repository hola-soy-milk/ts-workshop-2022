```
-import Post from "../models/Post";

-export async function getPosts() {
-  const res = await axios.get("http://localhost:6060/posts");
+export async function getRequest<T>(relativeUrl: string): Promise<T[]> {
+  const res = await axios.get<T[]>(`http://localhost:6060/${relativeUrl}`);
```

```
-export async function postPost(post: Post) {
-  await axios.post("http://localhost:6060/posts", post);
+export async function postRequest<T>(data: T, relativeUrl: string) {
+  await axios.post<T>(`http://localhost:6060/${relativeUrl}`, data);
```
