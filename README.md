# Celestial Insights

## Description
As a user I want a webpage that shows the nasa picture of the day, and will show me my horoscope for the day.
When I go to the page I am presented with a modal to enter my sign.

As a user I need to be able to select my sign.
When I click on my sign, my horoscope is displayed.

As a user if I want to look at past pictures i can select a date from a date picker.
When I click on the date picker and select a date, then the picture of the day changes to the proper picture.

As a user I need the ability to change my sign, and be able to see my horoscope for yesterday and tomorrow as well.
When I click "Today", "Tomorrow", or "Yesterday" my horsocope changes to that day.

## Technologies used
The globe is done using CSS. CSS keyframes rotates the globe. The picture of the day along with its information uses the NASA APOD api that can be found at 
https://api.nasa.gov/#browseAPI. Its the first API. The horoscope information is retrieved using tha API at https://rapidapi.com/sameer.kumar/api/aztro/.

## Usage
https://jewelisjojo4life.github.io/Celestial_Insights/
will take you to the webpage shown below.

![Team 7 Project 1](assets\images\readMe-picture.png)

On first page load, you are presented with a modal that asks for you to select your sign. The information is stored locally. The horoscope information is then loaded. On the left side of the page you can pick a date from the date picker, when the date picked is submitted you are presented with a page that displays the NASA picture of the day and its information. In the horoscope section you have the option to select yesterday, today, and tomorrow. Clicking any of these buttons will give you the horoscope information for that day. Underneath the horoscope there is a button that allows you to change your sign in case you selected the wrong sign. The information is updated automatically.

## License

Refer to Repository License.
