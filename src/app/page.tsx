import fs from "fs"

const getPostMetaData = () => { 
    const folder = "posts/"
    const files = fs.readdirSync(folder)
    

    return files
 }

export default function Home() {

  console.log(getPostMetaData());
  return (
    <main >
      <h1>Greetings 🤡</h1>
    </main>
  )
}
