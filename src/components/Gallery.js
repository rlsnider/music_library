
import GalleryItem from './GalleryItem'

function Gallery (props) {

    const display = props.data.map((item, index) => {
    return (
        <div key={index} >
            <GalleryItem item={item} />
        </div>
    )
   })
   return (
    <div>
        {display}
    </div>
   )
}
export default Gallery