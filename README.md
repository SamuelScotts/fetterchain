# Fetterchain

## Table of Contents
  * [Introduction](#introduction)
  * [Technologies](#technologies)
  * [Tasks](#tasks)
  * [Run the project](#run-the-project)
  * [Project Images](#project-images)
  * [Sources](#sources)
  * [Issues](#Issues)

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
- [ ] Add new hash comparision with existing hashes.
- [x] Implement block addition by user.
- [ ] Allow user to obtain most up to date version of ledger.
- [ ] Distribute additions to ledger appropriately.

To implement the distrubtion/communication of the ledger, a p2p network is to be introduced.  It is intend that the following dependency will be used to do same:

https://github.com/libp2p/js-libp2p

The above will appear latterly, after a single users functionality is implemented i.e upload images, hash them, compare against existing hashes and add them as a new block.

## Run the project
```
npm run serve
```
## Project Images
Basic output after hashing image and adding block containing them:

//![alt text](https://github.com/SamuelScotts/fetterchain/blob/master/images/Screen%20Grab.png)

## Sources
Used the article below for understanding on how to build blockchain using JavaScript:
https://medium.com/@spenserhuang/learn-build-a-javascript-blockchain-part-1-ca61c285821e

For hashing, using the following project:
https://github.com/brix/crypto-js

## Issues
On current issue with the project, is by not using a class constructor, the hash of each block will likely result different each time, depending on the order upon which the data is entered in to same.  To potentially rebuild block construction with better OOP principles.
