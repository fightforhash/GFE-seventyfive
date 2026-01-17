/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
    const classes = [];

    args.flat(Infinity).forEach((arg) => {
        if (!arg) return;

        const typ = typeof arg;

        if (typ === "string" || typ === "number") {
            classes.push(arg);
        }

        if (Array.isArray(arg)) {
            classes.push(classNames(...arg));
        }

        if (typ === "object") {
            for (let key in arg) {
                if (Object.hasOwn(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    });

    return classes.join(" ");
}
