import React from 'react'
import { TextareaBox, TextareaBoxContainer, TextareaContainer, TextareaLabel } from './styles'
import { TextareaProps } from './types'

const Textarea: React.FC<TextareaProps> = ({labelText, ...rest}) => {
    return (
        <TextareaContainer>
            {labelText && <TextareaLabel>{labelText}</TextareaLabel>}
            <TextareaBoxContainer>
            <TextareaBox {...rest}/>
            </TextareaBoxContainer>
        </TextareaContainer>
    )
}

export default Textarea
