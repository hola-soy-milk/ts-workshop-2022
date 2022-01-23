Objetivo: Usar clases abstractas y herencia.

En `./src/models/Dice.ts`:

```
abstract class Die {
  abstract value(): number;
}

class OneDie extends Die {
  value() {
    return 1;
  }
}
class TwoDie extends Die {
  value() {
    return 2;
  }
}
class ThreeDie extends Die {
  value() {
    return 3;
  }
}
class FourDie extends Die {
  value() {
    return 4;
  }
}
class FiveDie extends Die {
  value() {
    return 5;
  }
}
class SixDie extends Die {
  value() {
    return 6;
  }
}
```

Credito extra: Agregar 7 y 8