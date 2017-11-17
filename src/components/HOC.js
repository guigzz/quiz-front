import React, { Component } from 'react';

const HOC = (WrappedComponent, passedProps)=>{
  return (
      class Route extends Component{
          render(){
              let props = Object.assign({}, this.props, passedProps)
              return  <WrappedComponent {...props} />
          }
      }
  )
}

export default HOC