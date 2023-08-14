import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FriendListContainer, Span } from './List.styled';
import FriendItem from 'components/ListItem/ListItem';

class FriendList extends PureComponent {
 
  render() {
    return (
      <>
        <Span>Your contacts:</Span>
        {this.props.friends.length === 0 ? (
          <p>No item found</p>
        ) : (
          <FriendListContainer>
            {this.props.friends.map(friend => (
              <FriendItem
                friend={friend}
                deleteContactById={this.props.deleteContactById}
                key={friend.id}
              />
            ))}
          </FriendListContainer>
        )}
      </>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    })
  ).isRequired,
 };

export default FriendList;