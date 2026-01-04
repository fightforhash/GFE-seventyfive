/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    let timer;

    return function (...args) {
        const context = this;

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(context, args);
            timer = null;
        }, wait);
    };
}
