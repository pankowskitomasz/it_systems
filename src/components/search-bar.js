import React, { Component } from "react";
import Form from "../../node_modules/react-bootstrap/Form";

class SearchBar extends Component {
    render() {
        return (
            <Form>
                <Form.Group className="text-left">
                    <Form.Label className="text-secondary">
                        Search
                    </Form.Label>
                    <Form.Control type="text" 
                        className="rounded-pill"
                        placeholder="Enter text" 
                        onChange={this.props.hndUpdate.bind(this)}/>
                </Form.Group>
            </Form>
        );
    }
}

export default SearchBar;