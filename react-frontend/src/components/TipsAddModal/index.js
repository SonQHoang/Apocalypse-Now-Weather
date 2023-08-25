import React, { useEffect, useState, useRef} from "react";
import "./TipsAddModal.css"

const TipsAddModal = ({onClose}) => {
    const modalOverlayRef = useRef()
    const titleInputRef = useRef()
    const [selectedCategory, setSelectedCategory] = useState("");
    const [tip, setTip] = useState("")

    const handleClickOutside = (e) => {
        if (modalOverlayRef.current === e.target) {
            onClose();
        }
    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const handleTipChange = (e) => {
        setTip(e.target.value)
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="add-tip-modal-overlay" ref={modalOverlayRef}>
            <div className="add-tip-modal-content">
                <h2>What tip would you like to add?</h2>
                <input placeholder="Title of your tip" type="text" ref={titleInputRef}/>

                <div>
                    {/* <label>Weather Category</label> */}
                    <select id="weatherCategory" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select the Weather Category</option>
                        <option value="Sunny">Sunny</option>
                        <option value="Rainy">Rainy</option>
                        <option value="Cloudy">Cloudy</option>
                    </select>
                </div>
                <div>
                    {/* <label htmlFor="tip">Leave your tip here</label> */}
                    <textarea id="tip" value={tip} onChange={handleTipChange}/>
                </div>
                {/* <div>Date Created</div> */}
                <button>Submit Your Tip</button>
            </div>
        </div>
    )
}

export default TipsAddModal