import axios from 'axios';
import React from 'react';
import { Card, Row, Button } from 'react-bootstrap'
import UpdateModal from './UpdateModal'

class FavColors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favColors: [],
            updateObj: {},
            showUpdateModal: false,
        }
    }

    componentDidMount() {
        const url = `${process.env.REACT_APP_SERVER}/favColors`;
        axios
            .get(url)
            .then(response => {
                this.setState({
                    favColors: response.data
                })
            }).catch();
    }

    showingModal = (element) => {
        this.setState({
            updateObj: element,
            showUpdateModal: true
        })
    }
    deleteColor = (id) => {
        const url = `${process.env.REACT_APP_SERVER}/deleteFav/${id}`
        axios
            .delete(url)
            .then(response => {
                this.setState({
                    favColors: response.data
                })
            }).catch();
    }
    updateColor = (e) => {
        e.preventDefault();
        const colorId = this.state.updateObj._id
        const body = {
            title: e.target.title.value,
            imageUrl: e.target.imageUrl.value
        }
        const url = `${process.env.REACT_APP_SERVER}/updateFav/${colorId}`
        axios.
            put(url, body)
            .then(response => {
                const updateArray = this.state.favColors.map(color => {
                    if (color._id === colorId) {
                        color.title = response.data.title
                        color.imageUrl = response.data.imageUrl
                        return color
                    }
                    return color;
                });
                this.setState({
                    favColors: updateArray
                })
                this.showingModal({})
                this.setState({ showUpdateModal: false });

            }).catch(err => alert(err));
    }

    render() {
        return (
            <div>
                {this.showingModal &&
                    <UpdateModal
                        show={this.state.showUpdateModal}
                        showingModal={this.showingModal}
                        updateColor={this.updateColor}
                        updateObj={this.state.updateObj}
                    />
                }

                <Row xs={2} md={4} className="g-3">
                    {
                        this.state.favColors.length > 0 &&
                        this.state.favColors.map((color, idx) => {
                            return (
                                <Card style={{ width: '20rem' }} className="text-center mb-3">
                                    <Card.Body>
                                        <Card.Img src={color.imageUrl} />
                                        <Card.Title>{color.title}</Card.Title>
                                        <Button style={{ marginRight: '15px' }} variant="primary" onClick={() => this.deleteColor(color._id)}>Delete</Button>
                                        <Button variant="primary" onClick={() => this.showingModal(color)}>update</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}
export default FavColors