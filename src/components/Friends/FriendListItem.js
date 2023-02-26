export const FriendListItem = ({item}) =>{
        const { avatar, name, id  } = item;
      return (
          <div key={id}>
              {/* {isOnline ? <StatusIndicatorOnline>{isOnline}</StatusIndicatorOnline> : <StatusIndicatorOffline>{isOnline}</StatusIndicatorOffline>} */}
            
            <img src={avatar} alt="User avatar" />
            <p>{ name}</p>
        </div>
      )
    }
