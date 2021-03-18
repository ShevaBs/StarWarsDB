import React from 'react'
import './item-list.css';
import PropTypes from 'prop-types';

const ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel} = props;

  const items = data.map((item) => {
      const {id} = item;
      const label = renderLabel(item);

      return (
        <li className='list-group-item'
          key={id}
          onClick={() => onItemSelected(id)}>
          {label}
        </li>
      )
  });

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelected: PropTypes.func,
  children: PropTypes.func.isRequired
}

  return (
    <ul className='item-list list-group'>
      {items}
    </ul>
  )

}


export default ItemList;