import TicketCard from "./TicketCard";

const Tickets = ({ tickets, onAdd }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onClick={() => onAdd(ticket)}
        />
      ))}
    </div>
  );
};

export default Tickets;
