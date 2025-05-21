import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";
import jsonServerProvider from "ra-data-json-server";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

//データを取得するクライアントとエンドポイントのベースURLの初期化
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App: React.FC = () => {
  return (
    // dataProviderでクライアントを渡す
    <Admin theme={theme} dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};
export default App;
