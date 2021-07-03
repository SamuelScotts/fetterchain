<template>
  <v-app>
    <v-main>
        <input type="file" ref="uploadedfile" @change="fileUpload($event)">
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
      //
    }
  },

  methods:{
    fileUpload(e) {
      const filesToRead = e.target.files;
      let file1 = filesToRead[0];
      const fileReader = new FileReader();
      fileReader.addEventListener('loadend', (evt) => {
        if (evt.target.readyState == FileReader.DONE) {
          file1 = fileReader.result;
          const encryptedvalue = sha256(cryptoJS.enc.Latin1.parse(file1)).toString();
          console.log("SHA256 value is :" + encryptedvalue);
        }      
      });
      fileReader.readAsBinaryString(file1); // missing in the posted code
    }
  }
};
</script>
