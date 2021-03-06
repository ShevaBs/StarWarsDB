import React from 'react';
import {SwapiContextConsumer} from "../swapi-service-context";

const withSwapiService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiContextConsumer>
        {
          (swapiService) => (
            <Wrapped {...props} swapiService={swapiService}/>
          )
        }
      </SwapiContextConsumer>
    )
  }
};

export default withSwapiService;

