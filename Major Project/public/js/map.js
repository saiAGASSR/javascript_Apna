	console.log(localAccessToken);
    
    mapboxgl.accessToken = localAccessToken;
    console.log("accessTaoken",mapboxgl.accessToken);
    
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [72, 19], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
