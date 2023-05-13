import { InputField } from './Filter.styled';
import { Input } from 'utils/Utils.styled';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange, onBlur }) {
  return (
    <InputField>
      <p>Find contacts by name</p>
      <Input type="text" name="filter" value={value} onChange={onChange} onBlur={onBlur}/>
    </InputField>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
