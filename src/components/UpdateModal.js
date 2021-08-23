import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { withAuth0 } from "@auth0/auth0-react";

class UpdateModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.showingModal}>
                <Modal.Header>
                    <Modal.Title>update</Modal.Title>
                </Modal.Header>

                <Form style={{ padding: '20px' }} onSubmit={(e) => this.props.updateColor(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Color Title </Form.Label>
                        <Form.Control type="text" placeholder="Color Title " defaultValue={this.props.updateObj.title} name='title' />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Color Image</Form.Label>
                        <Form.Control type="text" placeholder="Color Image" defaultValue={this.props.updateObj.imageUrl} name='imageUrl' />
                    </Form.Group>

                    <Button style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }} variant="primary" type="submit">
                        Update
                    </Button>
                    <Button style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }} variant="secondary" onClick={this.props.showingModal}>
                        Close
                    </Button>

                </Form>
            </Modal>
        )
    }
}
export default withAuth0(UpdateModal)