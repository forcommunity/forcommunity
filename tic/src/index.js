import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './index.css'
class App1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          prevScrollpos: window.pageYOffset,
          class:"navbar navbar-expand-lg teal",
          class1:"ShowProduct",
          top:"return-to-top none",
          bottom:"return-to-bottom",
          height:1000000000
        };
      }
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        
      }
      handleScroll = () => {

        const currentScrollPos = window.pageYOffset;
        this.setState({
          prevScrollpos: currentScrollPos
        });
        // console.log(this.state.prevScrollpos)
        if (this.state.prevScrollpos>38){
          this.setState({
            class:"navbar navbar-expand-lg teal navbar2",
            class1:"ShowProduct mar",
            top:"return-to-top"
          })
        } else {
          this.setState({
            class:"navbar navbar-expand-lg teal",
            class1:"ShowProduct",
            top:"return-to-top none"
          })
        }
        if (this.state.height-this.state.prevScrollpos===979){
          this.setState({
            bottom:"return-to-bottom none"
          })
        } else {
          this.setState({
            bottom:"return-to-bottom"
          })
        }
        // console.log(this.state.height,this.state.prevScrollpos)
      };
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      componentWillUpdate() {
        const node = this.node;
        if (this.state.height!==node.scrollHeight){
          this.setState({
            height:node.scrollHeight
          })
        }
    }
      scrollToBottom=()=> {
        window.scrollTo({
          top:this.state.height ,
          behavior: "smooth"
        });
        // console.log(height)
      }
    render(){
        return(
            <div ref={(node) => { this.node = node; }}>
                <Header></Header>
                <Body class={this.state.class} class1={this.state.class1}></Body>
                <Footer></Footer>
                <div  className={this.state.top} onClick={this.scrollToTop} data-toggle="tooltip"><i className="icon-chevron-up"></i></div>
                <div  className={this.state.bottom} onClick={this.scrollToBottom} data-toggle="tooltip"><i className="icon-chevron-down"></i></div>
            </div>
        )
    }
} 

ReactDOM.render(<App1 />, document.getElementById('root'));

// ReactDOM.render(<Main/>,document.getElementById('root'));