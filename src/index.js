module.exports = reverse;
function reverse (n) {
    let str = n.toString().split("").reverse().join("");
    n = parseInt(str);
    if (n < 0) {
        n = -n;
    }
    return n;
}
