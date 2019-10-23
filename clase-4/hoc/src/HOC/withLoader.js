import React from 'react'

export default WrappedComponent => { id } => {
  return class extends React.Component {
    state = {
      data: null
    }

    componentDidMount() {
      
    }

    async fetchData() {
      const API = `myapi/${id}`
      const data = await fetch(API)

      this.setState({
        data,
      })
    }

    render() {
      return (
        <WrappedComponent test={isLoading} />
      )
    }
  }
}