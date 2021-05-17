Watch our demo!

https://user-images.githubusercontent.com/38049339/118464630-131bb300-b6cf-11eb-9f83-77f8f9b63d48.mp4

## Inspiration
Climate change is one of the greatest crises of our time, and as not enough action is being taken to prevent the current issues from worsening, we will need to learn to accommodate for the consequences. With the death tolls on the rise as a result of climate change, we noticed that an alarming number of deaths and injuries can be avoided by providing specific weather updates. Research has shown that climate change can impact weather factors such as heatwaves and severe storms! These storms can increase water levels, causing floods that lead to over 1000 fatalities every year in just the US. To inspire the next generation by spreading awareness about current situations, we hope to educate the audience and help them reduce their carbon footprint and improve the economy. Together, we can ensure our country stays clean, green and environmentally friendly as our lives and the lives of our loved ones depend on it. 

## What it does
Our website provides live and interactive graphs for the users to manipulate and view at their specific location, so they are able to adjust their plans. The information is presented after analyzing the NOAA flood advisories, Canadian government websites, and other datasets which provide accurate weather reports and send alerts. It also helps to prepare cities for extreme heat events and provides users with a better understanding of heat risks. In some cases, we provide very specific information based on the province they enter with recommended water levels and current levels. Our integrated chatbot also provides live weather alerts and notifies the users whenever they should be cautious about the weather. 

## How we built it
After a lot of determination, we decided to build the frontend using Node.js, JavaScript, React, CSS, bootstrap and HTML. The backend was done using Python and using several libraries such as NumPy, Pandas, Matlplotlib and SciKit. The chatbot was built using an online cloud platform.
We also used several APIs and datasets to connect weather-related data and present our data in the most interactive way possible. We looked into different datasets from Google, NOAA, Kaggle and government websites and cleaned the data using Python and R.

## Challenges we ran into
We found it difficult to implement/embed the chatbots and interactive graphs in our code as the frontend was coded using JS and we could only fetch the HTML code for the chatbot. To overcome this, we reached out for help and gradually came to a solution!
Furthermore, it was a challenge to collect user data for the Python code for data visualization purposes and send the graphs back to the frontend and display it on the website.
Lastly, we were using web scraping tools to collect data from the website for the chatbot to provide live alerts but that was a challenge as the website was coded in PHP and some elements were significantly different. 

## Accomplishments that we're proud of
We’re proud of the following:
Being able to utilize data visualization techniques based on user data and represent graphs
Providing live updates on weather alerts through the chatbot based on user location 
Successfully implementing live and interactive graphs for the users that they can customize for their view
Being able to create animations on the website to make it look more appealing and less alarming especially for a pressing issue like climate change.
Educating individuals about extreme weather conditions as a result of climate change through a very interactive website. 
Creating a responsive website that can accommodate most screen sizes

## What we learned
We learned the following:
Animating the website to make it look appealing.
Using requests scrapy and beautiful soup for data extraction by using IDs from HTML pages 
How to use React hooks to get current data and use it to display other portions of the web app
How to properly embed HTML code into JS
Collecting user data and doing data analysis and visualization and sending real-time graphs.

## What's next for **Climate Pulse**
Currently, we only show data based on every province and we want to show data that is more specific i.e., based on their postal codes. Furthermore, we would also like to create a log-in page so users can add more information including health information for more personalized data and specifically tailored tips on how they can combat climate change. 
