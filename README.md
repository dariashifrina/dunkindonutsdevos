# Dunkin Donuts Devos
## Daria Shifrina, Taylor Wong, Jasper Cheung, Leo Liu

d3 = dunkin donuts devos

<img src="https://amedia.britannica.com/700x450/28/23028-004-EBFBC4A3.jpg">

### Data Sets
1.  Individual Income Tax Statistic
    1. https://www.irs.gov/statistics/soi-tax-stats-individual-income-tax-statistics-2015-zip-code-data-soi
    2. Provides statistics on income tax, age, gender, race, ethnicity etc. of all states with more specific details regarding zip code. We will narrow it down to NYC and then be able to map each characteristic according to zip code. 
2.  DOHMH New York City Restaurant Inspection Results
    1.  https://catalog.data.gov/dataset/dohmh-new-york-city-restaurant-inspection-results 
    2.  Provides data on all restaurants within NYC, including zip code address, name, cuisine, and date of possible violations. We will project these onto a map of NYC that can be shown alongside the income tax statistics to show any connections between cuisine and culture, number of violations and income level, time and amount of restaurants in certain areas within the data.

### Explanation
- What will be shown, absent user interaction?
  - When a user loads up our page, they should immediately see a map/outline of the state of New York. That map will be spotted with circles (or shaded as a gradient, the more saturated areas meaning a higher frequency), each circle planted on the location of a restaurant health violation. The circles may vary in size depending on factors such as income tax. There will also be a scrollable bar below the map that will be initialized at 1960. Optional addition: there will be a section of buttons/checkboxes where users can pick and choose what information is displayed with each dot (to be explained below). 
- How will user interact with your visualization?
  - Users can scroll the bar from left to right, increasing the year being represented on the graph. As the years change, so should the configuration of dots on the map, displaying the different health violations happening over the years. Users can also hover over a dot, and it will show a small popup box that displays information such as income, predominant race, income tax, etc. of the population in the area. If we include the optional addition, users can choose what information is displayed in the popup by checking/unchecking the boxes.
- What questions will your visualization allow user to explore? What questions will it provoke?
  - We want our visualization to explore the phenomena of gentrification and how it can be observed through changing restaurant quality (as shown through their health violations). We want people to examine what factors can propel or prevent gentrification and identify ongoing trends.

### D3
- enter/exit selections?	
  - We will map zip codes onto a map and then initiate circles of radius 0 at each of those zip codes. By selecting those circles, we can link them to data and affect the area of the circle based on the characteristic. For example, if the user selects data regarding income in NYC, areas with higher income will have larger circles. To clarify data, users will also be able to hover over the circle to find out more. Although these shapes are circles, they can be styled to look savvier. 
- Transitions?
  - Transitions will occur to show how data changes over time on the map (circles at zip codes will grow and shrink based on the time and the data at that given point).
- similarity to gallery (github.com/d3/d3/wiki/Gallery) examples? Which and how?
  - http://d3.artzub.com/wbca/ Similar in the way that we can see the changing of data over time on a geographic map. You also have different options to select to narrow down exactly what you’re looking at. Of course, we will only be observing NYC with our data and our animations wouldn’t look as complex. However, we will have the same functionality of overlaying different characteristics of data alongside each other so users can clearly see more populated with data areas and draw connections.

![Suppose to be a sketch](https://github.com/dariashifrina/dunkindonutsdevos/blob/master/dddrawing.jpg)
##### \*Note: oops i forgot to put "race" in the pop-up window - taylor
https://github.com/d3/d3/wiki/Gallery
https://bl.ocks.org/mbostock/4060606
https://bl.ocks.org/mbostock/2206590
