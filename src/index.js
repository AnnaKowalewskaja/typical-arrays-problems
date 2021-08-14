exports.min = function min(array) {
    if (Array.isArray(array) == false || array.length === 0) {
        return 0;
    } else {
        let min = array[0];
        array.forEach((element) => {
            if (min > element) {
                min = element;
            }
        });
        return min;
    }
};

exports.max = function max(array) {
    if (Array.isArray(array) == false || array.length === 0) {
        return 0;
    } else {
        let max = array[0];
        array.forEach((element) => {
            if (max < element) {
                max = element;
            }
        });

        return max;
    }
};

exports.avg = function avg(array) {
    if (Array.isArray(array) == false || array.length === 0) {
        return 0;
    } else {
        let avg = 0;
        array.forEach((element) => {
            avg += element;
        });

        avg /= array.length;
        return avg;
    }
};
