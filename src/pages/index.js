import React from "react"
import Layout from "../components/Layout"
import SoftareProjects from "../../content/data/software-projects.yaml"
import WorkExp from "../../content/data/professional-career.yaml"
import AkarshImg from "../../content/assets/akarsh.jpg"

export default function Home() {
  return( 
    <Layout>
      Hi, I'm Akarsh
      Software Engineer & Content Writer
      Welcome to my personal website, where I drop notes and articles about things that I am interested in. There are no ads, sponsored posts, sign up for newsletter crap. Enjoy this clean and uncluttered space on the Internet. 
    
    <img src={AkarshImg} alt="Akarsh's Pic"/>

    <div>
      Latest in Blog
    </div>
      
    <div>
      <h2>Software Projects</h2>
      <ul>
        {SoftareProjects.map((data, index) => {
          return <li key = {`projects_${index}`}>{data.name} {data.icon} {data.description} {data.url}</li>
        })}
      </ul>
    </div>

    <div>
      <h2>Work Experience</h2>
      <ul>
        {WorkExp.map((data,index) => {
          return <li key = {`work_experience_${index}`}>{data.name} {data.profile} {data.year}</li>
        })}
      </ul>
    </div>

    </Layout>
  )
}
