import * as React from 'react'
import { FunctionComponent } from 'react'
import TextInput from '../text-input'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope'
import { FaRegBell } from '@react-icons/all-files/fa/FaRegBell'
import ImageDropdown from '../image-dropdown'
import IconNotification from '../icon-notification'
import styled from 'styled-components'

interface Props {}

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-left: 45px;
  padding-right: 45px;
  margin-bottom: 50px;
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Inbox = styled(IconNotification).attrs({
  showDot: true,
  dotBottomOffset: '26px',
  dotLeftOffset: '16px',
})`
  cursor: pointer;
`

export const Notifications = styled(IconNotification).attrs({
  showDot: true,
  dotBottomOffset: '26px',
  dotLeftOffset: '11px',
  dotColor: '#685cb7',
})`
  cursor: pointer;
  margin-left: 20px;
`

export const VerticalRule = styled.div`
  border-right: 1px solid #f1f1f1;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
`

const TopBar: FunctionComponent<Props> = () => (
  <TopBarWrapper>
    <TextInput
      placeholder="Search for query"
      width="225px"
      icon={<FaSearch />}
    />
    <RightWrapper>
      <Inbox icon={<FaRegEnvelope size="21px" color="#222122" />} />
      <Notifications icon={<FaRegBell size="21px" color="#222122" />} />
      <VerticalRule />
      <ImageDropdown imageSrc="/profile.jpg" />
    </RightWrapper>
  </TopBarWrapper>
)

export default TopBar
