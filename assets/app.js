var channelData = [];

var mixerDataRequest = $.ajax({
    url: "https://mixer.com/api/v1/channels/70218/details",
    type: "GET",
    dataType: "JSON",
    success: function(data){
        channelData.followerCount = data.numFollowers;
        console.log(channelData.followerCount);
        channelData.subscriberCount = 62;
        // channelData.subscriberCount = data.numSubscribers;
        
        $("#follow-progress").html(channelData.followerCount);
        $("#subscribe-progress").html(channelData.subscriberCount);

    }
});


window.setInterval(function(){
     $( "#subscriber-goal" ).fadeToggle();
}, 20000);