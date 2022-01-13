import React, { useState } from "react"

type Props = {
    onFormSubmit: (breed: string) => void
}

const Form = (props: Props) => {
    const [breed, setBreed] = useState('shiba')

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
                                <option value="shiba">Shiba</option>
                                <option value="akita">Akita</option>
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