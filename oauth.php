<?php
    $config = include('config.php');
?>
<meta http-equiv="refresh" content="0; url=<?php echo 'https://mixer.com/oauth/authorize?response_type=token&redirect_uri=' . urlencode($config['path']) . '/callback.html&scope=channel:details:self&client_id=' . $config['client_id']; ?>">

Redirecting...