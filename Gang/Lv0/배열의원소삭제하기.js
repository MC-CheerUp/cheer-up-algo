const solution = (arr, delete_list) => {
    const deleteSet = new Set(delete_list);

    return arr.reduce((result, currentElement) => {
        if (!deleteSet.has(currentElement)) {
            result.push(currentElement);
        }
        return result;
    }, []);
};

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
