import * as React from 'react'
import { FunctionComponent, useState } from 'react'
import BaseProfile from './profile'
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown'
import { FaCaretUp } from '@react-icons/all-files/fa/FaCaretUp'
import styled from 'styled-components'

interface Props {
  imageSrc: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Profile = styled(BaseProfile)`
  margin-right: 5px;
`

const ImageDropdown: FunctionComponent<Props> = ({ imageSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Wrapper onClick={toggleExpanded}>
      <Profile src={imageSrc} />
      {isExpanded ? (
        <FaCaretUp color="#222122" />
      ) : (
        <FaCaretDown color="#222122" />
      )}
    </Wrapper>
  )
}

export default ImageDropdown
