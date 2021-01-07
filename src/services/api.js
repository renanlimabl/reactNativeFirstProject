import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api;


/**
 * iOS com Emulador: localhost.
 * iOS com fisico: IP da máquina.
 * Android com Emulador: (adb reverse tcp:3000 tcp:3000) - localhost
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android Genymotion: 10.0.3.2
 * Android com fisico: IP da máquina
 */