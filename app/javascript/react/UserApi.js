import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInfo } from './Actions/UserActions';
import { Avatar } from '@material-ui/core';
function UserApi({ usr, getUser }) {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log('here');
    getUser(params.userId);
  }, []);

  const to_render = () => {
    let lis = [];
    for (const key in usr) {
      lis.push(
        <li key={key}>
          {key}: {usr[key]}
        </li>
      );
    }
    return (
      <div>
        <ul>{lis}</ul>
      </div>
    );
  };
  return <div>{user ? <h1>...loading</h1> : to_render(user)}</div>;
}

export default connect(
  (state) => ({ usr: state.user }),
  (dispatch) => ({
    getUser: (id) => dispatch(getUserInfo(id)),
  })
)(UserApi);
