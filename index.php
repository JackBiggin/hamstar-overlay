<!DOCTYPE html>
<head>
    <link href="./assets/style.css" rel="stylesheet">
</head>
<body>
    <div class="page-container">
        
        <img class="bug" src="./assets/img/bug.png">
        <div class="bar-container" id="follower-goal" style="z-index:-4;">
            FOLLOWER GOAL: <span id="follow-progress">0</span>/<span id="follow-goal">5000</span>
            <div class="bar" id="follow-bar">
                <div class="bar-progress" id="follower-progress"></div>
            </div>
        </div>
        
        <div class="bar-container" id="subscriber-goal" style="z-index:-3;">
            SUBSCRIBER GOAL: <span id="subscribe-progress">0</span>/<span id="subscribe-goal">100</span>
            <div class="bar" id="subscribe-bar">
                <div class="bar-progress" id="subscriber-progress"></div>
            </div>
        </div>
        
        <div class="bar-container" id="viewer-goal" style="z-index:-2;">
            <span id="view-current">0</span> VIEWERS / <span id="view-total">0</span> TOTAL
            <div class="bar" id="view-bar">
                <div class="bar-progress" id="view-progress"></div>
            </div>
        </div>
        
        <!--<div class="bar-container" id="sparkswasted-goal" style="z-index:-1;">
            <span id="sparkswasted-count">0</span> SPARKS WASTED
            <div class="bar" id="sparkswasted-bar">
                <div class="bar-progress" id="sparkswasted-progress"></div>
            </div>
        </div>       -->
        
        <!--<div class="giveaway-container">
            <div class="giveaway-header">
                Giveaway
                <div id="giveaway-countdown">60</div>
                <div class="giveaway-header-subtitle">
                    Enter using !enter
                </div>
            </div>
            
            <div class="giveaway-entries" >
                <div class="giveaway-userbox">
                    <img src="https://uploads.beam.pro/avatar/2a3oymwj-97686.jpg?width=64&height=64" /> <div class="giveaway-username">ElectricHamstar</div>
                </div>
            </div>
            <div class="giveaway-footer">
                Boring legal stuff at hamster.yt/terms applies
            </div>
        </div>-->
        
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./assets/app.js"></script>
</body>