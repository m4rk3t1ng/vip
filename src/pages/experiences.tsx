import React from "react"
import ExperiencesHome from "../components/experiences/experiencesHome"
import Layout from "../components/layout"
import "../utils/globals.css"


// const ExpericesPage = ({ intl }: { intl: InjectedIntl }) => (
//   // <Layout>
//   //   <SEO title={intl.formatMessage({ id: "title" })} />
//   // </Layout>
//   <div>
//     <ExperiencesHome />
//   </div>
// )

// export default injectIntl(ExpericesPage)

export interface Props {
  
}
 
export interface State {
  
}
 
class ExperiencesPage extends React.Component<Props, State> {
  state = { nothing: ''  }
  render() { 
    return ( 
    <Layout>
      <ExperiencesHome></ExperiencesHome>  
    </Layout> 
    );
  }
}
 
export default ExperiencesPage;
