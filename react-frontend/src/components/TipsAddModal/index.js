import React, { useEffect, useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import {createTip} from "../../store/tips"
import "./TipsAddModal.css"

const TipsAddModal = ({onClose, onAddTip }) => {
    // const history = useHistory()
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const titleInputRef = useRef()
    const [title , setTitle] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const [body, setBody] = useState("")
    const user = useSelector(state => state.session.user)

    const handleClickOutside = (e) => {
        if (modalOverlayRef.current === e.target) {
            onClose();
        }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const handleTipChange = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = async (e) => {
        const newTip = {
            title: title,
            weather_category: selectedCategory,
            body: body,
        }
        dispatch(createTip(newTip, user.id));

        setSelectedCategory("");
        setBody("");
        setTitle("")
        onAddTip(newTip)
        onClose();
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    return (
        <div className="add-tip-modal-overlay" ref={modalOverlayRef}>
            <div className="add-tip-modal-content">
                <h2>What tip would you like to add?</h2>
                <input placeholder="Title of your tip" type="text" ref={titleInputRef} value={title} onChange={handleTitleChange}/>

                <div>
                    {/* <label>Weather Category</label> */}
                    <select id="weatherCategory" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select the Weather Category</option>
                        <option value="Natural_Disasters">Natural Diasters </option>
                        <option value="Supernatural_Phenomena">Supernatural Phenomena</option>
                        <option value="Mystical_Elements">Mystical Elements</option>
                        <option value="Paranormal_Chaos">Paranormal Chaos</option>
                    </select>
                </div>
                <div>
                    {/* <label htmlFor="tip">Leave your tip here</label> */}
                    <textarea id="tip" value={body} onChange={handleTipChange}/>
                </div>
                {/* <div>Date Created</div> */}
                <button onClick={handleSubmit}>Submit Your Tip</button>

            </div>
        </div>
    )
}

export default TipsAddModal