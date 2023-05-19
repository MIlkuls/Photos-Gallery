import PhotoGallery from "./photoGallery/photoGallery";


export const App = ()=>{
    return(
        <div className="d-flex align-items-center flex-column gap-5">
        <h1>Photo Gallery</h1>
        <PhotoGallery/>
        </div>
    )
}