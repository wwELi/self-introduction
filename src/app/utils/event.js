const cache = new Map();

const on = (name, fn = () => {}) => {
	if (cache.has(name) || typeof fn !== 'function') {
		return;
	};
	cache.set(name, fn);
	return {
		clear() {
			cache.delete(name);
		}
	}
} 

const broadcast = name => {
   if (!cache.has(name)) {
		return;
	};
	const fn = cache.get(name);
	fn();
}

export default {
	on,
	broadcast
};

