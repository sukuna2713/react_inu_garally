type Props = {
    src: string
}

const Image = (props: Props) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={props.src} alt="cute dog!" />
                </figure>
            </div>
        </div>
    )
}

export default Image