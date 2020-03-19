function saturdayFun(activity = 'roller-skate'){
    return 'This Saturday, I want to ' + activity + '!'
}

function mondayWork(activity = 'go to the office'){
    return 'This Monday, I will ' + activity + '.'
}

function wrapAdjective(att='*'){
    return function(attr = 'special'){
        return `You are ${att}${attr}${att}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    },
}

const actionApplyer = function(start, fnArr) {
    let j = start
    for (let i =0; i < fnArr.length; i++){
        j = fnArr[i](j)
    }
    return j
}
