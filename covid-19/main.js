function updateMap() {
    console.log("updating map with realtime data")
    fetch('data.json')
        .then(Response => {
            return Response.json();
        })
        .then(res => {
            console.log(res);

            res.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                const cases = element.infected;

                if (cases > 235) {
                    colorValue = "red"
                } else {
                    colorValue = `rgb(${cases},0,0)`
                }


                // mark on the map
                //  const marker



                new mapboxgl.Marker({
                        draggable: false,
                        color: colorValue
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);



            });


        })
        .catch(error => {
            console.log(error);

        })
}

// updateMap()
const time = 6000;
setInterval(updateMap, time)