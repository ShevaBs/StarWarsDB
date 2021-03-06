import React from 'react';
import {SwapiContextConsumer} from "../swapi-service-context";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
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

