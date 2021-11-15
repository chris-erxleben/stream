import * as React from 'react'
import { FunctionComponent } from 'react'
import { FaHospital } from '@react-icons/all-files/fa/FaHospital'
import { FaThermometerThreeQuarters } from '@react-icons/all-files/fa/FaThermometerThreeQuarters'
import { FaUserNurse } from '@react-icons/all-files/fa/FaUserNurse'
import { FaUsers } from '@react-icons/all-files/fa/FaUsers'
import { FaCog } from '@react-icons/all-files/fa/FaCog'
import BaseBadge from '../badge'
import styled from 'styled-components'
import BaseHeading from '../heading'
import BaseCard from '../card'
import BaseButton from '../button'
import { BsCircleHalf } from '@react-icons/all-files/bs/BsCircleHalf'
import { Link } from 'gatsby'

const routes = [
  {
    label: 'Dashboard',
    uri: '/',
    icon: <FaThermometerThreeQuarters />,
  },
  {
    label: 'Dr. Profiles',
    uri: '/doctor-profiles',
    icon: <FaUserNurse />,
  },
  {
    label: 'Organization',
    uri: '/organization',
    icon: <FaHospital />,
  },
  {
    label: 'Department',
    uri: '/department',
    icon: <FaUsers />,
  },
  {
    label: 'Settings',
    uri: '/settings',
    icon: <FaCog />,
  },
]

interface Props {
  currentUri: string
}

const Badge = styled(BaseBadge)`
  margin-bottom: 15px;
`

const Heading = styled(BaseHeading).attrs({ variant: 'h3' })`
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  margin-top: 15px;
`

const IconWrapper = styled.div`
  margin-right: 10px;
`

const Card = styled(BaseCard)`
  width: 240px;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: auto;
  margin-bottom: 50px;
`

const Button = styled(BaseButton)`
  width: 200px;

  :not(:first-child) {
    margin-top: 15px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #fafafa;
  width: 325px;
`

const CompanyLogo = styled(BsCircleHalf).attrs({
  size: '30px',
  color: '#393738',
})`
  align-self: flex-start;
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: 50px;
`

const LeftNav: FunctionComponent<Props> = ({ currentUri }) => (
  <Wrapper>
    <CompanyLogo />
    {routes.map(({ label, uri, icon }, key) => (
      <Button key={key} as={Link} to={uri} active={currentUri === uri}>
        <IconWrapper>{icon}</IconWrapper>
        {label}
      </Button>
    ))}
    <Card>
      <Badge>NEW</Badge>
      <Heading>Northwestern Mem-Hospital</Heading>
      <Image src="/one-person.png" alt="One person" />
    </Card>
  </Wrapper>
)

export default LeftNav
