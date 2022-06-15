function arrayStats(arr) {
    return {
        average: arr.reduce((partialSum, x) => partialSum + x, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

export default arrayStats;