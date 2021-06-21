import mapboxgl from "mapbox-gl"
import React, { useState, useRef, useEffect } from "react";
import "./Map.css"
import "./styles"
import vehicleLocation from "../../api/vehicleCoordinates.json"
import { Container, Toolbar, Typography, Grid, RootRef, Box } from "@material-ui/core";
import useStyles from "./styles";


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
const Map = () => {

    const classes = useStyles();

    //    const mapContainerRef = useRef(null)
    const mapContainerRef = React.createRef()

    const [lng, setLng] = useState(18.413133)
    const [lat, setLat] = useState(-33.919113)
    const [zoom, setZoom] = useState(8)

    useEffect(() => {

        const map = new mapboxgl.Map({

            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom

        })

        //full screen
        map.addControl(new mapboxgl.FullscreenControl());

        // Add navigation control (the +/- zoom buttons)

        map.addControl(new mapboxgl.NavigationControl(), 'top-right')

        map.on('move', () => {

            setLat(map.getCenter().lat.toFixed(4))
            setLng(map.getCenter().lng.toFixed(4))
            setZoom(map.getCenter().lat.toFixed(2))
        })

        //Create markers
        vehicleLocation.forEach((marker) => {


            var el = document.createElement('div');
            el.className = 'marker';

            new mapboxgl.Marker(el, { rotation: marker.heading })
                .setLngLat([marker.longitude, marker.latitude])
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML('<h3>' + marker.heading + '</h3><p>' + marker.longitude + '</p>'))
                .addTo(map);

            console.table(marker);

        })

        //clean up on unmount
        return () => map.remove()
    }, [])



    return (

        <Box>

            <Grid className={classes.container}  >
                <Typography variant="body1" color="textSecondary" component="h6" style={{
                    color: "white", textAlign: "center", backgroundColor: "#ff5722"
                }} >
                    Longitude: {lng} | latitude {lat} | Zoom:  {zoom}
                </Typography>

                <Grid item ref={mapContainerRef} xs={12} sm={12} md={12} className={classes.map}>
                </Grid>

            </Grid>
        </Box>
    );
}

export default Map;
