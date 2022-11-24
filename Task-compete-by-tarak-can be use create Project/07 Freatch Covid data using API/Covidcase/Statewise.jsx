import React, { useEffect, useState } from 'react'

const Statewise = () => {


    const [coviddate, setCoviddate] = useState([]);

    const getCoviddata = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualdata = await res.json();
        //console.log (actualdata.statewise);

        setCoviddate(actualdata.statewise);


    }

    useEffect(() => {
        getCoviddata();
    }, []);



    return (
        <>
            <h1>India State wise covid case</h1>
            <table width="90%" border="1" align="center">
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recoverd</th>
                    <th>Lost</th>
                    <th>Active</th>
                    <th>Update</th>

                </tr>
                {

                    coviddate.map((Curelem, ind) => {

                        return (

                            <tr key={ind}>
                                <td>{Curelem.state}</td>
                                <td>{Curelem.confirmed}</td>
                                <td>{Curelem.recovered}</td>
                                <td>{Curelem.deaths}</td>
                                <td>{Curelem.active}</td>
                                <td>{Curelem.lastupdatedtime}</td>
                            </tr>

                        )

                    })

                }


            </table>
        </>
    )
}

export default Statewise
