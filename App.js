/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";

import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { Box,Text } from "native-base";

const App = () => {
     return (
          <NativeBaseProvider>
               <Box width="100%" height="100%">
                    <Text color="indigo.500">Hello Budget App</Text>
               </Box>
          </NativeBaseProvider>
     );
};

export default App;
