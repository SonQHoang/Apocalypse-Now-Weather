const QuizResults = ({results}) => {
    console.log("RESULT: ", results)
    return (
        <div>
            <h1>Your Result Is... </h1>
            <h2>{results.result}</h2>
        </div>
    )
}

export default QuizResults;
