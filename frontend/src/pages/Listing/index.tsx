import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/request";

function Listing() {

    axios.get(`${BASE_URL}/movies`)
        .then(response => {
            console.log(response.data);
        });

    return(
        <>
            <Pagination />
        
            <div className="contanier">
                <div className="row">
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>            
        </>
    );       
}

export default Listing;