import styled, { css } from 'styled-components'

interface Props {
  backgroundColor?: string
  borderRadius?: string
  borderColor?: string
  variant?: 'outlined'
}

const Card = styled.div`
  background-color: ${({ backgroundColor }: Props) =>
    backgroundColor || 'white'};
  border-radius: ${({ borderRadius }: Props) => borderRadius || '20px'};

  ${({ variant }: Props) =>
    variant === 'outlined' &&
    css`
      border: 1px solid ${({ borderColor }: Props) => borderColor || '#f1f1f1'};
    `}
  }
`

export default Card
