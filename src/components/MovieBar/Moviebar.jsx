import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as SC from './Moviebar.styled';

export function Movies({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (movieName.trim() === '') {
      toast.error('Enter the name of the picture');
      return;
    }
    onSubmit(movieName);
    setMovieName('');
  };

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setMovieName(value.toLowerCase());
  };

  return (
    <SC.Moviebar>
      <SC.SearchForm onSubmit={handleSubmit}>
        <SC.SearchFormButton type="submit">
          <SC.SearchFormButtonLabel>
            <FcSearch style={{ width: 30, height: 30 }} />
          </SC.SearchFormButtonLabel>
        </SC.SearchFormButton>

        <SC.SearchFormInput
          onChange={handleInputChange}
          className="input"
          type="text"
          name="name"
          value={movieName}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SC.SearchForm>
    </SC.Moviebar>
  );
}

Movies.propTypes = {
  pictureName: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};
