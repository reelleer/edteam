# TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch

## 1. Intro

En javascript si antepones el símbolo + antes de la variables le haces un cast a "Number".

## 2. Basics

### Core types

__number__ used for integer, double, float, etc. (all numbers);

__string__ All text values (", ', `).

__boolean__ true or false, no truthy or falsy value.

TypeSCript check types during development.

Note: In Javascript (also in TS) all number al float by default.

__object__ Any JavaScript object, more specific types (type of object) are posible.

__Array__ Any JavaScript array, type can be flexible or strict (regarding the element types).

__Tuple__ Added by TypeScript, fixed-length array.

__Enum__ Added by TypeScript, automatically enumerated global constan identifiers. By default start in 0 or you can specify other one, even you can assign other value type as string.

__Any__ Any kind of value, no specific type assigment. Alway avoid any if is possible.

### TypeScript types

_Union Types_ TS allow to combine types. Allows to specify concret values for a variables for example `let state: 'on' | 'off'`. The keyword `type` (TypeScript own) allow to declare an alias to a union type, example `type ConversionDescriptor = 'as-number' | 'as-text'`.

### Types related with functions

__void__ When a function does not return a value TS infer his type as `void`, this types con only used with functions. Even thought is posible use `undefined` TS will require to specify a `return;` in the function.

### Unknown & Never

__Unknow__ Is similar to `any`, but make a type check. An unknown variable can't be assigned to typed variable without a previous check.

```
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string'){
  userName = userInput
}
```

__Never__ Especify that a function intentionally will never return a value, example:

```
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}
```

## 3. The TypeScript Compiler

Configuring and using the TypeScript compiler.
