import PropTypes from 'prop-types';
import {
  Card,
  Image,
  Img,
  Li,
  LiName,
  Statistics,
  List,
  Label,
  Quantity,
} from '../Profile/Profile.styled';
export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    stats,
  },
}) => {
  return (
    <Card>
      <Image>
        <Img src={avatar} alt="User avatar" class="avatar" />
        <LiName class="name">{username}</LiName>
        <Li class="tag">{tag}</Li>
        <Li class="location">{location}</Li>
      </Image>

      <Statistics>
        <List>
          <Label class="label">Followers</Label>
          <Quantity class="quantity">{stats.followers}</Quantity>
        </List>
        <List>
          <Label class="label">Views</Label>
          <Quantity class="quantity">{stats.views}</Quantity>
        </List>
        <List>
          <Label class="label">Likes</Label>
          <Quantity class="quantity">{stats.likes}</Quantity>
        </List>
      </Statistics>
    </Card>
  );
};
Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
  }),
};
