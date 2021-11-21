/**
 * @param {Object.<string, *>} source
 * @param {string} search
 * @param {string[]} [includeKeys]
 * @returns {boolean}
 */
export default function hasMatch(source: {
    [x: string]: any;
}, search: string, includeKeys?: string[]): boolean;
