
let validateName = function (name) {
    if (name === '') {
        throw new TypeError('Name must not be blank');
    }
};

//console.log(validateName());
let create = function (name) {
    let newObj = {
        id: cuid(),
        name: name,
        checked: false,
    }

    return newObj
};

export default {
    create,
    validateName
};
