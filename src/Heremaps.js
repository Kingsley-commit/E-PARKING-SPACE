import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const HereMap = () => {
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);
  const [map, setMap] = useState(null);
  const platformRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );

  useEffect(() => {
    const loadHereMapsScripts = () => {
      return new Promise((resolve, reject) => {
        if (window.H) {
          resolve();
          return;
        }

        const scriptUrls = [
          "https://js.api.here.com/v3/3.1/mapsjs-core.js",
          "https://js.api.here.com/v3/3.1/mapsjs-service.js",
          "https://js.api.here.com/v3/3.1/mapsjs-ui.js",
          "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js",
        ];

        let loadedScripts = 0;
        scriptUrls.forEach((url) => {
          const script = document.createElement("script");
          script.src = url;
          script.async = true;
          script.onload = () => {
            loadedScripts++;
            if (loadedScripts === scriptUrls.length) resolve();
          };
          script.onerror = () => reject(`Failed to load: ${url}`);
          document.body.appendChild(script);
        });
      });
    };

    loadHereMapsScripts()
      .then(() => {
        if (!window.H) {
          console.error("HERE Maps API failed to load.");
          return;
        }

        const platform = new window.H.service.Platform({
          apikey: "nRh1BF6u4hfYwqFPfhu8pRGBThEbZ_lXfokdteLmiYs",
        });
        platformRef.current = platform;

        const defaultLayers = platform.createDefaultLayers();
        const mapInstance = new window.H.Map(
          mapRef.current,
          defaultLayers.vector.normal.map,
          { zoom: 15, center: { lat: 6.5244, lng: 3.3792 } }
        );

        new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(mapInstance));
        window.H.ui.UI.createDefault(mapInstance, defaultLayers);
        setMap(mapInstance);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              mapInstance.setCenter({ lat: latitude, lng: longitude });

              const userMarker = new window.H.map.Marker({ lat: latitude, lng: longitude });
              mapInstance.addObject(userMarker);
            },
            (error) => console.error("Geolocation error:", error),
            { enableHighAccuracy: true }
          );
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (event) => {
    const query = event.target.value;
    if (!query || !platformRef.current) {
      setSuggestions([]);
      return;
    }

    const searchService = platformRef.current.getSearchService();
    searchService.autosuggest(
      { q: query, in: "countryCode:NGA" },
      (result) => {
        if (result.items) setSuggestions(result.items);
      },
      (error) => console.error("Error fetching suggestions:", error)
    );
  };

  const handleSelectLocation = (location) => {
    if (!map) return;

    const { position, title } = location;
    map.setCenter({ lat: position.lat, lng: position.lng });

    const marker = new window.H.map.Marker({ lat: position.lat, lng: position.lng });
    map.addObject(marker);

    setSuggestions([]);
    const updatedHistory = [...new Set([title, ...searchHistory])];
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleSearch = () => {
    const query = searchInputRef.current.value;
    if (!query || !platformRef.current) return;

    const geocoder = platformRef.current.getGeocodingService();
    geocoder.geocode(
      { searchText: query },
      (result) => {
        if (result.Response.View.length > 0) {
          const location = result.Response.View[0].Result[0].Location.DisplayPosition;
          handleSelectLocation({
            position: { lat: location.Latitude, lng: location.Longitude },
            title: query,
          });
        }
      },
      (error) => console.error("Error fetching location:", error)
    );
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div className="search_container">
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Search for a location..."
          className="search_input"
          onChange={handleInputChange}
        />
        <button className="search_btn" onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>

        {suggestions.length > 0 && (
          <ul className="dropdown">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelectLocation(suggestion)}>
                <i className="fa fa-location-dot"></i> {suggestion.title}
              </li>
            ))}
          </ul>
        )}

        {searchHistory.length > 0 && (
          <ul className="history">
            {searchHistory.map((item, index) => (
              <li key={index} onClick={() => handleSearch(item)}>
                <i className="fa fa-clock"></i> {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default HereMap;
