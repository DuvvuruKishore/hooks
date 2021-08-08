import React from 'react';
import {Link} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

function AddItems(props) {
    return (
        <div>
           <Form>
           <FormGroup>
           <Label>Name</Label>
           <Input type="text" placeholder="enter Name"></Input>
           </FormGroup>
           <Button type="submit">submit</Button>
           <Link to='/' className="btn btn-danger ml-2">cancel</Link>
           </Form>
        </div>
    );
}

export default AddItems;