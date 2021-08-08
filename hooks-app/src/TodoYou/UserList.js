import React from 'react';
import {Link} from 'react-router-dom';
import {
ListGroup,
ListGroupItem,
Button
} from 'reactstrap';

function UserList(props) {
    return (
        
          <ListGroup>
          <ListGroupItem className="d-flex">
          <strong>user One</strong>
          <div className="ml-auto">
          <Link className="btn btn-warning mr-1" to="/edit/1">edit</Link>
          <Button color="danger">Delete</Button>
          </div>
          </ListGroupItem>
        
          </ListGroup>  
    
    );
}

export default UserList;