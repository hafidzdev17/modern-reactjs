import React from 'react'

const ContentArticle = ({ dataLogin, children }) => {
    return (
        <div style={{ textAlign: 'justify' }}>
            {children}
            <p style={{ color: 'blue' }}>{dataLogin}</p>
        </div>
    )
}

export default ContentArticle
