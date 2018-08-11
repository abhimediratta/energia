import React from 'react';

import ErrorText from '../ErrorText';

const InputError = ({error}) => {
  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }
  return '';
};

export default InputError;