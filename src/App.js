import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Table from './components/Table/Table';
import SearchInput from './components/SearchInput/SearchInput';
import { AppContext } from './AppContext';
import { EventContext } from './components/Table/tableContext';

export default function App() {
  const [searchText, setSearchText] = React.useState("");

  const handleSearchInputChange = (ev) => {

    setSearchText(ev.currentTarget.value);

  }
  
  const appContext = {
    searchText
  };

  const eventContext = {
    onSearchInputChange: handleSearchInputChange
  };

  return (
    <AppContext.Provider value={appContext}>
      <EventContext.Provider value={eventContext}>
        <div className="App">
          <Header />
          <SearchInput />
          <Table />
        </div>
      </EventContext.Provider>
    </AppContext.Provider>
  );
}

