import React, { Component } from 'react'
import axios from 'axios'

export class GetDataComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts:[],
            errorMessage:''
        }
    }
    componentDidMount(){
        axios
          .get('https://rickandmortyapi.com/api')
          .then(response =>{
            console.log(response)
            this.setState({posts:response.data})
          })
          .catch(error =>{
            console.log(error)
            this.setState({errorMessage:'Error retrieving data  '})
          })
    }
  render() {
    const {posts,errorMessage} = this.state
    return (
        <React.Fragment>
      <div>
        WelCome
      </div>
      <div>
      {
        posts.length
        ?posts.map(posts=><div key={posts.id}>{posts.title}</div>)
        :null }
        {errorMessage ? <div>{errorMessage}</div>:null}
       
      </div>
      </React.Fragment>
    )
  }
}

export default GetDataComponent
