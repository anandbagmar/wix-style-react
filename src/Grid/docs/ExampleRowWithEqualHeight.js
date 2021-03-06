import React from 'react';

import { Container, Row, Col, Card, FormField, Input } from 'wix-style-react';

export default () => (
  <div style={{ background: '#F0F4F7', padding: 30 }}>
    <Container>
      <Row stretchViewsVertically>
        <Col span={8}>
          <Card stretchVertically>
            <Card.Header subtitle="subtitle" title="Header without Divider" />
            <Card.Divider />
            <Card.Content>
              <Row>
                <Col span={4}>{field()}</Col>
                <Col span={4}>{field()}</Col>
                <Col span={4}>{field()}</Col>
              </Row>

              <Row>
                <Col span={6}>{field()}</Col>
              </Row>

              <Row>
                <Col span={6}>{field()}</Col>
                <Col span={6}>{field()}</Col>
              </Row>
            </Card.Content>
          </Card>
        </Col>

        <Col span={4}>
          <Card stretchVertically>
            <Card.Header title="Side Card" />
            <Card.Divider />
            <Card.Content>
              <Row>
                <Col>{field()}</Col>
              </Row>

              <Row>
                <Col>{field()}</Col>
              </Row>

              <Row>
                <Col>{field()}</Col>
              </Row>
            </Card.Content>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

function field() {
  return (
    <FormField label="Text Input">
      <Input placeholder="You can type here" />
    </FormField>
  );
}
