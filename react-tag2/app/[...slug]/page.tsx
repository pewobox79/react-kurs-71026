import PostArticle from "@/features/Forms/PostArticle/PostArticle"
import Parent from "@/features/StateLifiting/Parent"

export default async function SlugPage({ params }: { params: Promise<{ slug: string[] }> }) {

    const { slug } = await params

    switch (slug[1]) {
        case "new":
            return <PostArticle />
        case "lift":
            return <Parent />
        default: return <h1>Keine seite vorhanden</h1>
    }
}