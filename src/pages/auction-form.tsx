import React from "react"
import AuctionForm from "../components/subastas/auction-form"
import Layout from "../components/layout"
import "../utils/globals.css"


export interface Props {
  
}
 
export interface State {
  
}
 
class AuctionHome extends React.Component<Props, State> {
  render() {
    return ( 
    <Layout>
      <AuctionForm></AuctionForm>  
    </Layout> 
    );
  }
}
 
export default AuctionHome;
