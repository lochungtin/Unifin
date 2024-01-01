# Unifin

## Background

Unifin is a multi-award-winning Hackathon project some of my university classmates and I submitted for [HackSheffield 2020](https://devpost.com/software/unifin). Some of the main sponsors of the Hackathon were Google Cloud Computing and Capital One.

## About the Project

Unifin is a mobile money management application developed with the React Native framework. Some of the main features are **receipt scanning** with Google Cloud Computing's Vision AI API. We also Capital One's provided API to load in user account data, such as money spending and income data.

## Awards

Our project won two awards

- Best Google Cloud Hack
- Best Use of the Capital One API

## Features

### Receipt Interpreter

This feature enables users to upload or take a photography of a receipt / invoice and have it automatically loaded as an spending entry in the account overview.

This is made possible with **Google's Vision ML kit** to detect text from a given document.

### CapitalOne Account data retrieval

Using the demo API from CapitalOne, the app is able to **retrieve transaction details** from the account, as well as its metadata such as spending categories, etc.

This is to be interpreted in list and graph form together with receipt interpreter, provides a comprehensive overview of both cash and cashless spendings.

## Technical Details

- React Native 0.63.2
- **Redux and Redux Persist** for local data management
- **React Native Firebase ML Vision** for receipt scanning
