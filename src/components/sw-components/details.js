import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {SwapiContextConsumer} from "../swapi-service-context";


const PersonDetails = ({itemId}) => {
  return (
    <SwapiContextConsumer>
      {
        ({getPerson, getPeopleImage}) => {
          return(
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              itemImage={getPeopleImage}>

              <Record field='gender' label='Gender'/>
              <Record field='eyeColor' label='Eye Color'/>
            </ItemDetails>
          )
        }
      }
    </SwapiContextConsumer>
  )
}; 

const PlanetDetails = ({itemId}) => {

  return (
    <SwapiContextConsumer>
      {
        ({getPlanet, getPlanetImage}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPlanet}
              itemImage={getPlanetImage}>

              <Record field='diameter' label='Diameter'/>
              <Record field='population' label='Population'/>

            </ItemDetails>
          );
        }
      }
    </SwapiContextConsumer>
  )
}; 

const StarshipDetails = ({itemId}) => {

  return (
    <SwapiContextConsumer>
      {
        ({getStarship, getStarshipImage}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getStarship}
              itemImage={getStarshipImage}>

              <Record field='model' label='Model'/>
              <Record field='length' label='Length'/>
              <Record field='costInCredits' label='Cost'/>
            </ItemDetails>
          );
        }
      }
    </SwapiContextConsumer>

  )
}; 

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};