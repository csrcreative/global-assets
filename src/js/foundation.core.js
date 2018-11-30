 /** This file was built from the following source file:
  * /node_modules/foundation-sites/js/entries/foundation.js
  */

// Foundation core and utils
import jQuery from "jquery";
import { Foundation } from "foundation-sites/js/foundation.core";
import { DropdownMenu } from "foundation-sites/js/foundation.dropdownMenu";
import { Drilldown } from "foundation-sites/js/foundation.drilldown";
import {
    rtl,
    GetYoDigits,
    transitionend
} from "foundation-sites/js/foundation.core.utils";
import { Box } from "foundation-sites/js/foundation.util.box";
import { onImagesLoaded } from "foundation-sites/js/foundation.util.imageLoader";
import { Keyboard } from "foundation-sites/js/foundation.util.keyboard";
import { MediaQuery } from "foundation-sites/js/foundation.util.mediaQuery";
import { Motion, Move } from "foundation-sites/js/foundation.util.motion";
import { Nest } from "foundation-sites/js/foundation.util.nest";
import { Timer } from "foundation-sites/js/foundation.util.timer";
import { Touch } from "foundation-sites/js/foundation.util.touch";
import { Triggers } from "foundation-sites/js/foundation.util.triggers";

// Add jQuery to the window object
window.$ = jQuery;
window.jQuery = jQuery;
Foundation.addToJquery(jQuery);

// // Require non-modular scripts
require("motion-ui");
require("what-input");

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
Foundation.DropdownMenu = DropdownMenu;
Foundation.Drilldown = Drilldown;
Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;
Foundation.Box = Box;
Foundation.onImagesLoaded = onImagesLoaded;
Foundation.Keyboard = Keyboard;
Foundation.MediaQuery = MediaQuery;
Foundation.Motion = Motion;
Foundation.Move = Move;
Foundation.Nest = Nest;
Foundation.Timer = Timer;
// Touch and Triggers previously were almost purely side effect driven,
// so foundation-sites/js// need to add it to Foundation, just init them.
Touch.init(jQuery);
Triggers.init(jQuery, Foundation);

export default Foundation;