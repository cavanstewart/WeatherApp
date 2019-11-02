import React from "react";
import { connect } from "react-redux";

class CityInfo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">City Info</div>
          {this.props.city == null ? (
            <div>Not Found</div>
          ) : (
            <div className="card-body">
              <h3>
                <img
                  src={`http://openweathermap.org/img/wn/${this.props.city.data.weather[0].icon}@2x.png`}
                  alt=""
                />
                {this.props.city.data.name}
              </h3>
              <div className="row">
                <div className="col-4">
                  Temperature (F)
                  <br />
                  {this.props.city.data.main.temp}
                </div>
                <div className="col-4">
                  Pressure
                  <br />
                  {this.props.city.data.main.pressure}
                </div>
                <div className="col-4">
                  Humidity
                  <br />
                  {this.props.city.data.main.humidity}
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  Lowest Temp (F)
                  <br />
                  {this.props.city.data.main.temp_min}
                </div>
                <div className="col-4">
                  Highest Temp (F)
                  <br />
                  {this.props.city.data.main.temp_max}
                </div>
                <div className="col-4">
                  Wind Speed
                  <br />
                  {this.props.city.data.wind.speed}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.apiStore.city
  };
};

export default connect(mapStateToProps)(CityInfo);
