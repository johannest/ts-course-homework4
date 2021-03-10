"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function string(input) {
    if (typeof input !== "string")
        throw Error("not a string: " + input);
    return input;
}
exports.string = string;
function number(input) {
    if (typeof input !== "number")
        throw Error("not a number: " + input);
    return input;
}
exports.number = number;
function boolean(input) {
    if (typeof input !== "boolean")
        throw Error("not a boolean: " + input);
    return input;
}
exports.boolean = boolean;
function element(elemValidator) {
    return (input) => {
        if (!(input instanceof Element))
            throw Error("Not an element: " + input);
        return elemValidator(input);
    };
}
exports.element = element;
function union(elemValidator) {
    return (input) => {
        if (!(input instanceof Element))
            throw Error("Not an element: " + input);
        return elemValidator(input);
    };
}
exports.union = union;
function array(elemValidator) {
    return (input) => {
        if (!(input instanceof Array))
            throw Error("Not an array: " + input);
        input.forEach(elemValidator);
        return input;
    };
}
exports.array = array;
function intersection(...validators) {
    return (input) => {
        validators.forEach(v => v(input));
        return input;
    };
}
exports.intersection = intersection;
function object(spec) {
    return (input) => {
        if (typeof input !== "object")
            throw Error("Not an object: " + input);
        Object.entries(spec).forEach(([key, validator]) => {
            validator(input[key]);
        });
        return input;
    };
}
exports.object = object;
