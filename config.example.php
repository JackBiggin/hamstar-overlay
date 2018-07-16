<?php

// I am a magical config file
// You can set some settings in here that make things work
// Isn't that wonderful?

return [
    
    // First up we're going to need a way of talking to Mixer,
    // mainly to get that pesky sub count. Create an OAuth
    // Application at https://mixer.com/lab, and pop the Client
    // ID in here
    
    'client_id' => 'INSERT_CLIENT_ID_HERE',
    
    // To make this work, I need to know the path you're running
    // the overlay from. For example, localhost:9001/overlay/
    
    'path' => 'WHERE_ARE_WE_NOW',
    
    // Now pop to /oauth.html, grab the token it gives you, and
    // pop it down below. If you're hosting this publicly, it might
    // be a good idea to remove that file when you've generated the
    // token. Please note that tokens expire after 6 months, so go
    // set a reminder to generate a new one.
    
    'token' => 'INSERT_TOKEN_HERE',
    
    // It's going to be pretty hard to get the goals from a unknown
    // server too, right? What's the server you're trying to get
    // goals from?
    
    'server_root' => 'INSERT_API_LOCATION_HERE',
    
    // And now, let me know if I need to append anything to the
    // URL I get goals from, such as an API key. If not, just
    // leave this blank.
    
    'key' => ''
]

// See, wasn't that easy?