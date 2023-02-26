import {FriendListItem} from 'components/Friends/FriendListItem'

export const FriendList =({friends}) =>
{
     return (
     <div>
<ul className="friend-list">
{friends.map(friend => {    
    return(
<li className="item" key ={friend.id}>  
<FriendListItem item = {friend}/>
</li>);
})}
</ul>
</div>);
};

