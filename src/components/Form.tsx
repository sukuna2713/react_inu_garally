import React, { useState } from "react"

type Props = {
    onFormSubmit: (breed: string) => void
}

type Breed = {
    id: string;
    name: string;
}

const Form = (props: Props) => {
    const breeds: Breed[] = [
        { id: 'shiba', name: '柴犬' },
        { id: 'akita', name: '秋田犬' },
        { id: 'husky', name: 'ハスキー' },
    ]
    const [breed, setBreed] = useState(breeds[0].id)

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        setBreed(event.target.value)
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onFormSubmit(breed)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <div className="select is-fullwidth">
                            <select name="breed" defaultValue="shiba" onChange={handleOnChange}>
                                {breeds.map((e) => (<option value={e.id}>{e.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-dark">
                            Reload
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form