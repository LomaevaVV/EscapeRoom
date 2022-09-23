import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../const';
import { createBrowserHistory } from "history";
import NotFoundPage from '../not-found/not-found-page';

const App = () => {
  const customHistory = createBrowserHistory();

  return (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router >
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
)};

export default App;
