import { priorityIcons } from "../constants";
export const groupBy = (tickets, option,users) => {
    switch (option) {
      case "Status":
        return tickets.reduce((acc, ticket) => {
          const { status } = ticket;
          if (!acc[status]) acc[status] = [];
          acc[status].push(ticket);
          return acc;
        }, {});
      case "User":
        return tickets.reduce((acc, ticket) => {
          const { userId } = ticket;
          const userName = users.find(user=>user.id===userId).name;
          if (!acc[userName]) acc[userName] = [];
          acc[userName].push(ticket);
          return acc;
        }, {});
      case "Priority":
        return tickets.reduce((acc, ticket) => {
          const  priority  = priorityIcons[ticket.priority].name;
          if (!acc[priority]) acc[priority] = [];
          acc[priority].push(ticket);
          return acc;
        }, {});
      default:
        return tickets;
    }
  };

export const sortTickets = (tickets, option) => {
    return [...tickets].sort((a, b) => {
      if (option === "Priority") {
        return b.priority - a.priority; // Higher priority first
      }
      if (option === "Title") {
        return a.title.localeCompare(b.title); // Alphabetical order
      }
    });
  };