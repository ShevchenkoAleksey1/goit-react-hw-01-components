// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

// --------------------------
import { Profile } from './Profile/Profile';
import user from '../user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

// import { FriendList } from './FriendList/FriendList';
// import friends from '../friends.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList friends={friends} />; */}
      <TransactionHistory items={transactions} />;
    </>
  );
};
