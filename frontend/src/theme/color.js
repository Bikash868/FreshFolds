/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
 export const decomposeColor = (color) => {
	// Idempotent
	if (color.type) {
		return color;
	}

	if (color.charAt(0) === '#') {
		return decomposeColor(hexToRgb(color));
	}

	const marker = color.indexOf('(');
	const type = color.substring(0, marker);

	if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
		return null;
	}

	let values = color.substring(marker + 1, color.length - 1);
	let colorSpace;

	if (type === 'color') {
		values = values.split(' ');
		colorSpace = values.shift();
		if (values.length === 4 && values[3].charAt(0) === '/') {
			values[3] = values[3].substr(1);
		}
		if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
			return null;
		}
	} else {
		values = values.split(',');
	}
	values = values.map((value) => parseFloat(value));

	return { type, values, colorSpace };
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
export const recomposeColor = (color) => {
	const {
		type,
		colorSpace
	} = color;
	let {
		values
	} = color;

	if (type.indexOf('rgb') !== -1) {
		// Only convert the first 3 values to int (i.e. not alpha)
		values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
	} else if (type.indexOf('hsl') !== -1) {
		values[1] = `${values[1]}%`;
		values[2] = `${values[2]}%`;
	}

	if (type.indexOf('color') !== -1) {
		values = `${colorSpace} ${values.join(' ')}`;
	} else {
		values = `${values.join(', ')}`;
	}

	return `${type}(${values})`;
};

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
export const clamp = (value, min = 0, max = 1) => {
	if (value < min || value > max) {
		// console.error(`Material-UI: The value provided ${value} is out of range [${min}, ${max}].`);
	}

	return Math.min(Math.max(min, value), max);
};

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
export const hexToRgb = (color) => {
	color = color.substr(1);
	const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
	let colors = color.match(re);

	if (colors && colors[0].length === 1) {
		colors = colors.map(n => n + n);
	}

	return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
		return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
	}).join(', ')})` : '';
};

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export const alpha = (color, value) => {
	color = decomposeColor(color);
	value = clamp(value);

	if (color.type === 'rgb' || color.type === 'hsl') {
		color.type += 'a';
	}

	if (color.type === 'color') {
		color.values[3] = `/${value}`;
	} else {
		color.values[3] = value;
	}

	return recomposeColor(color);
};

export default {
	decomposeColor,
	recomposeColor,
	clamp,
	hexToRgb,
	alpha,
};