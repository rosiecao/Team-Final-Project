# Attractive San Francisco Neighborhoods to Live: A Neighborhood Vetting Tool

This project was carried out in Google Colab. To see the main colab project can be found here: https://colab.research.google.com/drive/18D8ezvcDb_bN8qLVzuNidVdGhZhk-hM_?usp=sharing

## Purpose of this final project

* Purpose of this final project is to apply foundational skills learned during this certificate program.

## About the Team

The team is composed of three students that are a part of the July 2021 - Febraury 2022 GWU Data Analytics Professional Certificate cohort. These students include:

1. Shamir Parham
> To access Shamir's GitHub account, to see all his program- or work-related projects, you can go [here](https://github.com/Shamirp).

2. Huong (Rosie) Cao
> To access Rosie's GitHub account, to see all his program- or work-related projects, you can go [here](https://github.com/rosiecao).

3. Bailey Adkins
> To access Bailey's GitHub account, to see all his program- or work-related projects, you can go [here](https://github.com/badkins2908).

## Topic, Data Sources, and Technologies

1. Selected topic and reason for topic selected
> We chose for our final project to clean and combine county property value assessment data, crime data, and ommunity resiliency indicator data for San Francisco. This data will then be visualized together, using GEOJSON, such that when looking at the best areas to potentially move to or live in, property values, crime data for the area and environmental health of that neighborhood can all be taken into account to make the best decision on where to move, buy, or live. This topic was chosen due to the readily available data, as well as an interest in seeing if this information will come together in a truly useful way.


> > > Previous work in this space: There has been a degree of previous work in the space. [Realtor.com](https://www.npr.org/2020/08/26/905551631/major-real-estate-website-now-shows-flood-risk-should-they-all) does have an incorporated feature that tells the risk of a property to flood. In addition, [HouseCanary](https://www.housecanary.com/products/data-points/) does have the data points our project is looking to present, but you need to pay access to their database and the data is presented per house and not as map layers. 


2. Sources of data

> * Property Value data: https://data.sfgov.org/Housing-and-Buildings/Assessor-Historical-Secured-Property-Tax-Rolls/wv5m-vpq2/data

> * San Francisco crime data: https://data.sfgov.org/Public-Safety/Map-of-Police-Department-Incident-Reports-2018-to-/jq29-s5wp

> * Community Resiliency: https://data.sfgov.org/Health-and-Social-Services/Community-Resiliency-Indicator-System/banc-xdvr/data 

3. Questions we hope to answer with the data
> We are hoping this project will allow individuals interested in real estate in San Fransico to also take into account crime data for the area, property values of the area, as well as potential for environmental health factors of the area, to aid in their purchasing or rental decision making process.

4. Technologies for each stage

> * Evaluating the datasets, Data Cleaning and Exploratory Analysis: 
Python will be used to import csv files to dataframes, to explore and clean data in order to establish a good dataset to import into database tables.

> * Database Storage: The data will be stores in sqLite database.

> * Machine Learning
SciKitLearn is the ML library we'll be using to create a classifier. Our training and testing setup is ___. Extra ML verbiage here.

> * Dashboard: 
GeoJSON will be used with HTML and CSS to present overlapping layers on a interactive map. (or Tableau will be used to visualize the different layers on an interactive map of San Francisco)

## Database Model + Data Dictionary

To see the visual schema of the sqLite database, as well the data dictionary for each dataset (table): [DB Schema](https://drive.google.com/file/d/1zMCzaFGsRjlVzsnGYrUh8-SjzrpvTqhi/view?usp=sharing)

Further data descriptions for Resiliency, can be found [here](https://data.sfgov.org/api/views/banc-xdvr/files/JThIwZSDAm5AAw087Uwi2lZDUevVQqy1br38NZtJOqs?download=true&filename=SFDPH_CommunityResiliencyIndicatorMethods.pdf).

Any additional information on datasets, including assessing the raw datasets can be found by following the links in the previous section under "Topic, Data Sources, and Technologies".

## Machine Learning Model

### Overview: 

Using a supervised machine learning model, we will train and test our model to examine and identify if certain living conditions have a correlation with our crime severity scores. 

### Goal: 

Using our crime severity scores our model will determine if crime severity has a correlation with our data representing living condition features. We determined living conditions based on community resilience scores (employment, population, and transportation scores) and affordability (average total assessed value).


### Results: 

An outlook on how much effect each variable for living conditions has in relation to crime incident severity.  

## Current Status of Project
All dataframes have been cleaned and placed into the SQLite database. A few more queries need to be carried out on the database.
Machine learning model being tested with final dataframe of fully merged data.
Tableau is going to be used for visualization, a deck of what the storyline will look like is being worked on.

Road Blocks: the final dataframe that is going to be used for visualization needs the dataframe exporting to a GEOJson file -- still haven't found a way to properly do this.
