import styled from 'styled-components'

interface Props {
  backgroundColor?: string
  fontWeight?: string
  height?: string
  borderRadius?: string
  display?: string
  justifyContent?: string
  alignItems?: string
  width?: string
  paddingLeft?: string
  paddingRight?: string
}

const Badge = styled.div`
  background-color: ${({ backgroundColor }: Props) =>
    backgroundColor || '#ffefd5'};
  font-weight: ${({ fontWeight }: Props) => fontWeight || 'bold'};
  height: ${({ height }: Props) => height || '25px'};
  border-radius: ${({ borderRadius }: Props) => borderRadius || '12.5px'};
  display: ${({ display }: Props) => display || 'flex'};
  justify-content: ${({ justifyContent }: Props) => justifyContent || 'center'};
  align-items: ${({ alignItems }: Props) => alignItems || 'center'};
  width: ${({ width }: Props) => width || 'max-content'};
  padding-left: ${({ paddingLeft }: Props) => paddingLeft || '15px'};
  padding-right: ${({ paddingRight }: Props) => paddingRight || '15px'};
`

export default Badge
