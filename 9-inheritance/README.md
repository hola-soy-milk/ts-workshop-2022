Objective: Let's use abstract classes and inheritance to create the different dice!

In `./src/models/Dice.ts`, create an abstract class called Die with an abstract function value that returns a number.

Then create a series of subclasses called `OneDie`, `TwoDie`, etc. up until `SixDie` that return the according values by overriding the `value` function.

Extra challenge: Extend the `DieWrapper` class to also have a 7 and 8 value.