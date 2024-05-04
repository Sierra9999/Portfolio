import React from "react"
import BentoCard from "./BentoCard"

const TechStach = () => {
    return (
        <section className="tech-stack">
            <div className="tech-stack__content">
                <h1 className="red-gradient">I work with: </h1>
                <p>these are the tech I'm most used to now, don't be shy to ask for something that isn't on the list.</p>
            </div>
            <div className="tech-stack__bento">
                <BentoCard IconName="HTML" ></BentoCard>
                <BentoCard IconName="CSS" ></BentoCard>
                <BentoCard IconName="JavaScript" ></BentoCard>
                <BentoCard IconName="React" ></BentoCard>
                <BentoCard IconName="Next" ></BentoCard>
                <BentoCard IconName="tailwind" ></BentoCard>
                <BentoCard IconName="Typescript" ></BentoCard>
                <BentoCard IconName="Shopify" ></BentoCard>
                <BentoCard IconName="Github" ></BentoCard>
            </div>
        </section>
    )
}

export default TechStach