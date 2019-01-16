import React from 'react'
import ContentLoader from 'react-content-loader'

const loader = (props) => (
  <ContentLoader 
		height={600}
		width={500}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="5" ry="5" width="100%" height="76%" />
		<rect x="0" y="510" rx="8" ry="8" width="200" height="25" /> 
		<rect x="80%" y="510" rx="8" ry="8" width="100" height="25" /> 
		<rect x="70%" y="510" rx="8" ry="8" width="7%" height="25" /> 
	</ContentLoader>
)

export default loader
