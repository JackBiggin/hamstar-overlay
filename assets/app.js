// Setup channelData/currentGoal and load in initial data
var channelData = [];
updateChannelData();
var currentGoal = "#viewer-goal";
var currentZIndex = -10;

// TEMPORARY DUMMY DATA
var hamstarData = [];
hamstarData.followerGoal = 5000;
hamstarData.subscriberGoal = 100;

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
            
            /* Save counts to channelData */
            channelData.followerCount = data.numFollowers;
            console.log(channelData.followerCount);
            channelData.subscriberCount = 62;
            channelData.totalViewerCount = data.viewersTotal;
            channelData.currentViewerCount = data.viewersCurrent;
            // channelData.subscriberCount = data.numSubscribers;

            /* Update visual counts */
            $("#follow-progress").html(channelData.followerCount);
            $("#subscribe-progress").html(channelData.subscriberCount);
            $("#view-current").html(channelData.currentViewerCount);
            $("#view-total").html(channelData.totalViewerCount);
            
            /* OH GOD NO MATHS TIME */
            /* AKA update progress bar */
            followerPercentage = (channelData.followerCount / hamstarData.followerGoal) * 100 + "%"
            $('#follower-progress').width(followerPercentage);
            
            subscriberPercentage = (channelData.subscriberCount / hamstarData.subscriberGoal) * 100 + "%"
            $('#subscriber-progress').width(subscriberPercentage);

        }
    });
}

function switchGoal(goal) {
// It goes Viewer -> Subscriber -> Follower
    
    $(currentGoal).fadeTo("slow", 0, function() {
        $(currentGoal).css('z-index', currentZIndex);
        $(currentGoal).css('opacity', 100);
        
        switch(goal) {
        case "#viewer-goal":
            currentGoal = "#subscriber-goal"; 
            break;
        
        case "#subscriber-goal":
            currentGoal = "#follower-goal";
            break;
        
        case "#follower-goal":
            currentGoal = "#viewer-goal";
            break;
    }
        currentZIndex += -10
    });
}



