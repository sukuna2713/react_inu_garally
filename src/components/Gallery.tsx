import Image from "./Image"
import Loading from "./Loading"

type Props = {
    urls: string[]
}

const Gallery = (prop: Props) => {
    //urlsがnullであればロード画面を表示
    return (
        prop.urls === null ? (
            <Loading />
        ) : (
            <div className="columns is-vcentered is-multiline">
                {prop.urls.map((url) => {
                    return (
                        <div key={url} className="column is-3">
                            <Image src={url} />
                        </div>
                    )
                })}
            </div>
        )
    )
}

export default Gallery