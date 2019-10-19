import React, { Component } from "react";
import { GeoPresentational } from "./GeoPresentational";
export class GeoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      country: "Perú",
      isLoading: false
    };
    this.handlePosition = this.handlePosition.bind(this);
  }

  componentWillMount() {
    this.setState({
      isLoading: true
    });
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handlePosition);
    }
  }
  
  handlePosition({ coords }) {
    const { latitude, longitude } = coords;

    setTimeout(() => {
      this.setState({
        lat: latitude,
        lng: longitude,
        isLoading: false
      });
    }, 2000);
  }
  render() {
    const { lat, lng, isLoading } = this.state;
    return isLoading ? (
      <span>Loading...</span>
    ) : (
      <div>
        <div>{this.state.country}</div>
        <GeoPresentational lat={lat} lng={lng} />
      </div>
    );
  }
}
