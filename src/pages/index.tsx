import * as React from 'react'
import BaseHeading from '../components/heading'
import BaseCard from '../components/card'
import HorizontalStat from '../components/horizontal-stat'
import { FaUserMd } from '@react-icons/all-files/fa/FaUserMd'
import { FaCity } from '@react-icons/all-files/fa/FaCity'
import styled from 'styled-components'
import VerticalStat from '../components/vertical-stat'
import { FaToolbox } from '@react-icons/all-files/fa/FaToolbox'
import { FaUserNurse } from '@react-icons/all-files/fa/FaUserNurse'
import { FaHeartbeat } from '@react-icons/all-files/fa/FaHeartbeat'
import { FaSyringe } from '@react-icons/all-files/fa/FaSyringe'
import { FaHandHoldingHeart } from '@react-icons/all-files/fa/FaHandHoldingHeart'
import { FaProcedures } from '@react-icons/all-files/fa/FaProcedures'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

const oddColumnVariants = {
  initial: {
    y: '100vh',
  },
  animate: {
    y: 0,
    transition: { duration: 0.5, type: 'spring' },
  },
}

const evenColumnVariants = {
  ...oddColumnVariants,
  animate: {
    ...oddColumnVariants.animate,
    transition: { duration: 0.7, type: 'spring' },
  },
}

const cardVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.25, ease: 'easeInOut' },
  },
}

const Wrapper = styled.main`
  max-width: 1100px;
  margin-left: 45px;
  margin-right: 45px;
`

const AnalyticsStatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;
  margin-top: 20px;
`

const AddressText = styled.span`
  display: inline-block;
  margin-top: 20px;
  color: #0f063e;
  font-size: 18px;
`

const HospitalStatsWrapper = styled.div`
  display: flex;
`

const OddStatsColumn = styled(motion.div).attrs({
  variants: oddColumnVariants,
  initial: 'initial',
  animate: 'animate',
})`
  display: flex;
  flex-flow: column;
  width: calc((100vw - 460px) / 4);
  height: 300px;

  :not(:first-child) {
    margin-left: 15px;
  }
`

const EvenStatsColumn = styled(OddStatsColumn).attrs({
  variants: evenColumnVariants,
})``

const Card = styled(motion(BaseCard)).attrs({
  variant: 'outlined',
  variants: cardVariants,
  initial: 'initial',
  whileHover: 'hover',
})`
  flex: 1 0 auto;
  padding: 15px;
  cursor: pointer;

  :not(:first-child) {
    margin-top: 7px;
  }
`

const RecoveredCard = styled(Card)`
  background-color: #685cb7;
`

const DeathsCard = styled(Card)`
  background-color: #ffefd5;
`

const OverviewCard = styled(BaseCard)`
  background: #d3f5ff url('/three-people.png') no-repeat right;
  padding: 40px 50px;
`

const OverviewHeading = styled(BaseHeading)`
  font-size: 25px;
  margin-bottom: 20px;
`

const HospitalStatsHeading = styled(BaseHeading)`
  font-size: 21px;
  margin-top: 50px;
  margin-bottom: 25px;
`

const IndexPage = () => (
  <Wrapper>
    <Helmet>
      <title>NWMH - Dashboard</title>
    </Helmet>

    <OverviewHeading>Analytics Overview</OverviewHeading>
    <OverviewCard>
      <BaseHeading variant="h2">Northwestern Memorial Hospital</BaseHeading>
      <AddressText>
        251 E Huron St, Chicago, IL 606611, United States
      </AddressText>
      <AnalyticsStatsWrapper>
        <HorizontalStat
          icon={<FaUserMd />}
          message="Total Doctors"
          stat="3.8k"
        />
        <HorizontalStat
          icon={<FaCity />}
          message="Number of Cities"
          stat="21"
        />
      </AnalyticsStatsWrapper>
    </OverviewCard>

    <HospitalStatsHeading variant="h3">Hospital Stats</HospitalStatsHeading>
    <HospitalStatsWrapper>
      <OddStatsColumn>
        <Card>
          <VerticalStat
            message="Corona Cases"
            stat="289.2k"
            icon={<FaToolbox />}
          />
        </Card>
        <RecoveredCard>
          <VerticalStat
            message="Recovered"
            stat="98.7k"
            icon={<FaUserNurse />}
            isDark
          />
        </RecoveredCard>
      </OddStatsColumn>
      <EvenStatsColumn>
        <Card>
          <VerticalStat
            message="Active Cases"
            stat="96.3k"
            icon={<FaSyringe />}
            imageSrc="/space.png"
          />
        </Card>
      </EvenStatsColumn>
      <OddStatsColumn>
        <DeathsCard>
          <VerticalStat
            message="Deaths"
            stat="23.6k"
            icon={<FaHeartbeat />}
            messageColor="#0f063e"
          />
        </DeathsCard>
        <Card>
          <VerticalStat
            message="Testing Done"
            stat="321.4k"
            icon={<FaHandHoldingHeart />}
          />
        </Card>
      </OddStatsColumn>
      <EvenStatsColumn>
        <Card variant="outlined">
          <VerticalStat
            message="Beds Available"
            stat="2.8k"
            icon={<FaProcedures />}
            imageSrc="/sitting.png"
          />
        </Card>
      </EvenStatsColumn>
    </HospitalStatsWrapper>
  </Wrapper>
)

export default IndexPage
