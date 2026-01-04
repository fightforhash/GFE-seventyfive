/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
    let timer = null;

    return function (...args) {
        if (timer) return;
        const context = this;

        func.apply(context, args);
        timer = setTimeout(() => {
            timer = null;
        }, wait);
    };
}
