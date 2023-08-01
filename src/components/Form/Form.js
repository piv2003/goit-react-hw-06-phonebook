import PropTypes from 'prop-types';
import { Component } from 'react';
import { FormBox, InputName, InputTel, Button } from './Form.styled';

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
