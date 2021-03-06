import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {withSwapiService} from "../hoc-helper";


const PersonDetails = (props) => {

  return (
    <ItemDetails {...props}>

      <Record field='gender' label='Gender'/>
      <Record field='eyeColor' label='Eye Color'/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    itemUrl: swapiService.getPeopleImage
  }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);