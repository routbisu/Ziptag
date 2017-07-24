# What is Ziptag?

Ziptag is a map based local search engine for small vendors like Tailors, Cobblers, Keymakers, Vegetable vendors etc. that are not listed on Google maps & other search platforms like Justdial. 

The vision is to create a platform where, a person who newly moved to a place can search for any small vendor on the web, view their location on a map and directly drive or walk to that location. We use Google maps API to tag a vendor along with several other information like phone numbers, list of products / services sold and photographs just like with Google maps.

## Search parameters

The search is based on a clustered index on these parameters: products/services name, location, distance range from the location of the user.

Architecture and Product Planning:
The product will have a responsive website which will let the user search for listings.
There will be an Android & iOS app which will do the same functionality.

There will be a REST API built on nodejs entirely that will cater to the website and app.

## Optional
A data analytics engine written in Python that will provide analytics data about user searches and generate heatmaps.

## Business Model
It is a non-profit project which may be later monetized using any Ad platform. 

## Technology Stack
The technology stack will consist of these primary technologies:
Node.js - Backend REST API
Angular 2.x / React - Front End components.
HTML5/Bootstrap - Admin & Analytics portal.

## User website
After some primary research it was decided that the user-facing website will be done in Bootstrap 3 or 4 because of the following reasons:

Provides Enough customization - All bootstrap don’t look like the same. From bootstrap 3 onwards, it allows a lot of customization when most of the grid system and other essential things are still built in.

Fast and easy to use - Bootstrap is fast and easy to use. It's a part of most package managers like npm and bower.
