const all = (...fns) => value => fns.reduce((prev, fn) => fn(value), null);

const and = value => (...fns) => fns.reduce((prev, fn) => fn(value) && prev, true);
