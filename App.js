import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import Routes, {RoutesDrawer} from './src/routes';



export default function App() {
  return (
    <Routes />,
    <RoutesDrawer />
  );
}

