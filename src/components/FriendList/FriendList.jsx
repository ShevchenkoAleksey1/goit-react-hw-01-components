import PropTypes from 'prop-types';
import { Ulll, Liii } from '../FriendList/FriendList.style';
const FriendList = ({ friends }) => {
  return (
    <Ulll class="friend-list">
      {friends.map(friend => (
        <Liii class="item" key={friend.id}>
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p class="name">{friend.name}</p>
        </Liii>
      ))}
    </Ulll>
  );
};
FriendList.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendList;
