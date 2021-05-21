import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
export const Topics = () => {
  const match = useRouteMatch();
  console.log('useRouteMatchの中身');
  console.log(match.url);
  console.log(match.path);
  return (
    <div>
      <h2>ネスト</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v.state</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/components`}>
          <h3>components</h3>
        </Route>
        <Route path={`${match.path}/props-v-state`}>
          <h3>Props v.state</h3>
        </Route>
      </Switch>
    </div>
  )
}