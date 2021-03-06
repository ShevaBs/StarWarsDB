import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {withSwapiService} from "../hoc-helper";

const StarshipDetails = ({itemId, swapiService}) => {

const {getStarship, getStarshipImage} = swapiService;

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
};

export default withSwapiService(StarshipDetails);