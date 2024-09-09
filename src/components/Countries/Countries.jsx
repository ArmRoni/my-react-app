import { useEffect, useState } from "react";
import Country from "../Coountry/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    
    const [visitedCountires, setVisitedCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then( res=>res.json())
        .then(data => setCountries(data))
    },[]);

    const handleVisitedCourtry = country => {
        console.log(country)
        console.log('add this to your visited country')
        const newVisitedCourntry = [...visitedCountires, country]
        setVisitedCountry(newVisitedCourntry)
    }
    return (
        <div>
            <h6>countries: {countries.length}</h6>

            <div>
                <h5>Visited Countries: {visitedCountires.length }</h5>
                <ul>
                    {
                        visitedCountires.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            
            <div className="country-container">
                {
                    countries.map(conutry =>
                        <Country 
                        country={conutry}
                        handleVisitedCourtry={handleVisitedCourtry}
                        key={conutry.cca3}
                           >
                        </Country>)
                }
            </div>

           
        </div>
    );
};

export default Countries;