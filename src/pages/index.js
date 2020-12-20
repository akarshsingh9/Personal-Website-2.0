import React from "react"
import Layout from "../components/Layout"
import SoftareProjects from "../../content/data/software-projects.yaml"
import WorkExp from "../../content/data/professional-career.yaml"
import AkarshImg from "../../content/assets/akarsh.jpg"

export default function Home() {
  return( 
    <Layout>
      <section>
      <h1>Hi, I'm Akarsh</h1>
      <img src={AkarshImg} alt="Akarsh's Pic" className="img"/>
      <p>
      Software Engineer & Content Writer
      Welcome to my personal website, where I drop notes and articles about things that I am interested in. There are no ads, sponsored posts, sign up for newsletter crap. Enjoy this clean and uncluttered space on the Internet. 
      </p>
      </section>      
      
    <div>
      <h2>Latest in Blog</h2>
    </div>
      
    <section className="Projects">
      <h2>Software Projects</h2>
      <div className="projects">
        {SoftareProjects.map((data, index) => {
          return (
            <div className="project" key = {`projects_${index}`}>
              <div>
                <a href={data.url} target="_blank" rel="noreferrer">
                <div className="icon"> {data.icon} </div>
                <h3>{data.name}</h3>
                </a>
                <div className="description">{data.description}</div>
              </div> 
            </div> 
          )     
        })}
      </div>
    </section>

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
