// Setup channelData/currentGoal and load in initial data
var channelData = [];
updateChannelData();
var currentGoal = "viewer-goal";
var currentZIndex = -10;

// Every 10 seconds, update everything
window.setInterval(function(){
    updateChannelData();
}, 10000);

// Every 20 seconds, change view
window.setInterval(function(){
     switchGoal(currentGoal)
}, 5000);

/* Functions go here */
function updateChannelData() {
    var mixerDataRequest = $.ajax({
        url: "https://mixer.com/api/v1/channels/70218/details",
        type: "GET",
        dataType: "JSON",
        success: function(data){
            channelData.followerCount = data.numFollowers;
            console.log(channelData.followerCount);
            channelData.subscriberCount = 62;
            channelData.totalViewerCount = data.viewersTotal;
            channelData.currentViewerCount = data.viewersCurrent;
            // channelData.subscriberCount = data.numSubscribers;

            $("#follow-progress").html(channelData.followerCount);
            $("#subscribe-progress").html(channelData.subscriberCount);
            $("#view-current").html(channelData.currentViewerCount);
            $("#view-total").html(channelData.totalViewerCount);

        }
    });
}

function switchGoal(goal) {
// It goes Viewer -> Subscriber -> Follower
    switch(goal) {
        case "viewer-goal":
            currentGoal = "subscriber-goal";
            $("#viewer-goal").fadeTo("slow", 0, function() {
                $("#viewer-goal").css('z-index', currentZIndex);
                $("#viewer-goal").css('opacity', 100);
                currentZIndex += -10
            });
            break;
            
        case "subscriber-goal":
            currentGoal = "follower-goal";
            $("#subscriber-goal").fadeTo("slow", 0, function() {
                $("#subscriber-goal").css('z-index', currentZIndex);
                $("#subscriber-goal").css('opacity', 100);
                currentZIndex += -10
            });
            break;
            
        case "follower-goal":
            currentGoal = "viewer-goal";
            $("#follower-goal").fadeTo("slow", 0, function() {
                $("#follower-goal").css('z-index', currentZIndex);
                $("#follower-goal").css('opacity', 100);
                currentZIndex += -10
            });
            break;
    }
}



