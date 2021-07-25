<template>
  <v-app>
    <v-main>
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            
            <!-- Blank holder column -->
            <v-col cols="12" sm="2"><h2>Fetterchain</h2></v-col>
            
            <!-- Uploads occur on change i.e when image is selected.  File number increments each time -->
            <v-col cols="12" sm="8">
            
              <v-row class="mt-10">
                <v-card v-for="(entry, index) in ledger" :key="index" class="mt-6" flat outlined>
                  <v-card-title>Block: {{entry.index}}</v-card-title>
                  <v-card-text>
                    Index: {{entry.index}}<br/>
                    Timestamp: {{entry.timestamp}}<br/>
                    Data: {{entry.data[0]}}<br/>
                    Prev Hash: {{entry.prevHash}}<br/>
                    Block Hash: {{entry.hash}}
                  </v-card-text>
                </v-card>
              </v-row>

            </v-col>
          
            <!-- Blank holder column -->
            <v-col cols="12" sm="2">
              <input type="file" ref="uploadedfile" @change="fileUpload($event)">
              <h2>Files added: {{filesToBeAdded.length}}</h2>
              
              <!-- Only appears when images available to add -->
              <v-btn v-if="filesToBeAdded.length > 0" @click="addImages(filesToBeAdded)">Submit to network</v-btn>
            </v-col>
          </v-row>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/X';
import cryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import axios from 'axios';

export default {
  name: 'App',

  components: {
    //X
  },

  data(){
    return {
      // Main ledger holder.
      ledger: [],
      // Array to hold files to be uploaded in next block.
      filesToBeAdded: [],
    }
  },

  methods:{
    // Handle uploading of each image.  Currently done one at a time.
    fileUpload(e) {
      const filesToRead = e.target.files;
      let file1 = filesToRead[0];
      const fileReader = new FileReader();
      fileReader.addEventListener('loadend', (evt) => {
        if (evt.target.readyState == FileReader.DONE) {
          file1 = fileReader.result;
          // Running from Crypto-JS package, using SHA256 algorithm
          const encryptedValue = sha256(cryptoJS.enc.Latin1.parse(file1)).toString();
          this.filesToBeAdded.push(encryptedValue);
        }      
      });
      fileReader.readAsBinaryString(file1);
    },

    // Check for files already existing on blockchain.
    compareUploadToExisting(){
      for (let i=0;i<this.ledger.length;i++){
        for (let j=0; j<this.filesToBeAdded.length;j++){
          for (let k=0; k<this.filesToBeAdded.length;k++){
            if (this.ledger[i].data[j] === this.filesToBeAdded[k]){
              alert("This file already exists.");
              this.filesToBeAdded.splice(k,1);
            }
          }
        }
      }
    },

    // Add images which have ben uploaded.
    addImages(files){
     // Run comparision between images to be uploaded and existing images.
      this.compareUploadToExisting()
      // Add new block - method call.
      if (this.filesToBeAdded.length > 0){
        this.addBlock(files);
        // Clear outstanding files to be added.
        this.filesToBeAdded = [];
      } 
    },

    // Add new block to the blockchain - method.
    addBlock(files){
      let newBlock = {};
      newBlock.index = this.ledger.length;
      newBlock.timestamp = Date.now();
      newBlock.data = JSON.parse(JSON.stringify(files));
      if (this.ledger.length == 0){
        newBlock.prevHash = 0;
      } else {
      newBlock.prevHash = this.ledger[this.ledger.length - 1].hash
      }
      newBlock.hash = sha256(newBlock.index + newBlock.timestamp + JSON.stringify(newBlock.data) + newBlock.prevHash).toString();
      //this.ledger.push(newBlock);
      this.submitBlock(newBlock);
      this.getLedger();
      console.log(JSON.stringify(this.ledger, null, 4));
    },

    // Push to Express Web Server
    async submitBlock(newBlock){
        await axios.post('http://localhost:3000/', newBlock);
    },

    async getLedger(){
        let response = await axios.get('http://localhost:3000/');
        this.ledger = response.data;
    },
  },
  mounted: function(){
    this.getLedger();
  }
}
</script>
