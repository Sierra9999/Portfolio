import React from "react"
import BentoCard from "./BentoCard"

const TechStach = () => {
    return (
        <section className="tech-stack">
            <div className="tech-stack__content">
                <h1 className="red-gradient">I work with: </h1>
                <p>these are the tech I&#39;m most used to now, don&#39;t be shy to ask for something that isn&#39;t on the list.</p>
            </div>
            <div className="tech-stack__bento">
                <BentoCard IconName="HTML" ></BentoCard>
                <BentoCard IconName="CSS" ></BentoCard>
                <BentoCard IconName="JavaScript" ></BentoCard>
                <BentoCard IconName="React" ></BentoCard>
                <BentoCard IconName="next" ></BentoCard>
                <BentoCard IconName="tailwind" ></BentoCard>
                <BentoCard IconName="Typescript" ></BentoCard>
                <BentoCard IconName="Shopify" ></BentoCard>
                <BentoCard IconName="Git" ></BentoCard>
            </div>
        </section>
    )
}

export default TechStach