import * as React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import { Col, Row } from 'reactstrap'

interface IProps extends React.Props<any> {
}

const Home: React.SFC<IProps> = (props: IProps) => {
	return (
		<Row>
			<Col sm={3}>
				<Sidebar />
			</Col>
			<Col>
				<Content />
			</Col>
		</Row>
	)
}

export default Home