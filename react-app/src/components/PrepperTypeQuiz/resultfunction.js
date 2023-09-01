const one = "Nuclear Prepper"
const two = "EMP (Electromagnetic Pulse) / Solar Flare Prepper"
const three = "Economic Collapse Prepper"
const four = "Pandemic Prepper"
const five = "Natural Disaster Prepper"
const six = "Biological / Chemical Attack Prepper"
const seven = "Cyber-Attack Prepper"
const eight = "Civil Unrest or Martial Law Prepper"
const nine = "Ecological / Environmental Prepper"
const ten = "Peak Oil / Resource Depletion Prepper"
const eleven = "Alien Invasion Prepper"
const twelve = "Zombie Apocalypse Prepper"
const thirteen = "Generalist Prepper"

const matchToType = (str) => {
  if(str === 'one') {
    return one
  } else if(str === 'two') {
    return two
  } else if(str === 'three') {
    return three
  } else if(str === 'four') {
    return four
  } else if(str === 'five') {
    return five
  } else if(str === 'six') {
    return six
  } else if(str === 'seven') {
    return seven
  } else if(str === 'eight') {
    return eight
  } else if(str === 'nine') {
    return nine
  } else if(str === 'ten') {
    return ten
  } else if(str === 'eleven') {
    return eleven
  } else if(str === 'twelve') {
    return twelve
  } else {
    return thirteen
  }
}

const findAnswer = (answerCount, num) => {
    const res = []
    for (let item in answerCount) {
        if (answerCount[item] === num) {
            res.push(item)
        }
    }
    return res
}

const findMax = (arr) => {
    return Math.max(...arr)
}

const interpretResult = (quiz) => {
    let answerCount = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
        eleven: 0,
        twelve: 0,
        thirteen: 0
    }

    if(quiz.one === 'A') {
        answerCount.one += 1
        answerCount.thirteen += 1
        answerCount.twelve += 1
        answerCount.nine += 1
    } else {
        answerCount.two += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.ten += 1
        answerCount.eleven += 1
    }

    if(quiz.two === 'A') {
        answerCount.three += 1
        answerCount.seven += 1
    } else if (quiz.two === 'B') {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.thirteen += 1
    } else {
        answerCount.eleven += 1
        answerCount.twelve += 1
    }

    if(quiz.three === 'A') {
        answerCount.three += 1
        answerCount.five += 1
        answerCount.eight += 1
        answerCount.eleven += 1
    } else if(quiz.three === 'B') {
        answerCount.nine += 1
        answerCount.ten += 1
    } else if(quiz.three === 'C') {
        answerCount.twelve += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.four += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.thirteen += 1
    }

    if(quiz.four === 'A') {
        answerCount.thirteen += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
    }

    if(quiz.five === 'A') {
        answerCount.six += 1
        answerCount.four += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.three += 1
        answerCount.five += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    }

    if(quiz.six === 'A') {
        answerCount.three += 1
        answerCount.five += 1
        answerCount.eight += 1
        answerCount.eleven += 1
    } else if(quiz.six === 'B') {
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.thirteen += 1
    } else if(quiz.six === 'C') {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.four += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.thirteen += 1
    } else {
        answerCount.twelve += 1
        answerCount.thirteen += 1
        answerCount.eight += 1
    }

    if(quiz.seven === 'A') {
        answerCount.seven += 1
    } else {
                answerCount.one += 1
        answerCount.two += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    }

    if(quiz.eight === 'A') {
        answerCount.nine += 1
        answerCount.thirteen += 1
        answerCount.eight += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
    }

    if(quiz.nine === 'A') {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.seven += 1
        answerCount.thirteen += 1
    } else if(quiz.nine === 'B') {
        answerCount.three += 1
    } else if(quiz.nine === 'C') {
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.eight += 1
        answerCount.eleven += 1
    } else {
        answerCount.nine += 1
        answerCount.ten += 1
    }

    if(quiz.ten === 'A') {
        answerCount.two += 1
    } else {
        answerCount.one += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    }

    if(quiz.eleven === 'A') {
        answerCount.three += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    }

    if(quiz.twelve === 'A') {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.seven += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    } else if(quiz.twelve === 'B') {
        answerCount.three += 1
        answerCount.nine += 1
        answerCount.ten += 1
    } else if(quiz.twelve === 'C') {
        answerCount.five += 1
    } else {
        answerCount.four += 1
        answerCount.six += 1
    }

    if(quiz.thirteen === 'A') {
        answerCount.five += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    }

    if(quiz.fourteen === 'A') {
        answerCount.six += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    }

    if(quiz.fifteen === 'A') {
        answerCount.nine += 1
        answerCount.thirteen += 1
        answerCount.three += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
    }

    if(quiz.sixteen === 'A') {
        answerCount.four += 1
        answerCount.eight += 1
        answerCount.nine += 1
    } else if(quiz.sixteen === 'B') {
        answerCount.two += 1
        answerCount.three += 1
        answerCount.ten += 1
        answerCount.twelve += 1
    } else if(quiz.sixteen === 'C') {
        answerCount.seven += 1
    } else {
        answerCount.one += 1
        answerCount.five += 1
        answerCount.thirteen += 1
    }

    if(quiz.seventeen === 'A') {
        answerCount.two += 1
        answerCount.ten += 1
        answerCount.thirteen += 1
    } else {
        answerCount.one += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
    }

    if(quiz.eighteen === 'A') {
        answerCount.eleven += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    }

    if(quiz.nineteen === 'A') {
        answerCount.twelve += 1
    } else {
        answerCount.one += 1
        answerCount.two += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.five += 1
        answerCount.six += 1
        answerCount.seven += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.ten += 1
        answerCount.eleven += 1
        answerCount.thirteen += 1
    }

    if(quiz.twenty === 'A') {
        answerCount.one += 1
        answerCount.three += 1
        answerCount.four += 1
        answerCount.eight += 1
        answerCount.nine += 1
        answerCount.eleven += 1
        answerCount.twelve += 1
        answerCount.thirteen += 1
    } else if(quiz.twenty === 'B') {
        answerCount.seven += 1
    } else if(quiz.twenty === 'C') {
        answerCount.two += 1
        answerCount.ten += 1
    } else {
        answerCount.six += 1
        answerCount.five += 1
    }

    const valuesArr = Object.values(answerCount)
    const max = findMax(valuesArr)
    const resultArr = findAnswer(answerCount, max)

    return matchToType(resultArr[0])
}

export default interpretResult;
