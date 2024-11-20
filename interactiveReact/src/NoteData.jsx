import FavoriteStatus from "./FavoriteStatus";

export default function NoteData({title, isFavorite}) {

    return (
        <>
        <h3>{title}</h3>
        <FavoriteStatus isFavorite={isFavorite}/>
        </>
    )
}