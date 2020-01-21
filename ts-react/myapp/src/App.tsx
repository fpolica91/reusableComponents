import React from "react";
import { Provider } from "react-redux";
import RepositoryList from "./repoList/index";
import store from "./store";
const App = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <p>Hello TypeScript</p>
//     </div>
//   );
// };

export default App;
