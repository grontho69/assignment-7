import React from 'react'

const TicketCard = ({ticket,onSelect}) => {
  return (
     <div
      onClick={() => onSelect(ticket)}
      className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md"
    >
      <div className="flex justify-between">
        <h3 className="font-semibold text-sm">{ticket.title}</h3>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          Open
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
        {ticket.description}
      </p>

      <div className="mt-3 flex justify-between text-xs text-gray-500">
        <span className="text-red-500 font-semibold">
          {ticket.priority} PRIORITY
        </span>
        <span>{ticket.customer}</span>
      </div>
    </div>
  )
}

export default TicketCard
