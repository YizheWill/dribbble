import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInfo } from './Actions/UserActions';
import { Avatar } from '@material-ui/core';
function UserApi({ usr, getUser }) {
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log('here');
    getUser(params.userId);
  }, []);

  const to_render = () => {
    let lis = [];
    lis.push(<Avatar key={1} src={usr?.avatarUrl} />);
    lis.push(<li key={2}>username: {usr?.username}</li>);
    const { shots } = usr;
    console.log('shots', shots);
    shots?.forEach((shot) => {
      // console.log(shot.title);
      // console.log(shot.imageUrl);
      lis.push(
        <li key={shot[1]}>
          <h5>{shot[0]}</h5>
          {shot[2] ? <img src={shot[1]} /> : <video src={shot[1]} />}
        </li>
      );
    });
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
