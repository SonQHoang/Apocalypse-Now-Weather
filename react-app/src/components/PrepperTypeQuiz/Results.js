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
            // console.log("THIS WORKED")
            history.push('/survivors/current')
            return
        } else {
            // console.log("THIS DIDNT WORK")
            return "There was an error"
        }
    }

    return (
        <div>
            <h1>Your Result Is... </h1>
            <h2>{results.result}</h2>
            <p>{prepper_description}</p>
            {sessionUser ? (
                <>
                    <p>Set this as your prepper type?</p>
                    <button onClick={handleSubmit}>Yes!</button>
                </>
            ) : ''}
        </div>
    )
}

export default QuizResults;
