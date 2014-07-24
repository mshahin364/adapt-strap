/**
 * adapt-strap
 * @version v0.0.1 - 2014-07-24
 * @link https://github.com/Adaptv/adapt-strap
 * @author Kashyap Patel (kashyap@adap.tv)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';

// Source: treebrowser.tpl.js
angular.module('adaptv.adaptStrap.treebrowser').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('treebrowser/treebrowser.tpl.html', '<div class="ad-tree-browser-container" ng-class="{\'tree-bordered\': %=bordered%}"><div id="segment-tree" data-level="0" class="tree-view"><div class="tree"><script type="text/ng-template" id="%=treeName%-tree-renderer.html"><div class="content" ng-style="{\'padding-left\': level * %=childrenPadding% + \'px\'}"\n' + '                     ng-class="%=rowNgClass%">\n' + '                    <div class="content-holder">\n' + '                        <div class="toggle">\n' + '                            <!--todo: create a callback api to handle the expand and collapse functions-->\n' + '                            <i ng-show="!item._expanded && %=treeName%TreeBrowser.hasChildren(item) && !item._loading"\n' + '                               class="%=expandIconClass%" ng-click="%=treeName%TreeBrowser.toggle($event,item)"></i>\n' + '                            <i ng-show="item._expanded && !item._loading"\n' + '                               class="%=collapseIconClass%" ng-click="%=treeName%TreeBrowser.toggle($event,item)"></i>\n' + '                            <span ng-show="item._loading">\n' + '                                <i class="%=loadingIconClass%"></i>\n' + '                            </span>\n' + '                        </div>\n' + '                        <div class="node-content">\n' + '                            <!--this is the template supplied as an attribute.-->\n' + '                            %=nodeTemplate%\n' + '                        </div>\n' + '                    </div>\n' + '                </div>\n' + '                <div ng-show="item._expanded">\n' + '                    <div ng-repeat="item in item.%=childNodeName%" class="tree-level tree-sub-level"\n' + '                         ng-include="\'%=treeName%-tree-renderer.html\'" onLoad="level=level+1">\n' + '                    </div>\n' + '                </div></script><div><div class="tree-level tree-header-level border" ng-show="%=treeName%TreeBrowser.showHeader"><div class="content" ng-style="{\'padding-left\': %=childrenPadding% + \'px\'}"><div class="content-holder"><div class="toggle"></div><div class="node-content">%=nodeHeaderTemplate%</div></div></div></div><div class="tree-level tree-top-level border" ng-repeat="item in %=treeRootName%.%=childNodeName%" ng-include="\'%=treeName%-tree-renderer.html\'" onload="level = 1"></div></div></div></div></div>');
  }
]);


})(window, document);
