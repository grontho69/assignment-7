const TaskStatus = ({ tasks, resolved, onComplete }) => {
  return (
    <div className="p-4 ">
      <h2 className="font-semibold mb-2">Task Status</h2>
      

      {tasks.map(task => (
        <div key={task.id} className=" flex gap-2 h-24 p-4 flex-col rounded shadow mb-2">
          <span>{task.title}</span>
          <button
            onClick={() => onComplete(task)}
            className="text-xs  px-3 py-1 bg-green-500 text-white rounded"
          >
            Complete
          </button>
        </div>
      ))}

      

      <h3 className="font-semibold mt-2">Resolved Task</h3>
      {resolved.length === 0 && (
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      )}
      {resolved.map(item => (
        <p key={item.id} className="text-sm flex gap-2 h-10 bg-blue-100 p-4 flex-col rounded shadow mb-2">{item.title}</p>
      ))}
    </div>
  );
};

export default TaskStatus;
