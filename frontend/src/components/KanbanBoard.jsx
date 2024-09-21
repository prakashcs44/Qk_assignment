import React from "react";
import TicketCard from "./TicketCard";
import { groupsIcon } from "../constants";
import defaultUserImg from "../assets/default_user.jpg"
function KanbanBoard({ groupName, groups }) {
  return (
    <div className="group-container">
      {groups.map(({ group, tickets }) => {
        return (
          <div>
            <header className="group-header">
              <div>
               
                {groupName !== "User"?(
                  <span>
                    {
                      groupsIcon
                        .find((g) => g.name === groupName)
                        .items.find((i) => i.name === group).icon
                    }
                  </span>
                ):(
                  <img
                  src={defaultUserImg|| "user-img"}
                  alt="user-img"
                  className="user-profile-image"
                />
                )}

                <h2>{group}</h2>
              </div>

              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z"
                    fill="#5C5C5E"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.9"
                    d="M4.5 7.34375H2.75C2.50838 7.34375 2.3125 7.53963 2.3125 7.78125V8.21875C2.3125 8.46037 2.50838 8.65625 2.75 8.65625H4.5C4.74162 8.65625 4.9375 8.46037 4.9375 8.21875V7.78125C4.9375 7.53963 4.74162 7.34375 4.5 7.34375Z"
                    fill="#5E5E5F"
                  />
                  <path
                    opacity="0.9"
                    d="M8.875 7.34375H7.125C6.88338 7.34375 6.6875 7.53963 6.6875 7.78125V8.21875C6.6875 8.46037 6.88338 8.65625 7.125 8.65625H8.875C9.11662 8.65625 9.3125 8.46037 9.3125 8.21875V7.78125C9.3125 7.53963 9.11662 7.34375 8.875 7.34375Z"
                    fill="#5E5E5F"
                  />
                  <path
                    opacity="0.9"
                    d="M13.25 7.34375H11.5C11.2584 7.34375 11.0625 7.53963 11.0625 7.78125V8.21875C11.0625 8.46037 11.2584 8.65625 11.5 8.65625H13.25C13.4916 8.65625 13.6875 8.46037 13.6875 8.21875V7.78125C13.6875 7.53963 13.4916 7.34375 13.25 7.34375Z"
                    fill="#5E5E5F"
                  />
                </svg>
              </div>
            </header>

            <div>
              {tickets.map((ticket) => (
                <TicketCard ticket={ticket} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KanbanBoard;
