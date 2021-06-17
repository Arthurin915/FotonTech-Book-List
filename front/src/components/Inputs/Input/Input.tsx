import React from 'react'
import { InputContainer, InputBox, InputBoxContainer, InputIcon, InputLabel } from './styles'
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({Icon, iconColor, labelText, ...rest}) => {
    return (
        <InputContainer>
            {labelText && <InputLabel>{labelText}</InputLabel>}
            <InputBoxContainer>
            {(Icon && iconColor) && <InputIcon Icon={Icon} color={iconColor}></InputIcon>}
            <InputBox {...rest}/>
            </InputBoxContainer>
        </InputContainer>
    )
}

export default Input
