export function isArray(value) {
    if (Array.isArray(value)) return true;
    else return false;
}

export function isFunction(value) {
    const c = typeof value;
    if (c === "function") return true;
    else return false;
}

export function isObject(value) {
    if (value === null) return false;

    const type = typeof value;
    return type === "object" || type === "function" || Array.isArray(value);
}

export function isPlainObject(value) {
    if (value === null) return false;
    if (typeof value !== "object") return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}
