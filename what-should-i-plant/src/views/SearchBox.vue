<template>
  <div>
    <input type="text" placeholder="Zip Code" class="searchBox" v-model="zipcode" />
    <button @click="fetchPlants">Look Up Plants</button>

    <div v-if="location || zone || mintemp">
      <p>Location: {{ location }}</p>
      <p>Zone: {{ zone }}</p>
      <p>Low Winter Temp Range: {{ mintemp }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchBox',
  data() {
    return {
      zipcode: '',
      location: '',
      zone: '',
      mintemp: ''
    }
  },
  methods: {
    async fetchPlants() {
      const options = {
        method: 'GET',
        url: `https://usda-plant-hardiness-zones.p.rapidapi.com/zone/${this.zipcode}`,
        headers: {
          'X-RapidAPI-Key': '2b148a14a3msh12fa6ec54fe1b3fp1ed456jsnbd039561a19d',
          'X-RapidAPI-Host': 'usda-plant-hardiness-zones.p.rapidapi.com'
        }
      }

      try {
        const response = await axios.request(options)
        console.log(response.data)

        this.location = response.data.ZIP_name
        // Remove 'a' or 'b' from the zone before assigning
        this.zone = response.data.zone.replace(/[ab]/g, '')
        this.mintemp = response.data.min_temp_range
      } catch (error) {
        console.error('Error fetching plant data:', error)
        // Handle the error, if needed
      }
    }
  }
}
</script>
