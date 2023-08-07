import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FriendListContainer, Span } from './List.styled';
import FriendItem from 'components/ListItem/ListItem';

class FriendList extends PureComponent {
  areArraysIdentical(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }
  componentDidUpdate(prevProps) {
    if (!this.areArraysIdentical(prevProps.friends, this.props.friends)) {
      localStorage.setItem(
        this.props.storageId,
        JSON.stringify(this.props.friends)
      );
    }
  }

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