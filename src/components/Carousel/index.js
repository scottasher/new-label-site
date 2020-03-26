import React, { Component } from 'react';
import { ROOT_URL } from '../../defaultSettings';
import { Carousel, Icon } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.less';

class CarouselHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowsVisible: true
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }

  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }

  handleClick(e) {
    return e;
  }

  renderAds(data) {
    return data.map(obj => {
      return (
        <div key={obj.id}>
          <Link to={obj.link}>
            <img className='responsive' src={obj.image} alt={obj.image} />
          </Link>
        </div>
      )
    })
  }

  render() {
    const defaultProps = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    const iconStyle = {
      fontSize: 23
    };

    const { data } = this.props;
    const { arrowsVisible } = this.state;
    console.log(this.props)
    return (
      <div className='carousel-container'>
        <Carousel ref={node => (this.carousel = node)} {...defaultProps}>
          {this.renderAds(data)}
        </Carousel>
        {
          arrowsVisible ? (
            <div className='overlay'>
              <LeftCircleOutlined className='arrowLeft' onClick={this.previous}/>
              <RightCircleOutlined className='arrowRight' onClick={this.next}/>
            </div>
          ) : null
        }  
      </div>
    );
  }
}

export default CarouselHome;
