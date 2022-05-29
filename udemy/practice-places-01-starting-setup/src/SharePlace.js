import {Modal} from './UI/Modal';
import {Map} from './UI/Map';
import {getCoordsFromAddress, getAddressFromCoordinates} from './Utility/Location';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    this.shareBtn.addEventListener('click', this.sharePlaceHandler);
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  sharePlaceHandler() {
    const sharedLinkInputEl = document.getElementById('share-link');
    if(!navigator.clipboard) {
      sharedLinkInputEl.select();
      return;
    }
    navigator.clipboard.writeText(sharedLinkInputEl.value).then(()=>{
      alert('Copied into clipboard!')
    }).catch(err=> {
      alert(err);
    });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=AIzaSyBQ9JYf27r61a1i73h1RsX3ikiD2a9MK5E`).then(response => {
    //   return response.json();
    // }).then(data => {
    //   console.log(data);
    // });
    fetch('http://localhost:3000/add-location', {
      method: 'POST',
      body: JSON.stringify({
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      const locationId = data.locId;
      this.shareBtn.disabled = false;
      const sharedLinkInputEl = document.getElementById('share-link');
      sharedLinkInputEl.value = `${location.origin}/my-place?location=${locationId}`;
    });
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Location feature is not support on your browser. Please upgrde your browser!');
      return;
    }
    const modal = new Modal('loading-modal-content', 'Please upgrade your browser!');
    modal.show();
    navigator.geolocation.getCurrentPosition(async successResult => {
      modal.hide();
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude
      };
      const address = await getAddressFromCoordinates(coordinates); 
      this.selectPlace(coordinates, address);
      console.log(coordinates);
    }, error => {
      modal.hide();
      alert('Could not locate you unfortunately. Please enter address manually!');
    });
  };

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert("Invalid address enter!");
      return;
    }
    const modal = new Modal('loading-modal-content', 'Please upgrade your browser!');
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates);
    } catch (err) {
      alert(err.error_message);
    }
    modal.hide();
  };
}

new PlaceFinder();