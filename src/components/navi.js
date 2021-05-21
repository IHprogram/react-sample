import React from 'react';
import { useHistory } from 'react-router-dom';

const Nav = props => {
  const history = useHistory();
  const handleLink = path => history.push(path);
  const kakunin = () => {
    history.block('このページを離れますか?');
    handleLink('/users')
  }
  return (
    <nav>
      <button onClick={() => handleLink('/about/100')}>About</button>
      <button onClick={kakunin}>Users</button>
      <button onClick={() => handleLink('/')}>Home</button>
      <button onClick={() => handleLink('/topics')}>Topics</button>
    </nav>
  )
}

export default Nav;