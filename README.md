# Attractive San Francisco Neighborhoods to Live: A Neighborhood Vetting Tool

This project was carried out in Google Colab. To see the main colab project can be found here: https://colab.research.google.com/drive/18D8ezvcDb_bN8qLVzuNidVdGhZhk-hM_?usp=sharing

The final presentation for this analysis can be found here: https://docs.google.com/presentation/d/1VU8Di3eCk6gW7LEZl7ZpK9SiHv7EI0_5f-Qbzv_WS68/edit?usp=sharing

# Introduction to Final Project 

## Purpose of this final project

* The purpose of this project is to determine if there is a way with open source data to predict, and then visualize, the quality of neighborhoods in San Francisco to live based on certain factors. Such as, housing cost, population density, crime rate, transportation availability, and more.

## About the Team

The team is composed of two students that are a part of the July 2021 - Febraury 2022 GWU Data Analytics Professional Certificate cohort. These students include:

1. Shamir Parham
> To access Shamir's GitHub account, to see all his program- or work-related projects, you can go [here](https://github.com/Shamirp).

2. Bailey Adkins
> To access Bailey's GitHub account, to see all his program- or work-related projects, you can go [here](https://github.com/badkins2908).

## Role Assignments

Shamir

*Create a mockup of a machine learning model. This can even be a diagram that explains how it will work concurrently with the rest of the project steps.*

*Responsible for the visualization of the data.*

Bailey

*Carry out exploratory analysis of data, clean and prepare data for machine learning model and visualization.* 

*Create a mockup of a database with a set of sample data, or even fabricated data. This will ensure the database will work seamlessly with the rest of the project.*

Whole Team

*The whole team will decide on best technologies to use for each stage of the project.*

## Topic, Data Sources, and Technologies

1. Selected topic and reason for topic selected
> Using San Francisco open source data to predict what neighborhoods an individual might choose to live in, based on desirable living conditions such as property value, crime, and community resiliency. This topic was chosen due to the readily available data, as well as an interest in seeing if this information will come together in a truly useful way.


> > > Previous work in this space: There has been a degree of previous work in the space. 
[Niche.com](https://www.niche.com/) has data points similar to our project that gives an overall score for the neighborhoods in a nice map visualization and in depth information about the neighborhood; doesn’t take into account the cost of housing, just overall cost of living for the area. [Realtor.com](https://www.npr.org/2020/08/26/905551631/major-real-estate-website-now-shows-flood-risk-should-they-all) does have an incorporated feature that tells the risk of a property to flood. In addition, [HouseCanary](https://www.housecanary.com/products/data-points/) does have the data points our project is looking to present, but you need to pay access to their database and the data is presented per house and not as map layers. 


2. Sources of data

> * Property Value data: https://data.sfgov.org/Housing-and-Buildings/Assessor-Historical-Secured-Property-Tax-Rolls/wv5m-vpq2/data

> * San Francisco crime data: https://data.sfgov.org/Public-Safety/Map-of-Police-Department-Incident-Reports-2018-to-/jq29-s5wp

> * Community Resiliency: https://data.sfgov.org/Health-and-Social-Services/Community-Resiliency-Indicator-System/banc-xdvr/data 

> * San Francisco neighborhood geo data: https://data.sfgov.org/Geographic-Locations-and-Boundaries/Analysis-Neighborhoods-2010-census-tracts-assigned/bwbp-wk3r

3. Questions we hope to answer with the data

> * Does living in a expensive home mean you will be safer than living in a cheaper home?

> * Does living in an area close to transportation mean more crime?

> * Does the population density correlate to more crime, since there are more people in less space?

> * How does living in a neighborhood with high unemployment rates affect the safety of that neighborhood?

4. Technologies for each stage

> * Evaluating the datasets, Data Cleaning and Exploratory Analysis: 
Python will be used to import csv files to dataframes, to explore and clean data in order to establish a good dataset to import into database tables.

> * Database Storage: The data will be stores in SQlite3 database.

> * Machine Learning
SciKitLearn is the ML library we'll be using to create a classifier. Our training and testing setup is Balanced Random Forest Classifier. 

> * Dashboard: 
Tableau to visualize GeoJSON spatial data and feature data that is placed in machine learning model.


## Database Model + Data Dictionary

To see the visual schema of the sqLite database, as well the data dictionary for each dataset (table): [DB Schema](https://drive.google.com/file/d/1zMCzaFGsRjlVzsnGYrUh8-SjzrpvTqhi/view?usp=sharing)

Further data descriptions for Resiliency, can be found [here](https://data.sfgov.org/api/views/banc-xdvr/files/JThIwZSDAm5AAw087Uwi2lZDUevVQqy1br38NZtJOqs?download=true&filename=SFDPH_CommunityResiliencyIndicatorMethods.pdf).

Any additional information on datasets, including assessing the raw datasets can be found by following the links in the previous section under "Topic, Data Sources, and Technologies".

## Machine Learning Model

By using a machine learning model, specifically looking at Balanced Random Forest Classifier, we can attempt to predict what neighborhoods have the high score of quality living, based on the following factors:
 - Crime Rates
- Average Home Cost
- Unemployment Rates
- Transportation Score
- Economy Factor
- Population Density

Overview of Model: Using a supervised machine learning model, we will train and test our model to examine and identify if certain living conditions have a correlation with our crime severity scores. 

### Goal: 

Using our crime severity scores our model will determine if crime severity has a correlation with our data representing living condition features. We determined living conditions based on community resilience scores (employment, population, and transportation scores) and affordability (average total assessed value).


### Results: 

An outlook on how much effect each variable for living conditions has in relation to crime incident severity.  
