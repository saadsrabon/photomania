import PhotoCard from "./PhotoCard"

const PhotoList = ({data}) => {
  console.log(data)
  return (
    <div className="img-grid">
       {
          data?.photos?.map(photo => (
            <PhotoCard key={photo?.id} photo={photo} />
          ))
       }
    </div>
  )
}

export default PhotoList