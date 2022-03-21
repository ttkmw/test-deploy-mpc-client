import { Fragment } from 'react';

import Header from './components/Layout/Header';
import BodyContainer from './components/Layout/BodyContainer';
import Aside from './components/Layout/Aside';
import GlobalNav from './components/GlobalNav/GlobalNav';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BodyContainer>
        <main>Main Content</main>
        <Aside>
          <GlobalNav />
        </Aside>
      </BodyContainer>
    </Fragment>
  );
};

export default App;
