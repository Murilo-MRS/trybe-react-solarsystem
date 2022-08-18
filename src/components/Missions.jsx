import React from 'react';
import Title from './Title';
import MissionsCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((e) => (
          <MissionsCard
            key={ e.name }
            name={ e.name }
            year={ e.year }
            country={ e.country }
            destination={ e.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
