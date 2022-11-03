const removeFromArray = function(array, remove1, remove2, remove3, remove4, remove5, remove6, remove7,remove8, remove9) {
    let result = [];

    for(i = 0; i < array.length; i++) {
        if(!(array[i] === remove1)) {
            result.push(array[i]);
        } else {
            continue;
        }
    }

    let result2 = result;

    if(remove2) { result2 = removeFromArray(result, remove2);}
    result = result2;
    if (remove3) { result2 = removeFromArray(result, remove3);}
    result = result2;
    if (remove4) { result2 = removeFromArray(result, remove4);}
    result = result2;
    if (remove5) { return removeFromArray(result, remove5);}
    result = result2;
    if (remove6) { return removeFromArray(result, remove6);}
    result = result2;
    if (remove7) { return removeFromArray(result, remove7);}
    result = result2;
    if (remove8) { return removeFromArray(result, remove8);}
    result = result2;
    if (remove9) { return removeFromArray(result, remove9);}
    result = result2;
    
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
