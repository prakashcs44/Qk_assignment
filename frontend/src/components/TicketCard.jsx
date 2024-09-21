import React from 'react';
import { priorityIcons } from '../constants/index.jsx';
import defaultUserImg from "../assets/default_user.jpg"

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      
      <header className="ticket-header">
        <h2 className="ticket-id">{ticket.id}</h2>
        <img
          src={defaultUserImg|| ticket.userId}
          alt={ticket.userId}
          className="user-profile-image"
        />
      </header>

     
      <div className="ticket-title">
        <h1>{ticket.title}</h1>
      </div>

     

     
      
       <div className="ticket-tags">
       <span className={`priority priority-${ticket.priority}`}>
          {priorityIcons[ticket.priority]?.icon}
        </span>
        {ticket?.tag?.map((tag, index) => (
          <p key={index} className="ticket-tag">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TicketCard;
