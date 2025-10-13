'use strict';

console.log('Mapty OOP Foundation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);
class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);

console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);

// Add this after your existing Workout classes from Hour 1

console.log('=== TESTING GEOLOCATION API ===');

function loadMap(position) {
  const { latitude, longitude } = position.coords;
  console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

  const coords = [latitude, longitude];

  const map = L.map('map').setView(coords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(coords).addTo(map).bindPopup('You are here!').openPopup();

  map.on('click', function (mapEvent) {
    const { lat, lng } = mapEvent.latlng;
    console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        `Workout location<br>lat: ${lat.toFixed(4)}, lng: ${lng.toFixed(4)}`
      )
      .openPopup();
  });

  console.log('Map loaded successfully at user location!');
}

// App class - the main application controller
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('🚀 App starting...');
    this._getPosition();
  }

  _getPosition() {
    console.log('🔍 Requesting user location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message +=
          'Location information is unavailable. Using default location.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out. Using default location.';
        break;
      default:
        message += 'An unknown error occurred. Using default location.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }

  _loadDefaultMap() {
    console.log('📍 Loading default map location (London)');
    const defaultCoords = [51.5074, -0.1278];

    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    console.log('🗺️ Default map loaded successfully');
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`📍 User location: ${latitude}, ${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();
    this.#map.on('click', this._showForm.bind(this));
    console.log('Map loaded successfully!');
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    const { lat, lng } = mapE.latlng;
    console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        `Workout location
Lat: ${lat.toFixed(4)}
Lng: ${lng.toFixed(4)}`
      )
      .openPopup();
  }
}

const app = new App();
console.log('Hour 2 complete!');
