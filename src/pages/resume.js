import React from "react"
import Layout from "../components/Layout"
import ResumeAkarsh from "../../content/data/resume_Akarsh.pdf" 

export default () => {
    return (
      <Layout className="resume-page">
          <div>
           <h1>Resume</h1>
           <embed src={ResumeAkarsh} type="application/pdf" width="100%" height="600px" />
          </div>
      </Layout>    
    )
}