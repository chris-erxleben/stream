import styled, { css } from 'styled-components'

interface Props {
  textDecoration?: string
  color?: string
  borderRadius?: string
  height?: string
  display?: string
  alignItems?: string
  paddingLeft?: string
  paddingRight?: string
  transition?: string
  active?: boolean
}

const Button = styled.button`
  text-decoration: ${({ textDecoration }: Props) => textDecoration || 'none'};
  color: ${({ color }: Props) => color || '#4d4e80'};
  border-radius: ${({ borderRadius }: Props) => borderRadius || '22.5px'};
  height: ${({ height }: Props) => height || '45px'};
  display: ${({ display }: Props) => display || 'flex'};
  align-items: ${({ alignItems }: Props) => alignItems || 'center'};
  padding-left: ${({ paddingLeft }: Props) => paddingLeft || '20px'};
  padding-right: ${({ paddingRight }: Props) => paddingRight || '20px'};
  transition: ${({ transition }: Props) =>
    transition || 'color .15s ease-in-out'};

  ${({ active }: Props) =>
    active &&
    css`
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
    `}

  :hover {
    ${({ active }: Props) =>
      !active &&
      css`
        color: #f8bdc7 !important;
      `}
  }
`

export default Button
