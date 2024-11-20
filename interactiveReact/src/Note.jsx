import NoteData from './NoteData'

export default function Note({data}) {
    return (
        <div className='note'>
            <NoteData title={data.title} isFavorite={data.favorite}/>
            {data.body}
        </div>
    )
}