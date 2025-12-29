import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Tickets from "./components/Tickets";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import Container from "./components/Container";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // ✅ Fetch tickets (correct way)
  const fetchTickets = async () => {
    try {
      const res = await fetch("Data.json"); // <-- move JSON to public folder
      const data = await res.json();
      setTickets(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load tickets");
    }
  };

  useEffect(() => {
    (async () => {
      await fetchTickets();
    })();
  }, []);

  // ✅ Add ticket to Task Status
  const handleAddToTask = (ticket) => {
    const alreadyAdded = inProgress.find(t => t.id === ticket.id);
    if (alreadyAdded) {
      toast.warning("Task already in progress");
      return;
    }

    setTickets(prev => prev.filter(t => t.id !== ticket.id));
    setInProgress(prev => [...prev, ticket]);
    toast.info("Added to Task Status");
  };

  // ✅ Complete task
  const handleCompleteTask = (ticket) => {
    setInProgress(prev => prev.filter(t => t.id !== ticket.id));
    setResolved(prev => [...prev, ticket]);
    toast.success("Task marked as resolved");
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
      <Banner
        inProgress={inProgress.length}
        resolved={resolved.length}
      />

      {/* Main Section */}
      <Container>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Customer Tickets */}
          <div className="lg:col-span-2">
            <h2 className="font-semibold text-lg mb-4">
              Customer Tickets
            </h2>

            <Tickets
              tickets={tickets}
              onAdd={handleAddToTask}
            />
          </div>

          {/* Task Status */}
          <TaskStatus
            tasks={inProgress}
            resolved={resolved}
            onComplete={handleCompleteTask}
          />
        </div>
      </Container>

      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
};

export default App;
