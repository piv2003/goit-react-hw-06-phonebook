import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = ({ onChange, filter }) => {
  return (
    <LabelFilter>
      <span>Find contacts by name</span>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </LabelFilter>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
