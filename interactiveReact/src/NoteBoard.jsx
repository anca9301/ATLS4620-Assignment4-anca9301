import Note from './Note'

export default function NoteBoard({notes}) {
    const items = []

    notes.forEach(element => {
        items.push(<Note data={element}/>)
    });

    return (
        <div className='note-board'>
            {items}
        </div>
    )   
}