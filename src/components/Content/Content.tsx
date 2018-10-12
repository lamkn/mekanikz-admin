import * as React from 'react'
import { CollapsibleList, Classes, MenuItem } from '@blueprintjs/core'
import styled from 'styled-components'
import Wizard from './Wizard'

const Container = styled.div`
  display: flex;
  flex: 1;
`

interface IProps extends React.Props<any> {
}



const Content: React.SFC<IProps> = (props: IProps) => {

  const renderBreadcrumb = (props) => {
    if (props.href != null) {
      return <a className={Classes.BREADCRUMB}>{props.text}</a>;
    } else {
      return <span className={`${Classes.BREADCRUMB} ${Classes.BREADCRUMB_CURRENT}`}>{props.text}</span>;
    }
  }
  
  return (
    <Container>
      <CollapsibleList
        className={Classes.BREADCRUMBS}
        dropdownTarget={<span className={Classes.BREADCRUMBS_COLLAPSED} />}
        visibleItemRenderer={renderBreadcrumb}
      >
        <MenuItem icon="folder-close" text="All files" href="#" />
        <MenuItem icon="folder-close" text="Users" href="#" />
        <MenuItem icon="folder-close" text="Jane Person" href="#" />
        <MenuItem icon="folder-close" text="My documents" href="#" />
        <MenuItem icon="folder-close" text="Classy dayjob" href="#" />
        <MenuItem icon="document" text="How to crush it" />
      </CollapsibleList>
      <Wizard />
    </Container>
  )
}

export default Content
