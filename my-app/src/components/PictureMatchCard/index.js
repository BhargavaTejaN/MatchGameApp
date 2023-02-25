import './index.css'

const PictureMatchCard = props => {
    const {details,onClickMatchingImage} = props 
    const {id,thumbnailUrl} = details 

    const clickImage = () => {
        onClickMatchingImage(id)
    }

    return(
        <li className='picture-item'>
            <button className="image-button" onClick={clickImage} type="button">
                <img className='thumbnail-img' src={thumbnailUrl} alt="thumbnailUrl" />
            </button>
        </li>
    )
}

export default PictureMatchCard