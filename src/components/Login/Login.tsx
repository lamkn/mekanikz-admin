import * as React from 'react'
import { Container, Col, Row } from 'reactstrap'

import { FormGroup, Label, InputGroup } from "@blueprintjs/core"
interface IProps extends React.Props<any> {
}

const Login: React.SFC<IProps> = (props: IProps) => {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <FormGroup>
            <Label>dddd</Label>
            <InputGroup
              placeholder={'Enter your password...'}
              type={'password'}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <FormGroup
            helperText="Helper text with details..."
            label="Password"
            labelFor="text-input"
          >
          </FormGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Login