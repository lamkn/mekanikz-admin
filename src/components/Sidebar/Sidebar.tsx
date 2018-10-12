import * as React from 'react'
import { Menu, MenuItem, Classes, Icon, MenuDivider } from '@blueprintjs/core'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;

  > ul {
    width: 100%;
  }
`

interface IProps extends React.Props<any> {
}

const SideBar: React.SFC<IProps> = (props: IProps) => {
  return (
    <Container>
      <Menu className={Classes.ELEVATION_1}>
        <MenuItem icon='home' text='Home' active/>
        <MenuDivider />
        <MenuItem icon='new-text-box' text='New text box' />
        <MenuItem icon='new-object' text='New object' />
        <MenuItem icon='new-link' text='New link' />
        <MenuDivider />
      <MenuItem icon='cog' labelElement={<Icon icon='share' />} text='Settings...' />
      </Menu>
    </Container>
  )
}

export default SideBar