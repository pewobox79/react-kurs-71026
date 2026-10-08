import PostArticle from "@/features/Forms/PostArticle/PostArticle"

export default async function SlugPage({ params }:{params: Promise<{slug: string[]}>}) {

    const { slug } = await params

    switch (slug[1]) {
        case "new":
            return <PostArticle />
        default: return <h1>Keine seite vorhanden</h1>
    }
}