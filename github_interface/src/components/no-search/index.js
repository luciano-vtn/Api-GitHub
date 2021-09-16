import React from 'react'
import * as S from './styled'

const NoSearch = ()  => {
    return (
        <S.WrapperNoSearch>
            <h1>"Nenhum Usuario Pesquisado !"</h1><p></p>
            <h2>Por gentileza, adicionar o nome do usuário no campo acima para efetuar a busca!</h2>
        </S.WrapperNoSearch>
    )
}

export default NoSearch;
