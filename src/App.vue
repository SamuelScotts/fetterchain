<template>
  <v-app>
    <v-main>
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            
            <!-- Blank holder column -->
            <v-col cols="12" sm="2"></v-col>
            
            <!-- Uploads occur on change i.e when image is selected.  File number increments each time -->
            <v-col cols="12" sm="8">
              <input type="file" ref="uploadedfile" @change="fileUpload($event)">
              <h2>Files added: {{filesToBeAdded.length}}</h2>
              
              <!-- Only appears when images available to add -->
              <v-btn v-if="filesToBeAdded.length > 0">Submit to network</v-btn>
            </v-col>
            
            <!-- Blank holder column -->
            <v-col cols="12" sm="2"></v-col>
          </v-row>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/X';
import cryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';

export default {
  name: 'App',

  components: {
    //X
  },

  data(){
    return {
      // Array to hold files to be uploaded in next block.
      filesToBeAdded: []
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
          const encryptedvalue = sha256(cryptoJS.enc.Latin1.parse(file1)).toString();
          this.filesToBeAdded.push(encryptedvalue);
        }      
      });
      fileReader.readAsBinaryString(file1);
    },
    // Add images which have ben uploaded.
    addImages(){
      
    },
  }
};
</script>
