import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    
    span {
        font-size: 24px;
        display: block;
        line-height: 30px;
    }
`

const LinghtText = styled.div`
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    margin-top: 54px;
`

const CallBtn = styled.div`
    width: 247px;
    height: 67px;
    background-color: #ffa14b;
    border: 0;
    border-radius: 30px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-top: 32px;
`

class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={5}>
                    <Repair>Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LinghtText>Оставьте заявку на бесплатную диагностику без очереди,
                                и получите защитное стекло, стоимостью 1000 рублей,
                                с установкой в подарок!
                    </LinghtText>
                    <CallBtn>Отправить заявку!</CallBtn>
                </Col>
                <Col lg={6} lgOffset={1}>

                </Col>
            </Row>
        )
    }
} 

export default Main