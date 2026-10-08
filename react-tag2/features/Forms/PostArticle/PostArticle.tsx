'use client'

import { useState } from "react"

type FormTypes = {
    title: string
    body: string
}
export default function PostArticle() {

    const INIT_VALUE = { title: "", body: "", userId: 1 }
    const [formData, setFormData] = useState<FormTypes>(INIT_VALUE)
    const [status, setStatus] = useState<{ success: boolean, isSending: boolean, error: boolean, response?: { title: string, body: string } }>({ success: false, isSending: false, error: false })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        //sammelt input inhalte in formData
        const { value, name } = event.target
        setFormData({ ...formData, [name]: value })

    }


    async function sendToApi(body: FormTypes) {

        const config = {
            method: "POST",
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body)
        }
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", config)
            if (!response.ok) {
                throw new Error("Network failed")
            }

            const data = await response.json()
            console.log("new article", data)
            setStatus({ ...status, isSending: false, success: true, response: { ...data } })
        } catch (err) {
            console.log("error", err)
            setStatus({ ...status, isSending: false, error: true })
        }
    }


    function handleSubmit(event: React.SubmitEvent<HTMLInputElement>) {
        //finale daten an api schicken
        setStatus({ ...status, isSending: true })
        event.preventDefault()
        console.log("send data", formData)
        setTimeout(() => {
            sendToApi(formData)
        }, 3000)

        setFormData(INIT_VALUE)
    }

    return <section>
        <h2>Mein Neuer Artikel</h2>
        {status.isSending && <h1>artikel wird übermittelt</h1>}
        {status.error && <h1>Fehler ist passiert</h1>}
        {status.success && <h1>artikel wurde erfolgreich übermittelt</h1>}
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col my-3 p-3'>
                <label htmlFor='title'>Titel des Artikels</label>
                <input
                    className="border"
                    value={formData.title}
                    id="title"
                    type="text"
                    name="title"
                    onChange={handleChange} />
            </div>
            <div className='flex flex-col my-3 p-3'>
                <label>Inhalt</label>
                <textarea className="border" value={formData.body} name="body" cols={20} rows={10} onChange={handleChange}></textarea>
            </div>
            <button disabled={status.isSending} className="border p-3 rounded-lg" type="submit">Senden</button>
        </form>

        {status?.response && <div>
            <h2>Title: {status.response.title}</h2>
            <p>Inhalt: {status.response.body}</p></div>}

    </section>



}