import ItemList from '../item-list';
import withData from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;

const withChildComponent = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
}

const renderName = ({name}) => <span>{name}</span>,
      renderRotationAndName = ({name, rotationPeriod}) => <span>{`${name} (${rotationPeriod})`}</span>,
      renderModelAndName = ({name, model}) => <span>{`${name} (${model})`}</span>;

const PersonList = withData(
  withChildComponent(ItemList, renderName),
  getAllPeople
);
const PlanetList = withData(
  withChildComponent(ItemList, renderRotationAndName),
  getAllPlanets
);
const StarshipList = withData(
  withChildComponent(ItemList, renderModelAndName),
  getAllStarships
);

export {
  PersonList,
  PlanetList,
  StarshipList
};