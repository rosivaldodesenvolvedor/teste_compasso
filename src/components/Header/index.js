import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ContainerHeader, ItemHeader } from './style';

const Heade = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ContainerHeader>
            <ItemHeader>
              Rosivaldo
            </ItemHeader>
            <ItemHeader>
              <span>Rosivaldo de souza</span>
            </ItemHeader>
            <ItemHeader>
              <span>Rosivaldo silva</span>
            </ItemHeader>
          </ContainerHeader>
        </Col>
      </Row>
    </Container>
  );
}

export default Heade;