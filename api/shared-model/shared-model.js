function convertToBoolean (obj, propertyName) {
    if (obj) {
        obj[propertyName] = obj[propertyName] !== 0;
    }
}

module.exports = convertToBoolean;