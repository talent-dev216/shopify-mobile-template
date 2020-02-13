import './filterWarnings';
import './polyfills';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider as ThemeProvider } from 'exoflex';

import { client } from './graphql/client';
import { CustomTheme } from './constants/theme';
import AppNavigator from './navigation/AppNavigator';
import { Provider as AuthProvider } from '../src/helpers/useAuth';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={CustomTheme}>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
