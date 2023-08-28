const CreateNewStory = () => {

    const handleSubmit = () => {

    }

    return (
        <>
            <h1>Create a New Story</h1>
            <form id='create-story-form' onSubmit={handleSubmit}>
                <div>
                    <label id='title-label' htmlFor=''></label>
                </div>
            </form>
        </>
    )
}

export default CreateNewStory;
