import { useEffect, useState } from "react";

export function useFetch(url: string, method: "GET" | "POST" | "PUT" | "DELETE") {

    const [data, setData] = useState<unknown>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<unknown>()


    useEffect(() => {

        const controller = new AbortController()
        const { signal } = controller

        const config = {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            signal
        }
        async function fetchData(urlString: string) {
            try {
                const response = await fetch(urlString, config)
                if (!response.ok) {
                    throw new Error("Network response not ok")
                }
                const jsData = await response.json()
                setData(jsData)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }

        }

        fetchData(url)

        return () => {
            controller.abort()
            setIsLoading(true)
        }

    }, [url, method])






    return {
        data,
        isLoading,
        error
    }
}