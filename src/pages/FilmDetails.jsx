import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilmDetails = () => {
    const {Filmid}= useParams ();
    const [film,setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${Filmid}`)
        .then(res => res.json())
        .then(film=> setFilm(film))
       


    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h1 className="text-center"> {Filmid}</h1>
                    <p></p>
                </div>
            </section>
        </main>
    );
}


export default FilmDetails;