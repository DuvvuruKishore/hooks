import React from 'react';
import {Link} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


function Edit() {
    return (
        <div>
        <Form>
        <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="enter Name"></Input>
        </FormGroup>
        <Button type="submit">edit</Button>
        <Link to='/' className="btn btn-danger ml-2">cancel</Link>
        </Form>
      
        </div>
    );
}

export default Edit;