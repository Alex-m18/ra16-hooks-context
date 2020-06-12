import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Details.css';
import useJsonFetch from '../../hooks/useJsonFetch';

function Details({ info }) {
  const { name } = info;
  const [user, setUser] = useState(info);

  const [{data, loading, error}] = useJsonFetch(`${process.env.REACT_APP_USERS_URL}/${info.id}.json`);
  if (data && (JSON.stringify(user) !== JSON.stringify(data))) setUser(data);
  const { avatar, details } = user;

  return (
    <div className='details'>
      { (!error) && <img className='details-img' alt={loading ? name : ''} src={loading ? '' : avatar}/> }
      <div className='details-name'>{name}</div>
      { (!error) && (
          (loading)
          ? <div className='detail'>{'Loading...'}</div>
          : details && Object.keys(details).map((o) =>
              <div className='detail' key={o}>
                {`${o[0].toUpperCase()}${o.slice(1)}: ${details[o]}`}
              </div>
            )
        )
      }
    </div>
  )
}

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
  }),
}

export default Details;
