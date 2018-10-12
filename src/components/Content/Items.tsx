import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
`

interface IProps extends React.Props<any> {
}

const Item = styled.div`
  height: 100px;
  width: 200px;
  background: red;

  margin-bottom: 10px;
`

const Content: React.SFC<IProps> = (props: IProps) => {

  const items = [
    {
      id: '1'
    },
    {
      id: '2'
    },
    {
      id: '3'
    }
  ]
  
  return (
    <Container>
      {
       items.map((item) => (
        <Item key={item.id}/>
       )) 
      }
    </Container>
  )
}

export default Content
