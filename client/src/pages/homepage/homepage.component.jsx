import React, { Profiler } from 'react';

import Directory from '../../components/menu-item/directory/directory.component';
import { HomePageContainer } from './homepage.styles';


const HomePage = () => (
  <HomePageContainer>
    <Profiler id="Directory" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
      console.log({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
      });
    }}>
      <Directory />
    </Profiler>
  </HomePageContainer>
)

export default HomePage;