import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {withSwapiService} from "../hoc-helper";

const PlanetDetails = (props) => {

  return (
    <ItemDetails {...props}>

      <Record field='diameter' label='Diameter'/>
      <Record field='population' label='Population'/>

    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    itemUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);