import React, { Component } from 'react';

class App extends Component{
  render(){
    const tuanzhang = "李云龙"
    return (
    <div>
      <h1>独立团{tuanzhang}</h1>
      <Jun yingzhang={'张大喵喵'}/>
      <Qi lianzhang={'赵德胜'}/>
    </div>)
  };
}

class Jun extends Component{
  constructor(props){
    super(props);
    this.state = {
      solids: ['护长','呼啦圈','三明治','武夷星']
    };
  }

  componentWillMount = () => {
    console.log('组件马上就要加载了');
  }

  componentDidMount = () => {
    console.log('组件已经加载完毕');
  }

   
  
  

  sayYes = ()=>{
    alert('Yes,sir');
    this.setState({
      solids: [...this.state.solids, '新兵蛋子' + Math.random(0, 1) * 10]
    });
  }
  
  render(){ 
    console.log('组件正在加载');
    return(
      <div>
        <div>大哥大{this.props.yingzhang}</div>
        <button onClick={this.sayYes}>是否遵从命令</button>
        <ul>
          {
            this.state.solids.length>0 && this.state.solids.map((solid, index)=>(
              <li key={index}>{solid}</li>
            ))
          }
        </ul>
      </div>
    );
  };
}

const Qi = ({lianzhang}) => (<div>{lianzhang}</div>);

export default App;
