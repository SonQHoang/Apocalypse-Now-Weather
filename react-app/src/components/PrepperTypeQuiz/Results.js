import { useSelector } from 'react-redux'
import { getPrepperDescription } from './resultfunction'
import { useHistory } from 'react-router-dom'

const QuizResults = ({results}) => {
    const sessionUser = useSelector(state => state.session.user)
    const prepper_description = getPrepperDescription(results.result)
    const history = useHistory()

    const handleSubmit = async () => {
        const userInfo = {
            prepper_type: results.result,
            prepper_description: prepper_description
        }
        const req = await fetch(`/api/users/${sessionUser.id}/update-prepper-type`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })

        if(req.ok) {
            history.push('/survivors/current')
            return
        } else {
            return "There was an error"
        }
    }

    return (
        <div id='result-parent-div'>
            <div id='result-header-div'>
                <h1>Your Result Is... </h1>
            </div>
            <div id='result-body-div'>
                <h2>{results.result}</h2>
                <p>{prepper_description}</p>
            </div>
            {sessionUser ? (
                <div id='update-prepper-type-container'>
                    <p>Set this as your prepper type?</p>
                    <button id='update-prepper-type-submit' onClick={handleSubmit}>Yes!</button>
                </div>
            ) : ''}
        </div>
    )
}

export default QuizResults;
