import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";

const MainSection = ({ tickets, onSelect, tasks, onComplete }) => {
  return (
    <section className="container mx-auto px-4 mt-10">
      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">
          <h2 className="font-semibold mb-4">Customer Tickets</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {tickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
            ))}
          </div>
        </div>

        <TaskStatus tasks={tasks} onComplete={onComplete} />

      </div>
    </section>
  );
};

export default MainSection;
