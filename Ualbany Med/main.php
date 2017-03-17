<?php
error_reporting(0);
require_once('inc/login.inc.php');
require_once('inc/chat.inc.php');
// initialization of login system and generation code
$oSimpleLoginSystem = new SimpleLoginSystem();
$oSimpleChat = new SimpleChat();
// draw login box
echo $oSimpleLoginSystem->getLoginBox();
// draw chat application
$sChatResult = 'Need login before using';
if ($_COOKIE['member_name'] && $_COOKIE['member_pass']) {
if ($oSimpleLoginSystem->check_login($_COOKIE['member_name'], $_COOKIE['member_pass'])) {
$sChatResult = $oSimpleChat->acceptMessages();
//require_once('messages.php');
}
}


echo $sChatResult;

if ($_COOKIE['member_name'] && $_COOKIE['member_pass']) {
if ($oSimpleLoginSystem->check_login($_COOKIE['member_name'], $_COOKIE['member_pass'])) {
//$sChatResult = $oSimpleChat->acceptMessages();
require_once('messages.php');
}
}



?>