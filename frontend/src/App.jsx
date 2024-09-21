import { useState, useEffect } from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import { groupBy, sortTickets } from "./helpers";
import Dropdown from "./components/DropDown";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users,setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState(() => {
    return localStorage.getItem("grouping") || "Status"; 
  });
  const [sortOption, setSortOption] = useState(() => {
    return localStorage.getItem("ordering") || "Priority";
  });


  const fetchData = async ()=>{
   const response =  await  fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
   const data = await response.json();
   setTickets(data.tickets);
   setUsers(data.users);
  }

  useEffect(() => {
    
    
     fetchData();
    
  }, []);

  const groupedTickets = groupBy(tickets, groupingOption,users);
  const sortedGroupedTickets = Object.entries(groupedTickets).map(
    ([group, tickets]) => {
      return {
        group,
        tickets: sortTickets(tickets, sortOption),
      };
    }
  );

  return (
    <div className="container">
      <Dropdown
        groupingOption={groupingOption}
        sortingOption={sortOption}
        onGroupingOptionChange={setGroupingOption}
        onSortingOptionChange={setSortOption}
      />
      <KanbanBoard  groups={sortedGroupedTickets} groupName={groupingOption} />
    </div>
  );
}

export default App;
