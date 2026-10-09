export default async function SingleUserPage({params}:{params: Promise<{id: string}>}){
    const {id} = await params
    return <h1>single user {id}</h1>
}