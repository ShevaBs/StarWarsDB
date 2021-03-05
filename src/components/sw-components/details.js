import SwapiService from '../../services/swapi-service';
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPeopleImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      itemImage={getPeopleImage}>

      <Record field='gender' label='Gender'/>
      <Record field='eyeColor' label='Eye Color'/>
    </ItemDetails>
  )
}; 

const PlanetDetails = ({itemId}) => {

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      itemImage={getPlanetImage}>

      <Record field='diameter' label='Diameter'/>
      <Record field='population' label='Population'/>

    </ItemDetails>
  )
}; 

const StarshipDetails = ({itemId}) => {

  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      itemImage={getStarshipImage}>

      <Record field='model' label='Model'/>
      <Record field='length' label='Length'/>
      <Record field='costInCredits' label='Cost'/>
    </ItemDetails>
  )
}; 

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};