export default function Note({data}) {
    return (
        <div className='note'>
            <h3>{data.title}</h3>
            {data.body}
        </div>
    )
}