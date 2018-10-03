import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
  <div>
Hello
    {name}
!
  </div>
);

Hello.defaultProps = {
  name: 'David',
};

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
