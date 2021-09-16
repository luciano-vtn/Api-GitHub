import React from 'react'
import * as S from './styled'

const RepositoryItem = ({name, linkToRepo, fullname}) => {
    return (
        <S.Wrapper>
            <h2>{name}</h2>            
            <br />
            
            <a href= {linkToRepo}
               target="_blank"
               rel="noopener noreferrer">
                {fullname}
            </a>
                         
        </S.Wrapper>    
    )
}

export default RepositoryItem
