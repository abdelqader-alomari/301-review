import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Button } from 'react-bootstrap'
import './BestBooks.css';
import axios from 'axios'

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_SERVER}/colors`
    axios.
      get(url)
      .then(outcome => {
        this.setState({
          colors: outcome.data
        })
      }).catch(err => console.error(err))
  }

  addFavColor = (index) => {
    const addColor = {
      title: this.state.colors[index].title,
      imageUrl: this.state.colors[index].imageUrl
    }
    console.log(addColor)
    const url = `${process.env.REACT_APP_SERVER}/createFav`
    axios
      .post(url, addColor)
      .then(res => {
      }).catch();
  }



  render() {
    return (

      <div>
        <Row xs={2} md={4} className="g-3">
          {
            this.state.colors.length > 0 &&
            this.state.colors.map((color, idx) => {
              return (
                <Card style={{ width: '20rem' }} className="text-center mb-3">
                  <Card.Body>
                    <Card.Img src={color.imageUrl} />
                    <Card.Title>{color.title}</Card.Title>

                    <Button variant="primary" onClick={() => this.addFavColor(idx)}>add to favorite</Button>
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

export default Colors;
