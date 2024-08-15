"use strict";
let val2 = 1; // unknown type will not allow to perform any operation without type checking
if (typeof val2 === "number") {
    val2++;
}
if (typeof val2 === "string") {
    val2.toUpperCase();
}
if (Array.isArray(val2)) {
    val2.map(val => val);
}
if (val2 && typeof val2 === "object" && "foobar" in val2
    && typeof val2.foobar === "number") {
    val2.foobar = 2;
}
