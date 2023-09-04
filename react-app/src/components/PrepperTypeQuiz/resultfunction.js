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
    console.log('answer count=======>', answerCount)

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
    // console.log('max=====>', max)
    const resultArr = findAnswer(answerCount, max)
    // console.log('resultArr.length======>', resultArr.length)
    const index = Math.floor(Math.random() * resultArr.length)
    // Random between 0 and 1 * length of array
    // console.log('What is this index==========>', index)
    const finalResult = matchToType(resultArr[index])
    // console.log('finaResult===========>', finalResult)
    // console.log("NEW CONSOLE LOG: ", answerCount, max, resultArr[0])
    return finalResult
}

export const getPrepperDescription = (result) => {
    // console.log("FROM GET PREPPER DESCRIPTION: ", result)
    if(result.toLowerCase() === one.toLowerCase()) {
        return "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout."
    } else if(result.toLowerCase() === two.toLowerCase()) {
        return "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools."
    } else if(result.toLowerCase() === three.toLowerCase()) {
        return "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools."
    } else if(result.toLowerCase() === four.toLowerCase()) {
        return "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols."
    } else if(result.toLowerCase() === five.toLowerCase()) {
        return "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans."
    } else if(result.toLowerCase() === six.toLowerCase()) {
        return "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins."
    } else if(result.toLowerCase() === seven.toLowerCase()) {
        return "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet."
    } else if(result.toLowerCase() === eight.toLowerCase()) {
        return "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building."
    } else if(result.toLowerCase() === nine.toLowerCase()) {
        return "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas."
    } else if(result.toLowerCase() === ten.toLowerCase()) {
        return "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels."
    } else if(result.toLowerCase() === eleven.toLowerCase()) {
        return "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies."
    } else if(result.toLowerCase() === twelve.toLowerCase()) {
        return "Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse."
    } else if(result.toLowerCase() === thirteen.toLowerCase()) {
        return "Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories."
    }
}

export default interpretResult;
