import Book from "./book"
export default function Library({ books }) {
    return (
        <div>
            <h2>National Library</h2>
            <p>address: </p>
            <p>Books Collection: {books.length}</p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book={ book}></Book>)
                }
            </ul>
        </div>
    )
}