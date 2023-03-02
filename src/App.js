import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css' // eslint-disable import/no-webpack-loader-syntax, import/no-unresolved
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import data from './gfs2.json'
//import WeatherAnimationUtil from 'utils/WeatherAnimationutil'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vha2VybWFwYm94IiwiYSI6ImNsY3VlNnh4NTA4MjMzb252ajV5dzh4YjEifQ.i9SP6q1Ditpn3RaXKnNOgQ'

let windy;
let timeout;

const App = () => {
  debugger;
  const mapContainer = useRef(null)
  const mapcanvasRef =useRef();
  const [map, setMap] = useState(null)
  function resetWind(map) {
    const obj = getEventObject(map)
    const { zoomLevel, north, south, west, east, width, height } = obj
    mapcanvasRef.current.style.display = 'none'
    if (windy) {
      windy.stop()
    }
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(function () {
      let particleWidth = 0.8
      if (zoomLevel > 2) {
        particleWidth = 0.6
      }
      if (zoomLevel > 3) {
        particleWidth = 0.4
      }
      if (zoomLevel > 4) {
        particleWidth = 0.2
      }
      if (zoomLevel > 5) {
        particleWidth = 0.07
      }
      if (zoomLevel > 6) {
        particleWidth = 0.05
      }
      mapcanvasRef.current.style.display = 'initial'
      mapcanvasRef.current.width = width
      mapcanvasRef.current.height = height
      windy.start(
        [
          [0, 0],
          [width, height],
        ],
        width,
        height,
        [
          [west, south],
          [east, north],
        ],
        { particleLineWidth: particleWidth }
      )
    }, 500)
  }

  function getEventObject(map) {
    const canvasWidth = map.getCanvas().style.width
    const canvasHeight = map.getCanvas().style.height
    const dimensions = map.getBounds()
    const result = {
      width: parseInt(canvasWidth.slice(0, -2)),
      height: parseInt(canvasHeight.slice(0, -2)),
      north: dimensions.getNorth(),
      south: dimensions.getSouth(),
      west: dimensions.getWest(),
      east: dimensions.getEast(),
      zoomLevel: map.getZoom(),
    }
    return result
  }

  useEffect(() => {
    // if (map.current) return // initialize map only once
    // map.current = new mapboxgl.Map({
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      attributionControl: false,
      style: 'mapbox://styles/mapbox/dark-v10',

      zoom: 1.5,
    })
    setMap(map)
  }, [])

  useEffect(() => {
    if (data && map) {
      windy = new window.Windy({ canvas: mapcanvasRef.current, data: data })
      resetWind(map)
    }
  }, [map,data])

  useEffect(() => {
    if (map && windy) {
      map.on('resize', (e) => {
        resetWind(map)
      })

      map.on('move', (e) => {
        resetWind(map)
      })

      map.on('zoom', (e) => {
        resetWind(map)
      })
    }
  }, [map])

  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', height: '100%' }}>
        <div ref={mapContainer} style={{ width: '100%', height: '100vh' }}></div>
      </div>
      <div style={{ position: 'fixed', opacity: 1, top: 0, width: '100%', height: '100vh', zIndex: 1, pointerEvents: 'none', display: 'initial' }} class="wind-map-container">
        <canvas ref={mapcanvasRef} id="mapcanvas"></canvas>
      </div>

      {/* <WeatherAnimationUtil map={map} /> */}
    </>
  )
}
export default App
