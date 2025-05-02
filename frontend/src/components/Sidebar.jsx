import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white p-4">
    <ul className="space-y-2">
      <li><Link to="/dashboard">Home</Link></li>
      <li><Link to="/dashboard/settings">Settings</Link></li>
      {/* Add more nav links as needed */}
    </ul>
  </div>
);

export default Sidebar;
