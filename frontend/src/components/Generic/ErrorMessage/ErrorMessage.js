import React from 'react';
import { Wrapper } from './ErrorMessage.styles';
import PropTypes from 'prop-types';

const ErrorMessage = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

ErrorMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorMessage;
