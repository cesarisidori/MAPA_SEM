
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "AreaZona2_1": {
            "type": "geojson",
            "data": json_AreaZona2_1
        }
                    ,
        "AreaZona1_2": {
            "type": "geojson",
            "data": json_AreaZona1_2
        }
                    ,
        "Semaforosexistentes_3": {
            "type": "geojson",
            "data": json_Semaforosexistentes_3
        }
                    ,
        "PropuestossAvenidasyPPales_4": {
            "type": "geojson",
            "data": json_PropuestossAvenidasyPPales_4
        }
                    ,
        "Pedidos_5": {
            "type": "geojson",
            "data": json_Pedidos_5
        }
                    ,
        "LISTADO2023_6": {
            "type": "geojson",
            "data": json_LISTADO2023_6
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_AreaZona2_1_0",
            "type": "fill",
            "source": "AreaZona2_1",
            "layout": {},
            "paint": {'fill-opacity': 0.35, 'fill-color': '#4a28d2'}
        }
,
        {
            "id": "lyr_AreaZona1_2_0",
            "type": "fill",
            "source": "AreaZona1_2",
            "layout": {},
            "paint": {'fill-opacity': 0.45, 'fill-color': '#7ea458'}
        }
,
        {
            "id": "lyr_Semaforosexistentes_3_0",
            "type": "circle",
            "source": "Semaforosexistentes_3",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'TIPO'], 'Cartel Onda Verde'], ['/', 8.928571428571427, 2], ['==', ['get', 'TIPO'], 'Escolar / Precaucional'], ['/', 7.142857142857142, 2], ['==', ['get', 'TIPO'], 'Semaforo'], ['/', 7.142857142857142, 2], 0], 'circle-color': ['case', ['==', ['get', 'TIPO'], 'Cartel Onda Verde'], '#f5feee', ['==', ['get', 'TIPO'], 'Escolar / Precaucional'], '#faba17', ['==', ['get', 'TIPO'], 'Semaforo'], '#85b66f', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'TIPO'], 'Cartel Onda Verde'], 1.0, ['==', ['get', 'TIPO'], 'Escolar / Precaucional'], 1.0, ['==', ['get', 'TIPO'], 'Semaforo'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'TIPO'], 'Cartel Onda Verde'], 1.4285714285714286, ['==', ['get', 'TIPO'], 'Escolar / Precaucional'], 1, ['==', ['get', 'TIPO'], 'Semaforo'], 1, 0], 'circle-stroke-color': ['case', ['==', ['get', 'TIPO'], 'Cartel Onda Verde'], '#628011', ['==', ['get', 'TIPO'], 'Escolar / Precaucional'], '#232323', ['==', ['get', 'TIPO'], 'Semaforo'], '#232323', '#000000']}
        }
,
        {
            "id": "lyr_PropuestossAvenidasyPPales_4_0",
            "type": "circle",
            "source": "PropuestossAvenidasyPPales_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 11.428571428571429, 2], 'circle-color': '#e3ffc6', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Pedidos_5_0",
            "type": "circle",
            "source": "Pedidos_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#ffffff', 'circle-opacity': 1.0, 'circle-stroke-width': 0.7142857142857143, 'circle-stroke-color': '#000000'}
        }
,
        {
            "id": "lyr_LISTADO2023_6_0",
            "type": "circle",
            "source": "LISTADO2023_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#487bb6', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#325780'}
        }
],
}