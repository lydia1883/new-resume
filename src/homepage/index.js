import React, { Component } from 'react';
import { Carousel, Row, Col } from 'antd';
import './styles.css';
import FirstChild from '../first-display';
import SecendChild from '../projectpage';
import ThirdChild from "../work-learn";
import FourthChild from "../description"


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Carousel>
                <Row style={{ height: '100%' }} className="firstChild">
                    <Col span={24} style={{ height: '100%' }}>
                        <FirstChild />
                    </Col>
                </Row>

                <div className="secondChild">
                    <Row>
                        <Col span={24}>
                            <SecendChild />
                        </Col>
                    </Row>
                </div>
                <div className="thirdChild">
                    <Row>
                        <Col span={24}>
                            <ThirdChild />
                        </Col>
                    </Row>
                </div>
                <div className="fourthChild">
                    <Row>
                        <Col span={24}>
                            <FourthChild />
                        </Col>
                    </Row>
                </div>
            </Carousel>
        )
    }


}

export default HomePage;