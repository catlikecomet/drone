/* something */

var Cylon = require('cylon');


// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"

    })
    .on("ready", fly);

// Fly the bot
var bot;
function fly(robot) {

    bot = robot;
    bot.drone.config('general:navdata_demo', 'TRUE');
    bot.drone.disableEmergency();
    bot.drone.ftrim();

    bot.drone.takeoff();
    bot.drone.left(0.2);
    after(3*1000, function() {
        bot.drone.left(0);
    });
    bot.drone.right(0.2);
    after(6*1000, function() {
        bot.drone.left(0);
    });

    after(11*1000, function() {
        bot.drone.land();
    });
    after(14*1000, function() {
        bot.drone.stop();
    });
}
Cylon.start();
