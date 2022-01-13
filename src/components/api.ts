import {
    Decoder,
    object,
    string,
    number,
    array
} from '@mojotech/json-type-validation'

/**
 * 返答のデコーダ
 */
const responseDecoder: Decoder<DogApiResponse> = object({
    message: array(string()),
    status: string(),
})

/**
 * Dog APIからの返答をPromiseにて返す
 * @param breed
 * @returns
 */
const apiRequest = (breed: string): Promise<DogApiResponse> => (
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`)
        .then((r) => r.json())
        .then(responseDecoder.runPromise)
)

const fetchImages = async (breed: string) => (
    await (await apiRequest(breed)).message
)

export default fetchImages