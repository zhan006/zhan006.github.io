import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import article from '../json/article.json'

const Article = ()=>{
    const params = useParams()
    return (
        <div className="md article paper">
            <ReactMarkdown>{article[params.title]}</ReactMarkdown>
        </div>
        
    )
}
export default Article;