import React from 'react';

const withChildComponent = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
}

export default withChildComponent;