import { useState} from 'react';
import './Country.css'

const Country = ({country, handleVisitedCourtry}) => {

    const [visited, setVisited] = useState(false)
    const handleVisided = () =>{
        setVisited(!visited)
    }

    // const passWithParams = () =>{handleVisitedCourtry(country)}
    //   const passWithParms = () => handleVisitedCourtry(country)

    const {name, flags, population, area, cca3 } = country;
    return (
        <div className={`country ${visited && "visited"}`}>
            <h5 style={{color: visited ? "yellow" : "green"}}>{name.common}</h5>
            <img src={flags.png} alt="" />
            <h4>area:{area}</h4>
            <h4>Population:{population}</h4>
            <h5>Country Code:{cca3}</h5>
            {/* <button onClick={passWithParms}>Mark visited</button> */}
            <button onClick={() => handleVisitedCourtry(country)}>Mark visited</button>
            <br/>
            <button onClick={handleVisided}>{visited ? "visited" : "gongin"}</button>

            {visited ? 'i have visited this country' : 'i want to visited this country'}
        </div>
    );
};

export default Country;