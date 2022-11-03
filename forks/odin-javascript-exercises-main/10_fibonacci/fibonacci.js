const fibonacci = function(n) {
    if(n < 0) return 'OOPS';
    if(n == '1') return 1;

    let fibA = 0;
    let fibB = 1;
    let cnt = 1;
    let fibC = fibA;

    while(cnt < n) {
        if(cnt%2 != 0) {
            fibC = fibA + fibB;
            fibA = fibC;
        } else {
            fibC = fibA + fibB;
            fibB = fibC;
        }
        cnt++;
    }

    return fibC;
};

// Do not edit below this line
module.exports = fibonacci;
