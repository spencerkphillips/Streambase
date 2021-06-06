/**
 * A series of userful functions to assist in development.
 */

module.exports = function truncate (string = '', limit = 0) {
    return string.substring(0, limit);
}