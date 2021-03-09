import React from 'react';
import {SwapiContextConsumer} from "../swapi-service-context";

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiContextConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);
            return (
              <Wrapped {...props} {...serviceProps}/>
            )
          }
        }
      </SwapiContextConsumer>
    )
  }
};

export default withSwapiService;

