import React from 'react';
import API from './api.js';

class Weather extends React.Component {
    constructor(){
        super();
        this.state = {
            current: [],
            forecast: [],
            location: []
        }
    }

    componentDidMount(){
        API.getWeather().then((data) => {
            this.setState({
                forecast: data.forecast.forecastday,
                location: data.location
            })
        });


    }
    render(){
        return(
            (
                <div>
                    <h1>{this.state.location.name} {this.state.location.country}</h1>
                    {this.state.forecast.map((info) =>{
                        return (<div>
                                    <h3>{info.date}</h3>
                                    <img src={info.day.condition.icon}></img>
                                    {info.day.mintemp_c}/
                                    {info.day.maxtemp_c}
                                </div>)
                        }
                    )
                    }
                </div>
            )
        )
    }
}



export default Weather;