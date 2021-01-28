import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from '@/Routes/Home';
import Profile from '@/Routes/Profile';
import Movie from '@/Routes/Movie';
import searchMovie from '../Routes/SearchMovie';
import Navigation from './Header/HeaderTemplate/HeaderTemplate';
import Confirm from '@/Routes/Confirm';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function AppRouter({ isLogin, setLogin }) {
  return (
    <Router>
      <Layout>
        <Header
          style={{
            backgroundColor: 'white',
            padding: 0,
            width: '100%',
            height: '64px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            position: 'fixed',
            borderBottom: '1px solid #52c41a',
          }}
        >
          <Navigation isLogin={isLogin} />
        </Header>
        <Content style={{ marginTop: '64px', backgroundColor: '#d9d9d9', padding: '16px 16px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/searchMovie" component={searchMovie} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/confirm" render={(props) => <Confirm setLogin={setLogin} {...props} />} />
            <Redirect from="*" to="/" />
          </Switch>
        </Content>
        <Footer style={{ backgroundColor: '#52c41a' }}>푸터입니다.</Footer>
      </Layout>
    </Router>
  );
}

export default AppRouter;
