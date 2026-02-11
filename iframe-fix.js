// Iframe compatibility fix - allows games to work when embedded in iframes
(function() {
    // Make the game think it's not in an iframe
    try {
        Object.defineProperty(window, 'self', {
            get: function() { return window.top; },
            configurable: false
        });
    } catch (e) {
        // If we can't redefine self, try overriding common iframe checks
        window.self = window.top;
    }
    
    // Prevent frame-busting code from breaking the app
    try {
        Object.defineProperty(window, 'top', {
            get: function() { return window; },
            set: function() {},
            configurable: false
        });
    } catch (e) {}
    
    try {
        Object.defineProperty(window, 'parent', {
            get: function() { return window; },
            set: function() {},
            configurable: false
        });
    } catch (e) {}
    
    // Override common sitelock check functions if they exist
    if (typeof js_iframed === 'function') {
        window.js_iframed = function() { return 0; };
    }
    
    // Override document.domain to allow cross-iframe communication
    try {
        document.domain = document.domain;
    } catch (e) {}
    
    // Allow iframed games to run
    window.allowIframe = true;
})();
