import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as storyActions from '../../store/stories'
import UpdateStoryModal from '../UpdateStoryModal'

function UpdateStory({storyId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [storyToDelete, setStorytoDelete] = useState(null)
    const dispatch = useDispatch()

    const handleOpenDeleteModal = (story) => {
        setStorytoDelete(story)
        setShowDeleteModal(true)
    }

    const handleCloseUpdateModal = () => {
        setShowDeleteModal(false)
        setStorytoDelete(null)
    }

    return (
        <>
            {showDeleteModal && (
                <UpdateStoryModal
                    onClose={handleCloseUpdateModal}
                />
            )}
        </>
    )
}

export default UpdateStory;
