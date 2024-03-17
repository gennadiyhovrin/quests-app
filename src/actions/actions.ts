export async function getPosts() {
    const res = await fetch('http://localhost:3001/quests')
  
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export async function getPost(id:number) {
    const res = await fetch('http://localhost:3001/quests/' + id)
  
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }