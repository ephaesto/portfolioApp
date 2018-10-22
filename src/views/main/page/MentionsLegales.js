import React from 'react'
import TitleMain from '../component/TitleMain'
import MentionslegalesText from '../component/MentionslegalesText'

const MentionsLegales = () => (
  <main>
      <TitleMain title="Les Mentions Légales"  page='mentionsLegales' />
      <MentionslegalesText classSection="MentionslegalesText bgwhit" classContainer="container" />
  </main>
)

export default MentionsLegales
