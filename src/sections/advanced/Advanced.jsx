import React, {useRef, useState} from 'react'
import Header from "../sharedSections/Header";
import Main from "../sharedSections/Main";

const Advanced = () => {
   const [showForm, setShowForm] = useState(false);
  return (
    <div>
       <Header />
        <Main
        setShowForm={setShowForm}
        title="Advanced Certification in GenAI & Multi Agent Systems"
        subtitle="Upskill to Lead AI-Driven Innovation with Generative AI & Agent-Based Systems"
        stats={[
          { value: "1:1", label: "Doubt support" },
          { value: "100%", label: "Live Classes" },
          { value: "10+", label: "Hands-on projects" },
        
        ]}
      />
    </div>
  )
}

export default Advanced
