Objective: Use guard clauses to protect our code from undefined values.

In `./src/models/Dice.ts`, you'll notice we changed Die in DieWrapper in line 2 to be an optional with the question mark character.

The `value` function will no longer work. We need to change it to check that `this.die` is an instance of Die. We'll otherwise return zero.

Extra credit: the `dieForValue` function should return `undefined` if the value doesn't correspond to an existing side.
