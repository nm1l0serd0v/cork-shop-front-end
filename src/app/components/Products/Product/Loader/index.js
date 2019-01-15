import React from 'react'
import ContentLoader, { Facebook } from 'react-content-loader'

const loader = (props) => (
  <ContentLoader 
		height={475}
		width={500}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#d3d2ac"
		{...props}
	>
		<rect x="0"  y="70" rx="5" ry="5" width="600" height="700" />
		<rect x="400" y="13" rx="8" ry="8" width="100" height="25" /> 
		<rect x="10" y="13" rx="8" ry="8" width="200" height="25" /> 
	</ContentLoader>
)

export default loader
