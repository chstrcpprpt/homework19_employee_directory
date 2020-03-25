import React from "react";
import { AppContext } from "../../AppContext";
import { EventContext } from "../Table/tableContext";

export default function SearchInput() {
  const appContext = React.useContext(AppContext);
  const eventContext = React.useContext(EventContext);

  return (
    <input
      value={appContext.searchText}
      onChange={eventContext.onSearchInputChange}
    />
  )
}