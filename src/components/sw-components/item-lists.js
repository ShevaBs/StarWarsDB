import ItemList from '../item-list';
import {withData, withSwapiService, withChildComponent, compose} from '../hoc-helper';


const renderName = ({name}) => <span>{name}</span>,
      renderRotationAndName = ({name, rotationPeriod}) => <span>{`${name} (${rotationPeriod})`}</span>,
      renderModelAndName = ({name, model}) => <span>{`${name} (${model})`}</span>;

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};

const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};

const mapStarshipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData,
  withChildComponent(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData,
  withChildComponent(renderRotationAndName)
)(ItemList);


const StarshipList = compose(
  withSwapiService(mapStarshipMethodToProps),
  withData,
  withChildComponent(renderModelAndName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};