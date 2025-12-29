const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded shadow hover:shadow-md"
    >
      <div className="flex justify-between">
        <h3 className="font-semibold">{ticket.title}</h3>
        <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">
          {ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 my-2">{ticket.description}</p>

      <div className="text-xs text-gray-400 flex justify-between">
        <span>{ticket.priority}</span>
        <span>{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
