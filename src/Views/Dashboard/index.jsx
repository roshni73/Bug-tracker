
import React from 'react';
// import './Dashboard/index.css';

import '../Dashboard/index.css';
function Dashboard() {


  
  return (
    <div className="dashboard">
      <div className="ongoing-bugs">
        <h2>Ongoing Bugs</h2>
      </div>
      <div className="completed-bugs">
        <h2>Completed Bugs</h2>
      </div>
      <div className="todo-bugs">
        <h2>Todo Bugs</h2>
      </div>
    </div>
  );
}

export default Dashboard;