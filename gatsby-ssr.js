import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        key="matomo"
        dangerouslySetInnerHTML={{
            __html: `
                var _paq = window._paq = window._paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                    var u="//console-analytics.ucloud.cn/";
                    _paq.push(['setTrackerUrl', u+'m.php']);
                    _paq.push(['setSiteId', '9']);
                    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                    g.async=true; g.src=u+'m.js'; s.parentNode.insertBefore(g,s);
                })();
            `
        }}
      />,
  ]);
}