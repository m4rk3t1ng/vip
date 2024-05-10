import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/subastas/layout"
//import Layout from "../components/layout" como importar header sin link
import "../utils/globals.css"
import SubastasHome from "../components/subastas/subastasHome"


export interface Props {
  
}
 
export interface State {
  
}
 
class SubastasPage extends React.Component<Props, State> {

  render() { 
    return ( 
    <Layout >
        <SubastasHome></SubastasHome>
    </Layout> 
    );
  }
}
 
  




export default SubastasPage;



