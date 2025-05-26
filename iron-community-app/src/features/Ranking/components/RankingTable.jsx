import React from 'react';

const RankingTable = ({ users }) => {
  if (!users || users.length === 0) {
    return <p className="text-center text-gray-500">Nenhum usuário no ranking ainda.</p>;
  }

  // Sort users by points (descending)
  const sortedUsers = [...users].sort((a, b) => (b.points || 0) - (a.points || 0));

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Posição
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Usuário
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pontos
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nível
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedUsers.map((user, index) => (
            <tr key={user.id} className={index < 3 ? 'bg-yellow-50' : ''}> {/* Highlight top 3 */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {/* Placeholder Avatar */}
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm mr-3">
                    {user.name?.charAt(0).toUpperCase() || '?'}
                  </div>
                  <div className="text-sm font-medium text-gray-900">{user.name || 'Usuário Anônimo'}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.points || 0}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {/* Basic level calculation example */}
                {`Nível ${Math.floor((user.points || 0) / 100) + 1}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;

