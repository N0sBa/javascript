const express = require('express');

const router = express.Router();

let locationStorage = {
    locations: []
};

router.post('/add-location', (req, res, next) => {
    const id = Math.random();
    locationStorage.locations.push({
        id: id, 
        address: req.body.address,
        coords: {
            lat: req.body.lat,
            lng: req.body.lng
        }
    });
    res.json({message: 'Storaged location!', locId: id});
    // res.send();
});

router.get('/location/:lid', (req, res, next) => {
    const locationId = req.params.lid;
    console.log(locationId);
    console.log(locationStorage.locations);
    const location = locationStorage.locations.find(loc => {
        console.log(typeof loc.id);
        console.log(typeof locationId);
        return loc.id == locationId;
    });
    console.log(location);
    if (!location) {
        return res.status(404).json({message: 'Not found!'});
    }
    res.json({address: location.address, coordinates: location.coords});
});

module.exports = router;