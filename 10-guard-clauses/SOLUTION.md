```
   value(): number {
-    return this.die.value();
+    if (this.die instanceof Die) {
+      return this.die.value();
+    }
+    return 0;
   }
```

```
       case 8:
         return new EightDie();
       default:
-        return new OneDie();
+        return undefined;
     }
   }
 }
```