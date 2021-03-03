import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner';
import './item-details.css';
import ErrorButton from "../error-button/error-button";
import ErrorBoundary from "../error-boundary";

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
}

export {
  Record
}

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true,
  }
  
  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.setState({loading: true});
      this.updateItem();
    }
  }

  updateItem = () => {
    const {getData, itemId, itemImage} = this.props;

    if(!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: itemImage(item),
          loading: false
        })
      });
  }

  render() {
    const {item, image} = this.state;
    if(!item) {
      return <span>Select from list</span>
    }

    const {name} = this.state.item;

    return (
      <div className='person-details card'>
        <ErrorBoundary>
          <img className='person-image'
               src={image} alt=""/>

          <div className='card-body'>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {
                React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, {item})
                })
              }
            </ul>
            <ErrorButton/>
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}


