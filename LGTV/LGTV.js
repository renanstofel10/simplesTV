#!/usr/bin/env node
var lgtv = require("lgtv");
var sleep = require('thread-sleep');

//IP CONNECT
var tv_ip_address = "192.168.0.11";

var command_count = 0;

function disconnect_test() {
  lgtv.disconnect(function(err, response){
    if (!err) {
      console.log("disconnect succeeded:" + JSON.stringify(response));
    } else {
      console.log("disconnect failed:" + JSON.stringify(response));
    }
  });
};

function get_status_test () {
  lgtv.get_status(function(err, response){
    if (!err) {
      console.log("get status succeeded:" + JSON.stringify(response));
    } else {
      console.log("get status failed:" + JSON.stringify(response));
    }
  });
};

function ip_test () {
  lgtv.ip(function(err, response){
    if (!err) {
      console.log("ip succeeded:" + JSON.stringify(response));
    } else {
      console.log("ip failed:" + JSON.stringify(response));
    }
  });
};

var apps_test = function() {
    lgtv.apps(function(err, response) {
    if (!err) {
      lgtv.disconnect();
    }
  }); //pressButton
}

function pressButton(button) {
  lgtv.input_button(button, function(err, response) {
    if (!err) {
      lgtv.disconnect();
    }
  }); //pressButton
}

function turnOff() { 

	lgtv.turn_off(function(err, response){
    if (!err) {
      lgtv.disconnect();
    }
  }); //turnOff
}

function messageShow(message) {

	lgtv.show_float(message, function(err, response){
    if (!err) {
    	lgtv.disconnect();
    }
  }); // show float
}

function volumeSet() {

	lgtv.set_volume(20, function(err, response){
    if (!err) {
      lgtv.disconnect();
    }
  }); // set volume
}

function volumeUp() {

	lgtv.input_volumeup(function(err, response){
		if (!err) {
      lgtv.disconnect();
    }
  }); // volumeUp
}

function volumeDown() {
	lgtv.input_volumedown(function(err, response){
		if (!err) {
      lgtv.disconnect();
    }
  }); // volumeDown
}

function appOpen() {

	lgtv.start_app("youtube.leanback.v4", function(err, response){
    if (!err) {
      lgtv.disconnect();
    }
  }); //open App
}

function appClose() {

	lgtv.close_app("youtube.leanback.v4", function(err, response){
		if (!err) {
      lgtv.disconnect();
    }
  }); //close App
}

function getStatus() {

	lgtv.get_status(function(err, response){
		if (!err) {
      lgtv.disconnect();
    }
  }); //Status
}

function getInfo() {

	lgtv.sw_info(function(err, response){
		if (!err) {
      lgtv.disconnect();
    }
  }); //Info	
}

function getInputsList() {

	lgtv.inputlist(function(err, response){
	 	if (!err) {
      lgtv.disconnect();
    }
  }); //InputList
}

function Enter() {

	lgtv.input_enter(function(err, response){
		if (!err) {
      lgtv.disconnect();
      }
  }); //Enter
}

function PlayMedia() {

	lgtv.input_play(function(err, response){
		if (!err) {
      lgtv.disconnect();
    }
  }); //PlayMedia
}

function PauseMedia() {

	lgtv.input_pause(function(err, response){
		if (!err) {
      lgtv.disconnect();
    }
  }); //PauseMedia
}

function StopMedia() {

	lgtv.input_stop(function(err, response){
		if (!err) {
      lgtv.disconnect();
    }
  }); //StopMedia
}

function teste() {

  lgtv.input_pointer_click(function(err, response){
    if (!err) {
      lgtv.disconnect();
    }
  }); //teste
}

//SCRIPT RUN
lgtv.connect(tv_ip_address, function(err, response){
  if (!err) {
    apps_test();
  }
});// connect