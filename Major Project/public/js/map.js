	console.log(localAccesstoken);
    
    mapboxgl.accessToken = localAccesstoken;
    console.log("accessTaoken",mapboxgl.accessToken);
    
    const map = new mapboxgl.Map({
        // container: 'map', // container ID
        // center: [72, 19], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        // zoom: 9 // starting zoom
        container: 'map', // container ID
        // center: [72, 19], //Mumbai // starting position [lng, lat]. Note that lat must be set between -90 and 90
        center: [78.4, 17.4], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9// starting zoom
    });
