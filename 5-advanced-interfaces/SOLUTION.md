In `./src/models/Sender.ts`:

```
export default interface Sender {
    id: number,
    name: string,
    handle: string
}
```

In `./src/models/Post.ts`:

```
import Sender from "./Sender";

export default interface Post {
  id: number;
  sender: Sender;
  body: string;
  timestamp: Date;
}
```
