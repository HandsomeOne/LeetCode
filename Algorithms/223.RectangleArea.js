/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    function intersection(a, b, x, y) {
        if ((y - a) * (b - x) > 0) {
            return (y - b) * (x - a) > 0
                ? Math.min(b - x, y - a)
                : Math.min(b - a, y - x);
        }
        return 0;
    }
    return (C - A) * (D - B) + (G - E) * (H - F)
        - intersection(A, C, E, G) * intersection(B, D, F, H);
};
