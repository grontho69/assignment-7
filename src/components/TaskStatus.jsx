const TaskStatus = ({ tasks, resolved, onComplete }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold">Task Status</h2>
      <p className="text-sm text-gray-400 mb-4">
        Select a ticket to add
      </p>

      {tasks.map(task => (
        <div key={task.id} className="flex justify-between items-center mb-2">
          <span>{task.title}</span>
          <button
            onClick={() => onComplete(task)}
            className="text-xs px-3 py-1 bg-green-500 text-white rounded"
          >
            Complete
          </button>
        </div>
      ))}

      <hr className="my-4" />

      <h3 className="font-semibold">Resolved Task</h3>
      {resolved.length === 0 && (
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      )}
      {resolved.map(item => (
        <p key={item.id} className="text-sm">✔ {item.title}</p>
      ))}
    </div>
  );
};

export default TaskStatus;
