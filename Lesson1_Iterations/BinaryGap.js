/*
title   : BinaryGap
creator : @shotozuro
*/

function solution(N) {
    const bin = N.toString(2);
    const zeroSum = [];
    let sum = 0;
    for (let i = 0; i < bin.length; i++) {
        if (i > 0) {
            if (bin.charAt(i) === "0") {
                sum++;
            } else {
                zeroSum.push(sum);
                sum = 0;
            }    
        }
    }
    
    return zeroSum.length > 0 ? Math.max(...zeroSum) : 0;
}

