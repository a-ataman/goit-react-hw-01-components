import user from './path/user'
import data from './path/data'
import friends from './path/friends'
import transactions from './path/transactions'

import { GlobalStyle } from 'components/GlobalStyles'
import {Layout} from 'components/Layout'
import {Profile}  from 'components/Profile/Profile'
import {Statistics}  from 'components/Statistics/Statistics'
import {FriendList} from 'components/Friends/FriendList'
import {TransactionHistory} from 'components/Transaction/TransactionHistory'

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistics title="Upload stats" stats={data} />

        <FriendList friends ={friends}/>
        <TransactionHistory items = {transactions}/>
    </Layout>
  );
};
