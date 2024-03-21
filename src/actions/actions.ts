import URL from "@/data/urls"

export async function getPosts() {
    const res = await fetch(URL.API+'/quests')
  
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export async function getPost(id:number) {
    const res = await fetch(URL.API+'/quests/' + id)
  
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }