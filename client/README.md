# Fetterchain

## Table of Contents
  * [Introduction](#introduction)
  * [Technologies](#technologies)
  * [Tasks](#tasks)
  * [Run the project](#run-the-project)

## Introduction
The main purpose of this application is to provide the ability to hash an image/images, and thereafter add them to a blockchain if they don't already exist there.  Should the image already exist on the blockchain, the user is to be alerted and informed.

The blockchain is to be a decentralised network of nodes who each contribute without their identity being compromised.  This is to afford uncorrupted cooperation between users.

## Technologies
At present, the project ultimately utilises JavaScript.  It primarily uses VueJS/Vuetify (for frontend development) and CryptoJS (as its hashing algorithm).

## Tasks: 
- [x] Initialise VueJS Project.
- [x] Add Vuetify.
- [x] Add Crypto-JS dependency.
- [ ] Implement image upload ability.
- [ ] Implement image hasing ability.
- [ ] Add new hash comparision with existing hashes.
- [ ] Implement block addition but user.
- [ ] Allow user to obtain most up to date version of ledger.
- [ ] Distribute additions to ledger appropriately.

To implement the distrubtion/communication of the ledger, a p2p network is to be introduced.  It is intend that the following dependency will be used to do same:

https://github.com/libp2p/js-libp2p

The above will appear latterly, after a single users functionality is implemented i.e upload images, hash them, compare against existing hashes and add them as a new block.

## Run the project
```
npm run serve
```
