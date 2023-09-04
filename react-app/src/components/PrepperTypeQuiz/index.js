import './PrepperTypeQuiz.css'
import { useState } from 'react'
import interpretResult from './resultfunction'
import QuizResults from './Results'

const PrepperTypeQuiz = () => {
    const [questionOneAnswer, setQuestionOneAnswer] = useState(null)
    const [questionTwoAnswer, setQuestionTwoAnswer] = useState(null)
    const [questionThreeAnswer, setQuestionThreeAnswer] = useState(null)
    const [questionFourAnswer, setQuestionFourAnswer] = useState(null)
    const [questionFiveAnswer, setQuestionFiveAnswer] = useState(null)
    const [questionSixAnswer, setQuestionSixAnswer] = useState(null)
    const [questionSevenAnswer, setQuestionSevenAnswer] = useState(null)
    const [questionEightAnswer, setQuestionEightAnswer] = useState(null)
    const [questionNineAnswer, setQuestionNineAnswer] = useState(null)
    const [questionTenAnswer, setQuestionTenAnswer] = useState(null)
    const [questionElevenAnswer, setQuestionElevenAnswer] = useState(null)
    const [questionTwelveAnswer, setQuestionTwelveAnswer] = useState(null)
    const [questionThirteenAnswer, setQuestionThirteenAnswer] = useState(null)
    const [questionFourteenAnswer, setQuestionFourteenAnswer] = useState(null)
    const [questionFifteenAnswer, setQuestionFifteenAnswer] = useState(null)
    const [questionSixteenAnswer, setQuestionSixteenAnswer] = useState(null)
    const [questionSeventeenAnswer, setQuestionSeventeenAnswer] = useState(null)
    const [questionEighteenAnswer, setQuestionEighteenAnswer] = useState(null)
    const [questionNineteenAnswer, setQuestionNineteenAnswer] = useState(null)
    const [questionTwentyAnswer, setQuestionTwentyAnswer] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [finalResult, setFinalResult] = useState('')

    let submittedQuizResult

    const handleSubmit = (e) => {
        e.preventDefault()
        const userAnswers = {
            one: questionOneAnswer,
            two: questionTwoAnswer,
            three: questionThreeAnswer,
            four: questionFourAnswer,
            five: questionFiveAnswer,
            six: questionSixAnswer,
            seven: questionSevenAnswer,
            eight: questionEightAnswer,
            nine: questionNineAnswer,
            ten: questionTenAnswer,
            eleven: questionElevenAnswer,
            twelve: questionTwelveAnswer,
            thirteen: questionThirteenAnswer,
            fourteen: questionFourteenAnswer,
            fifteen: questionFifteenAnswer,
            sixteen: questionSixteenAnswer,
            seventeen: questionSeventeenAnswer,
            eighteen: questionEighteenAnswer,
            nineteen: questionNineteenAnswer,
            twenty: questionTwentyAnswer
        }

        const resultString = interpretResult(userAnswers)

        submittedQuizResult = {
            result: resultString.toString()
        }
        setFinalResult(submittedQuizResult)
        setIsSubmitted(true)
        return
    }

    return (
        <div id='quiz-wrapper'>
            <div id='quiz-parent-container'>
                <div>
                    <h1 id='quiz-h1'>What's Your Prepper Type?</h1>
                </div>
                <div>
                    <form id='quiz-form' onSubmit={handleSubmit}>
                        <div className='question-div'  id='question-one-div'>
                            <div id='question-one-text-div'>
                                <p className='question-text' id='question-one'>1. Do you own or have plans to build an underground bunker?</p>
                            </div>
                            <div id='question-one-answers-div'>
                                <div id='q-1-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-one-radio'
                                    id='radio-button-one'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-1-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-one-radio'
                                    id='radio-button-two'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-two-div'>
                            <div id='question-two-text-div'>
                                <p className='question-text' id='question-two'>2. How important is having an emergency fund to you?</p>
                            </div>
                            <div id='question-two-answers-div'>
                                <div id='q-2-a-1-div'>
                                    <input
                                    name='question-two-radio'
                                    id='radio-button-three'
                                    type='radio'
                                    onClick={() => setQuestionTwoAnswer("A")}
                                    required="true"
                                    />
                                    <p>Very Important</p>
                                </div>
                                <div id='q-2-a-2-div'>
                                    <input
                                    name='question-two-radio'
                                    id='radio-button-four'
                                    type='radio'
                                    onClick={() => setQuestionTwoAnswer("B")}
                                    />
                                    <p>Somewhat Important</p>
                                </div>
                                <div id='q-2-a-3-div'>
                                    <input
                                    name='question-two-radio'
                                    id='radio-button-five'
                                    type='radio'
                                    onClick={() => setQuestionTwoAnswer("C")}
                                    />
                                    <p>Not Important</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-three-div'>
                            <div id='question-three-text-div'>
                                <p className='question-text' id='question-three'>3. What type of weapon are you most likely to include in your preparedness kit?</p>
                            </div>
                            <div id='question-three-answers-div'>
                                <div id='q-3-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-three-radio'
                                    id='radio-button-six'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Firearm</p>
                                </div>
                                <div id='q-3-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-three-radio'
                                    id='radio-button-seven'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>Crossbow or Bow & Arrow</p>
                                </div>
                                <div id='q-3-a-3-div'>
                                    <input
                                    className='radio-input'
                                    name='question-three-radio'
                                    id='radio-button-eight'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("C")}
                                    />
                                    <p>Melee Weapons (e.g., knives, machetes)</p>
                                </div>
                                <div id='q-3-a-4-div'>
                                    <input
                                    className='radio-input'
                                    name='question-three-radio'
                                    id='radio-button-nine'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("D")}
                                    />
                                    <p>Non-lethal Weapons (e.g., tasers, pepper spray)</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-four-div'>
                            <div id='question-four-text-div'>
                                <p className='question-text' id='question-four'>4. Do you consider having multiple plans for multiple scenarios to be essential?</p>
                            </div>
                            <div id='question-four-answers-div'>
                                <div id='q-4-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-four-radio'
                                    id='radio-button-ten'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-4-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-four-radio'
                                    id='radio-button-eleven'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-five-div'>
                            <div id='question-five-text-div'>
                                <p className='question-text' id='question-five'>5. Do you have a quarantine protocol?</p>
                            </div>
                            <div id='question-five-answers-div'>
                                <div id='q-5-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-five-radio'
                                    id='radio-button-twelve'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-5-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-five-radio'
                                    id='radio-button-thirteen'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-six-div'>
                            <div id='question-six-text-div'>
                                <p className='question-text' id='question-six'>6. For home defense, which would you prefer?</p>
                            </div>
                            <div id='question-six-answers-div'>
                                <div id='q-6-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-six-radio'
                                    id='radio-button-fourteen'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Shotgun</p>
                                </div>
                                <div id='q-6-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-six-radio'
                                    id='radio-button-fifteen'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>Handgun</p>
                                </div>
                                <div id='q-6-a-3-div'>
                                    <input
                                    className='radio-input'
                                    name='question-six-radio'
                                    id='radio-button-sixteen'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("C")}
                                    />
                                    <p>Security System</p>
                                </div>
                                <div id='q-6-a-4-div'>
                                    <input
                                    className='radio-input'
                                    name='question-six-radio'
                                    id='radio-button-seventeen'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("D")}
                                    />
                                    <p>Traps & Alarms</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-seven-div'>
                            <div id='question-seven-text-div'>
                                <p className='question-text' id='question-seven'>7. Do you have offline backups of important documents?</p>
                            </div>
                            <div id='question-seven-answers-div'>
                                <div id='q-7-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-seven-radio'
                                    id='radio-button-eighteen'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-7-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-seven-radio'
                                    id='radio-button-nineteen'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-eight-div'>
                            <div id='question-eight-text-div'>
                                <p className='question-text' id='question-eight'>8. Do you focus on sustainable living practices?</p>
                            </div>
                            <div id='question-eight-answers-div'>
                                <div id='q-8-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-eight-radio'
                                    id='radio-button-twenty'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-8-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-eight-radio'
                                    id='radio-button-twenty-one'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-nine-div'>
                            <div id='question-nine-text-div'>
                                <p className='question-text' id='question-nine'>9. Which of the following makes you most anxious?</p>
                            </div>
                            <div id='question-nine-answers-div'>
                                <div id='q-9-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-nine-radio'
                                    id='radio-button-twenty-two'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Losing Access to Technology</p>
                                </div>
                                <div id='q-9-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-nine-radio'
                                    id='radio-button-twenty-three'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    required="true"
                                    />
                                    <p>Financial Instability</p>
                                </div>
                                <div id='q-9-a-3-div'>
                                    <input
                                    className='radio-input'
                                    name='question-nine-radio'
                                    id='radio-button-twenty-four'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("C")}
                                    required="true"
                                    />
                                    <p>Physical Harm to Self or Loved Ones</p>
                                </div>
                                <div id='q-9-a-4-div'>
                                    <input
                                    className='radio-input'
                                    name='question-nine-radio'
                                    id='radio-button-twenty-five'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("D")}
                                    required="true"
                                    />
                                    <p>Loss of Basic Resources</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-ten-div'>
                            <div id='question-ten-text-div'>
                                <p className='question-text' id='question-ten'>10. Have you constructed or purchased a Faraday cage?</p>
                            </div>
                            <div id='question-ten-answers-div'>
                                <div id='q-10-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-ten-radio'
                                    id='radio-button-twenty-six'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-10-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-ten-radio'
                                    id='radio-button-twenty-seven'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-eleven-div'>
                            <div id='question-eleven-text-div'>
                                <p className='question-text' id='question-eleven'>11. Do you have items specifically meant for bartering in a collapsed economy?</p>
                            </div>
                            <div id='question-eleven-answers-div'>
                                <div id='q-11-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-eleven-radio'
                                    id='radio-button-twenty-eight'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-11-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-eleven-radio'
                                    id='radio-button-twenty-nine'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-twelve-div'>
                            <div id='question-twelve-text-div'>
                                <p className='question-text' id='question-twelve'>12. What's the most crucial element in your preparedness plan?</p>
                            </div>
                            <div id='question-twelve-answers-div'>
                                <div id='q-12-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-twelve-radio'
                                    id='radio-button-thirty'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Security Measures</p>
                                </div>
                                <div id='q-12-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-twelve-radio'
                                    id='radio-button-thirty-one'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>Food and Water Supply</p>
                                </div>
                                <div id='q-12-a-3-div'>
                                    <input
                                    className='radio-input'
                                    name='question-twelve-radio'
                                    id='radio-button-thirty-two'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("C")}
                                    />
                                    <p>Emergency Evacuation Plans</p>
                                </div>
                                <div id='q-12-a-4-div'>
                                    <input
                                    className='radio-input'
                                    name='question-twelve-radio'
                                    id='radio-button-thirty-three'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("D")}
                                    />
                                    <p>Medical Supplies</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-thirteen-div'>
                            <di id='question-thirteen-text-div'>
                                <p className='question-text' id='question-thirteen'>13. Do you have an evacuation plan for natural disasters?</p>
                            </di>
                            <div id='question-thirteen-answers-div'>
                                <div id='q-13-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-thirteen-radio'
                                    id='radio-button-thirty-four'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-13-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-thirteen-radio'
                                    id='radio-button-thirty-five'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-fourteen-div'>
                            <div id='question-fourteen-text-div'>
                                <p className='question-text' id='question-fourteen'>14. Do you have antidotes or treatments for chemical or biological agents?</p>
                            </div>
                            <div id='question-fourteen-answers-div'>
                                <div id='q-14-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-fourteen-radio'
                                    id='radio-button-thirty-six'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-14-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-fourteen-radio'
                                    id='radio-button-thirty-seven'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-fifteen-div'>
                            <div id='question-fifteen-text-div'>
                                <p className='question-text' id='question-fifteen'>15. Is community-building a part of your preparedness plan?</p>
                            </div>
                            <div id='question-fifteen-answers-div'>
                                <div id='q-15-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-fifteen-radio'
                                    id='radio-button-thirty-nine'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-15-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-fifteen-radio'
                                    id='radio-button-forty'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-sixteen-div'>
                            <div id='question-sixteen-text-div'>
                                <p className='question-text' id='question-sixteen'>16. Which of the following best describes your ideal bug-out location?</p>
                            </div>
                            <div id='question-sixteen-answers-div'>
                                <div id='q-16-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-sixteen-radio'
                                    id='radio-button-forty-one'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Remote Wilderness</p>
                                </div>
                                <div id='q-16-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-sixteen-radio'
                                    id='radio-button-forty-two'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>Small Isolated Community</p>
                                </div>
                                <div id='q-16-a-3-div'>
                                    <input
                                    className='radio-input'
                                    name='question-sixteen-radio'
                                    id='radio-button-forty-three'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("C")}
                                    />
                                    <p>Urban Safehouse</p>
                                </div>
                                <div id='q-16-a-4-div'>
                                    <input
                                    className='radio-input'
                                    name='question-sixteen-radio'
                                    id='radio-button-forty-four'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("D")}
                                    />
                                    <p>Underground Bunker</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-seventeen-div'>
                            <div id='question-seventeen-text-div'>
                                <p className='question-text' id='question-seventeen'>17. Do you have renewable energy sources like solar or wind?</p>
                            </div>
                            <div id='question-seventeen-answers-div'>
                                <div id='q-17-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-seventeen-radio'
                                    id='radio-button-forty-five'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-17-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-seventeen-radio'
                                    id='radio-button-forty-six'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-eighteen-div'>
                            <div id='question-eighteen-text-div'>
                                <p className='question-text' id='question-eighteen'>18. Do you think about community alliances in case of extraterrestrial threats?</p>
                            </div>
                            <div id='question-eighteen-answers-div'>
                                <div id='q-18-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-eighteen-radio'
                                    id='radio-button-forty-seven'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-18-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-eighteen-radio'
                                    id='radio-button-forty-seven'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-nineteen-div'>
                            <div id='question-nineteen-text-div'>
                                <p className='question-text' id='question-nineteen'>19. Do you own weapons specifically for a hypothetical zombie apocalypse?</p>
                            </div>
                            <div id='question-nineteen-answers-div'>
                                <div id='q-19-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-nineteen-radio'
                                    id='radio-button-forty-eight'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>Yes</p>
                                </div>
                                <div id='q-19-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-nineteen-radio'
                                    id='radio-button-forty-nine'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-div' id='question-twenty-div'>
                            <div id='question-twenty-text-div'>
                                <p className='question-text' id='question-twenty'>20. How would you prefer to transport your emergency supplies?</p>
                            </div>
                            <div id='question-twenty-answers-div'>
                                <div id='q-20-a-1-div'>
                                    <input
                                    className='radio-input'
                                    name='question-twenty-radio'
                                    id='radio-button-fifty'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("A")}
                                    required="true"
                                    />
                                    <p>In a Vehicle</p>
                                </div>
                                <div id='q-20-a-2-div'>
                                    <input
                                    className='radio-input'
                                    name='question-twenty-radio'
                                    id='radio-button-fifty-one'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("B")}
                                    />
                                    <p>On Foot with a Backpack</p>
                                </div>
                                <div id='q-20-a-3-div'>
                                    <input
                                    className='radio-input'
                                    name='question-twenty-radio'
                                    id='radio-button-fifty-two'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("C")}
                                    />
                                    <p>Using an Animal (e.g., horse, mule)</p>
                                </div>
                                <div id='q-20-a-4-div'>
                                    <input
                                    className='radio-input'
                                    name='question-twenty-radio'
                                    id='radio-button-fifty-three'
                                    type='radio'
                                    onClick={() => setQuestionOneAnswer("D")}
                                    />
                                    <p>By Boat</p>
                                </div>
                            </div>
                        </div>
                        <div id='submit-button-container'>
                            <button type='submit' id='quiz-submit-button'>Get Results</button>
                        </div>
                    </form>
                    <div>
                        {isSubmitted ? (
                                        <div>
                                            <QuizResults results={finalResult} />
                                        </div>
                                    )
                        : ''}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default PrepperTypeQuiz;
