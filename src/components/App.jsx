import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistic/Statistic.jsx';
import { FriendList } from './Friends/Friends.jsx';
import {Transaction } from './TransactionHistory/TransactionHistory.jsx'



import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transaction from '../path/transaction.json';




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />  
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transaction item={transaction} />;
    </div>
  );
};
