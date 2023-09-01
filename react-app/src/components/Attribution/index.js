import React from 'react'
import './Attribution.css'
import iconAttributions from "./Resource-Attributions"

function Attribution() {

    return (
        <div className="attributions-outer-container">
            <div className="attributions-header-container">
                <div className="attributions-header">
                    <h1>Attributions</h1>
                </div>
            </div>
            <div className="thank-you-container">
                <h2>We would like to credit and give a big thank you for the following resources</h2>
                <div className="attribution-list">
                    <ul>
                        {Object.keys(iconAttributions).map(key => {
                            const attribution = iconAttributions[key];
                            console.log('attribution============>', attribution)
                            return (
                                <li key={key}>
                                    <a href={attribution.url}
                                        title={attribution.title}
                                        creator={attribution.creator}
                                        className="attribution-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p className="attribution-creator"> Creator: {attribution.creator}</p>
                                        <p className="attribution-title">{attribution.title}</p>
                                        <p className="attribution-link">{attribution.url}</p>
                                    </a>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Attribution