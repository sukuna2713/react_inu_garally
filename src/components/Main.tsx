import Gallery from "./Gallery"
import Form from "./Form"
import fetchImages from "./api"
import { useEffect, useState } from "react"

const Main = () => {
    const [urls, setUrls] = useState<string[]>([])
    useEffect(() => {
        fetchImages('shiba').then((urls) => {
            console.log(urls)
            setUrls(urls)
        })
    }, [])
    // フォームが送信されたときにselect要素で指定した犬種のURLを取得する
    const reloadImages = (breed: string) => {
        fetchImages(breed).then((urls) => {
            setUrls(urls)
        })
    }
    return (
        <main>
            <section className="section">
                <div className="container">
                    <Form onFormSubmit={reloadImages} />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <Gallery urls={urls} />
                </div>
            </section>
        </main>
    )
}

export default Main