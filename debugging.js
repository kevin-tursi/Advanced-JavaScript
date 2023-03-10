// DEBUGGING

const flattened1 = [[0, 1], [2, 3], [4, 5]].reduce(
    (a, b) => a.concat(b), []);


const flattened2 = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        return accumulator.concat(array);
    }, []);


const flattened3 = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array)
    }, []);

console.log(flattened); // [0, 1, 2, 3, 4, 5]