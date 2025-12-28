import React from 'react'

const TaskStatus = ({ tasks, onComplete, resolved }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow h-fit">
      <h2 className="font-semibold text-lg">Task Status</h2>
      <p className="text-sm text-gray-500 mb-4">
        Select a ticket to add to Task Status
      </p>

      {tasks.map(task => (
        <div
          key={task.id}
          className="flex justify-between items-center bg-gray-100 p-3 rounded-md mb-2"
        >
          <p className="text-sm font-medium">{task.title}</p>
          <button
            onClick={() => onComplete(task)}
            className="bg-green-500 text-white px-3 py-1 rounded-md text-sm"
          >
            Complete
          </button>
        </div>
      ))}

      <div className="mt-6">
        <h3 className="font-semibold">Resolved Task</h3>
        {resolved.length === 0 ? (
          <p className="text-sm text-gray-500 mt-2">
            No resolved tasks yet.
          </p>
        ) : (
          resolved.map(t => (
            <p key={t.id} className="text-sm mt-1">
              ✅ {t.title}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatus;

