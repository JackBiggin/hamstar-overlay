# ElectricHamstar's Overlays
These are the overlays used over on <https://mixer.com/ElectricHamstar>. They currently power the follower/subscriber goal and viewer count info in the top left of the stream, but will be expanded to also handle follow/sub alerts, along with integrating with an automagically updating bio.

## Setup
You're welcome to use and adapt all the code in this repo for yourself (although please swap out the images for your own). Here's how to set everything up:

1. Clone this repo onto a webserver which supports PHP. Sorry.
2. Copy config.example.php to config.php, and follow the instructions inside it.
3. Add the overlay as a webpage source into OBS/XSplit
4. ???
5. Profit?


## Todos
- [ ] Improve security - currently the token generated is passed through JavaScript. This doesn't matter too much right now, as it only has the ability view channel info, but in the future (once write access is needed) this needs to be avoided
- [ ] Follow/sub alerts with avatars
- [ ] Finish giveaway system