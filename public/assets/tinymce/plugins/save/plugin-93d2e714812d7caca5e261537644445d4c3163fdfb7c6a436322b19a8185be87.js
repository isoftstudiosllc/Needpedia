/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.0-1 (2019-02-04)
 */

!function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),o=tinymce.util.Tools.resolve("tinymce.util.Tools"),a=function(n){return n.getParam("save_enablewhendirty",!0)},i=function(n){return!!n.getParam("save_onsavecallback")},c=function(n){return!!n.getParam("save_oncancelcallback")},r=function(n,e){n.notificationManager.open({text:e,type:"error"})},e=function(n){var e;if(e=t.DOM.getParent(n.id,"form"),!a(n)||n.isDirty()){if(n.save(),i(n))return n.execCallback("save_onsavecallback",n),void n.nodeChanged();e?(n.setDirty(!1),e.onsubmit&&!e.onsubmit()||("function"==typeof e.submit?e.submit():r(n,"Error: Form submit field collision.")),n.nodeChanged()):r(n,"Error: No form element found.")}},u=function(n){var e=o.trim(n.startContent);c(n)?n.execCallback("save_oncancelcallback",n):(n.setContent(e),n.undoManager.clear(),n.nodeChanged())},l=function(n){n.addCommand("mceSave",function(){e(n)}),n.addCommand("mceCancel",function(){u(n)})},d=function(t){return function(n){var e=function(){n.setDisabled(a(t)&&!t.isDirty())};return t.on("nodeChange dirty",e),function(){return t.off("nodeChange dirty",e)}}},s=function(n){n.ui.registry.addButton("save",{icon:"save",tooltip:"Save",disabled:!0,onAction:function(){return n.execCommand("mceSave")},onSetup:d(n)}),n.ui.registry.addButton("cancel",{icon:"cancel",tooltip:"Cancel",disabled:!0,onAction:function(){return n.execCommand("mceCancel")},onSetup:d(n)}),n.addShortcut("Meta+S","","mceSave")};n.add("save",function(n){s(n),l(n)}),function m(){}}();
