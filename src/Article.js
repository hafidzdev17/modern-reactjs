import React from 'react'
import TitleArticle from './TitleArticle'
import ContentArticle from './ContentArticle'

const Article = ({ userLogin }) => {
    return (
        <div style={{ margin: '5px' }}>
            <TitleArticle text='Lorem ipsum dolor sit amet' />
            <ContentArticle dataLogin={userLogin}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed posuere mauris felis, at auctor nulla gravida vitae. Curabitur in
       tincidunt lectus.</p>
                <p>Nullam ultrices felis at tincidunt facilisis. Integer
                tempor pharetra pharetra. Proin accumsan tempor turpis quis viverra.
       Duis et sem non nisl commodo vestibulum. Nulla facilisi.</p>
            </ContentArticle>
        </div>
    )
}

export default Article
