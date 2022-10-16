import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery () {
    const data = useContext (DataContext)

    const display = data.map((item, index) => {
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