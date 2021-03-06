import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {withSwapiService} from "../hoc-helper";


const PersonDetails = ({itemId, swapiService}) => {
  const {getPerson, getPeopleImage} = swapiService;

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

export default withSwapiService(PersonDetails);