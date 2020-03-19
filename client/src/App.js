import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/action-generator';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/selectors';
import ErrorBoundary from './components/errorBoundary';
import Header from './components/Header';
import LazySpinner from './components/LazySpinner';

const Home = lazy(() => import('./pages/home'));
const Shop = lazy(() => import('./pages/shop'));
const Auth = lazy(() => import('./pages/Auth'));
const Checkout = lazy(() => import('./pages/Checkout'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<LazySpinner />}> 
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" render={() => currentUser ? <Checkout /> : <Redirect to="/authentication"/> } />
            <Route exact path="/authentication" render={() => currentUser ? <Redirect to="/" /> : <Auth />} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { checkUserSession })(App);