import * as React from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
interface IProps extends React.Props<any> {
}

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  height: 400px;
`

const Wrapper = styled.div`
  height: 300%;
  width: 400px;
  transform: translateY(-1400px);
`

const Row = styled.div`
  height: 700px;
  width: 400px;
`

const Item = styled.div`
  height: 100px;
  width: 200px;
  background: red;

  margin-bottom: 10px;
`

const Items = styled.div`

`

const Wizard: React.SFC<IProps> = (props: IProps) => {
  const onDragEnd = (result) => {
    // todo
  }
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Row>
            <Item />
            <Item />
            <Item />
          </Row>
          <Row>
            <Item />
            <Item />
            <Item />
          </Row>
          <Row>
            <Droppable droppableId={'row_3'}>
              {provided => (
                <Items
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {provided.placeholder}
                </Items>
              )}
            </Droppable>
          </Row>
        </Wrapper>
      </DragDropContext>
    </Container>
  )
}

export default Wizard
