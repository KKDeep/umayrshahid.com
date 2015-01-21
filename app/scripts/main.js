/**
 * Created by Umayr Shahid on 1/21/2015.
 */

(function () {
    'use strict';
    var toggleSwitch = document.getElementById('toggleLights');
    var options = ['black', 'white'];
    var toggle = false;
    var toggleText = ['Turn off the lights', 'Turn on the lights']
    toggleSwitch.addEventListener('click', function (e) {
        e.preventDefault();
        var body = document.getElementsByTagName('body')[0];
        options.forEach(function (item) {
            body.classList.toggle(item);
        });
        if (toggle) {
            this.text = toggleText[0];
        } else {
            this.text = toggleText[1];
        }
        toggle = !toggle;
        return false;
    });
})();
