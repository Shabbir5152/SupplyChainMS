// import React, { useEffect, useState } from 'react';
// import { getAlerts } from '../services/alertsService';

// const AlertsPage = () => {
//   const [alerts, setAlerts] = useState([]);

//   useEffect(() => {
//     fetchAlerts();
//   }, []);

//   const fetchAlerts = async () => {
//     const data = await getAlerts();
//     setAlerts(data);
//   };

//   return (
//     <div>
//       <h1>Alerts</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Alert ID</th>
//             <th>Message</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {alerts.map((alert) => (
//             <tr key={alert.AlertID}>
//               <td>{alert.AlertID}</td>
//               <td>{alert.Message}</td>
//               <td>{new Date(alert.CreatedAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AlertsPage;

import React, { useEffect, useState } from 'react';
import { getAlerts } from '../services/alertsService';

const AlertsPage = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    const data = await getAlerts();
    setAlerts(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Alerts</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Alert ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Message</th>
            <th className="px-4 py-2 text-left text-gray-600">Created At</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.AlertID} className="border-t border-gray-200">
              <td className="px-4 py-2 text-gray-700">{alert.AlertID}</td>
              <td className="px-4 py-2 text-gray-700">{alert.Message}</td>
              <td className="px-4 py-2 text-gray-700">{new Date(alert.CreatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertsPage;
