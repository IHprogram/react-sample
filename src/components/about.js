import React from 'react'

// const About = () => {
//   return (
//     <React.Fragment>
//       <h2>About</h2>
//       <p>about.jsです</p>
//     </React.Fragment>
//   )
// }

class About extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <h2>About: {params.aboutId}</h2>
    )
  }
}

export default About