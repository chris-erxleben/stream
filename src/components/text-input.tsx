import * as React from 'react'
import { cloneElement, FunctionComponent, HTMLProps, useState } from 'react'
import styled, { css } from 'styled-components'

interface Props extends HTMLProps<HTMLInputElement> {
  onSubmit?: (string) => void
  icon: JSX.Element
  iconLeft?: string
  iconBottom?: string
  iconColor?: string
}

interface StyledTextInputProps {
  height?: string
  border?: string
  borderRadius?: string
  paddingLeft?: string
  paddingRight?: string
  hasIcon?: boolean
}

const StyledTextInput = styled.input`
  height: ${({ height }: StyledTextInputProps) => height || '35px'};
  border: ${({ border }: StyledTextInputProps) =>
    border || '1px solid #f1f1f1'};
  border-radius: ${({ borderRadius }: StyledTextInputProps) =>
    borderRadius || '17.5px'};
  padding-left: ${({ paddingLeft }: StyledTextInputProps) =>
    paddingLeft || '30px'};
  padding-right: ${({ paddingRight, hasIcon }: StyledTextInputProps) =>
    paddingRight || hasIcon ? '50px' : '30px'};
  color: #c3c3c3;

  ::placeholder {
    color: #c3c3c3;
  }

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`

const TextInput: FunctionComponent<Props> = ({
  onSubmit,
  icon,
  iconLeft,
  iconBottom,
  iconColor,
  ...props
}) => {
  const [value, setValue] = useState('')

  const handleValueChange = ({ target: { value } }) => setValue(value)

  const handleSubmit = () => {
    if (!!value) {
      onSubmit(value)
      setValue('')
    }
  }

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      handleSubmit()
    }
  }

  const iconWithProps = icon
    ? cloneElement(icon, {
        size: '20px',
        color: iconColor || '#4d4e80',
        style: {
          position: 'relative',
          left: iconLeft || 'calc(100% - 360px)',
          bottom: iconBottom || '-5px',
          cursor: 'pointer',
        },
        onClick: () => handleSubmit(),
      })
    : null

  return (
    <div>
      <StyledTextInput
        value={value}
        onChange={handleValueChange}
        onKeyDown={handleKeyDown}
        hasIcon={!!iconWithProps}
        {...props}
      />
      {iconWithProps}
    </div>
  )
}

export default TextInput
