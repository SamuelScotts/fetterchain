# Fetterchain

## Table of Contents
  * [Introduction](#introduction)
  * [Technologies](#technologies)
  * [Tasks](#tasks)
  * [Run the project](#run-the-project)
  * [Project Images](#project-images)
  * [Sources](#sources)
  * [Issues](#issues)

## Introduction
The main purpose of this application is to provide the ability to hash an image/images, and thereafter add them to a blockchain if they don't already exist there.  Should the image already exist on the blockchain, the user is to be alerted and informed.

The blockchain is to be a decentralised network of nodes who each contribute without their identity being compromised.  This is to afford uncorrupted cooperation between users.

## Technologies
At present, the project ultimately utilises JavaScript.  It primarily uses VueJS/Vuetify (for frontend development) and CryptoJS (as its hashing algorithm).

## Tasks: 
- [x] Initialise VueJS Project.
- [x] Add Vuetify.
- [x] Add Crypto-JS dependency.
- [x] Implement image upload ability.
- [x] Implement image hasing ability.
- [x] Add new hash comparision with existing hashes.
- [x] Implement block addition by user.
- [x] Allow user to obtain most up to date version of ledger.
- [x] Distribute additions to ledger appropriately.

To mock the distrubtion/communication of the ledger, a makeshift p2p style network has been implemented using Express servers.  These work in a circle, with the server 1 going to server 2, which goes to server 3, who returns to server 1 and so on.

## Run the project

Client - move to this directory and use the following command:
```
npm run serve
```

Server, Server1, Server2 - move in to each Express server directory (all must be running) and launch using each the following command:
```
node index.js
```

## Project Images
Basic output after hashing image and adding block containing them:

![alt text](https://github.com/SamuelScotts/fetterchain/blob/master/images/Screen%20Grab.png)

## Sources
Used the article below for understanding on how to build blockchain using JavaScript:
https://medium.com/@spenserhuang/learn-build-a-javascript-blockchain-part-1-ca61c285821e

Used the following StackOverflow answer to assist with file upload and hashing function:
https://stackoverflow.com/questions/67159318/file-in-selected-file-array-md5-encryption-with-cryptojs-always-gives-the-same-m

For hashing, using the following project:
https://github.com/brix/crypto-js

## Issues

One current issue with the project, is by not using a class constructor, the hash of each block will likely result different each time, depending on the order upon which the data is entered in to same.  To potentially rebuild block construction with better OOP principles.
