import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((e) => (
            <PlanetCard key={ e.name } planetName={ e.name } planetImage={ e.image } />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
