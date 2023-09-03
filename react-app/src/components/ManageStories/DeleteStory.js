import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as storyActions from '../../store/stories'
import DeleteStoryModal from '../DeleteStoryModal'

function DeleteStory({storyId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [storyToDelete, setStorytoDelete] = useState(null)
    const dispatch = useDispatch()

    const handleOpenDeleteModal = (story) => {
        setStorytoDelete(story)
        setShowDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false)
        setStorytoDelete(null)
    }

    return (
        <>
            {showDeleteModal && (
                <DeleteStoryModal onClose={handleCloseDeleteModal} />
            )}
        </>
    )
}

export default DeleteStory;
