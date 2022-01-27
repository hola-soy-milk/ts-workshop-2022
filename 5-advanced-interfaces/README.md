Our objective is to use interface types inside other interfaces.

First, create a new file: `./src/models/Sender.ts` and export a new interface Sender with the following fields:

- id of type number
- name of type string
- handle of type string

Then, in the Post model, remove the `name` and `handle` fields, and replace them with a `sender` instance of `Sender`.
