import styled, { css } from 'styled-components'

const Button = styled.button`
    outline: none;
    border: ${({ borderNone }) => (borderNone
        ? 'none'
        : '2px solid rgba( 0, 0, 0, 0.3 )'
    )};
  
    border-radius: 3px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: white;
    transition: all 0.5sec easy;
    ${props => props.primary && css`
        background-color: rgb( 13, 62, 243 );
        color: white;
    `}
    ${props => props.secondary && css`
        background-color: rgb( 243, 54, 13 );
        color: white;
    `}
    ${props => props.danger && css`
        background-color: red;
        color: white;
    `}
    &:hover,
    &:focus {
        border-width: 3px;
    }
`

export default Button