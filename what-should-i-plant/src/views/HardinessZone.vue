<template>
  <div>
    <div class="hardinessZone">
      <input type="text" placeholder="Zip Code" class="searchBox" v-model="zipcode" />
      <button @click="validateAndFetchZone">Find Hardiness Zone</button>
    </div>

    <div v-if="invalidZipcode">
      <p>Please enter a valid zip code.</p>
      <button @click="dismissError">OK</button>
    </div>

    <div v-else-if="location || zone || mintemp">
      <p>Location: {{ location }}</p>
      <p>Zone: {{ zoneAlt }} or Specifically: {{ zone }}</p>
      <p>Low Winter Temp Range: {{ mintemp }}</p>
    </div>

    <div class="plantSearch">
      <input type="text" placeholder="Hardiness Zone" class="searchBox" v-model="hardinesszone" />
      <button @click="searchHardinessZone">Find Suitable Plants</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HardinessZone',
  data() {
    return {
      zipcode: '',
      hardinesszone: '',
      location: '',
      zone: '',
      zoneAlt: '',
      mintemp: '',
      invalidZipcode: false
    }
  },
  methods: {
    async validateAndFetchZone() {
      if (this.validateZipcode()) {
        await this.fetchZone()
      } else {
        this.invalidZipcode = true
      }
    },
    validateZipcode() {
      const zip = parseInt(this.zipcode)
      return zip >= 501 && zip <= 99950
    },
    async fetchZone() {
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
        this.zone = response.data.zone
        // Remove 'a' or 'b' from the zone before assigning
        this.zoneAlt = response.data.zone.replace(/[ab]/g, '')
        this.mintemp = response.data.min_temp_range
      } catch (error) {
        console.error('Error fetching plant data:', error)
      }
    },
    async searchHardinessZone() {
      const options = {
        method: 'GET',
        url: `https://perenual.com/api/species-list?key=sk-bFc7664bed8af2d42294&hardiness=${this.hardinesszone}`
      }

      try {
        const response = await axios.request(options)
        console.log(response.data)
        // Handle the response data
      } catch (error) {
        console.error('Error fetching plant data:', error)
      }
    },
    dismissError() {
      this.invalidZipcode = false
    }
  }
}
</script>
