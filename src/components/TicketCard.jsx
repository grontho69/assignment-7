const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded shadow hover:shadow-md"
    >
      <div className="flex justify-between">
        <h3 className="font-semibold">{ticket.title}</h3>
        <span className="text-xs px-2 py-2 bg-green-100 text-green-600 rounded-2xl">
          {ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 my-2">{ticket.description}</p>

      <div className="text-xs text-gray-400 flex items-center gap-6">
        <span className={`font-medium p-1 ${ticket.priority=='High' ? 'bg-red-100 text-red-500':ticket.priority=='Medium' ? 'bg-yellow-100 text-yellow-500': 'bg-green-100 text-green-500'}`}>{ticket.priority}</span>
        <span className="ml-4">{ticket.customer }</span>
        <span className="ml-auto">{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
