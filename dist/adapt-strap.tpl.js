/**
 * adapt-strap
 * @version v0.1.0 - 2014-07-29
 * @link https://github.com/Adaptv/adapt-strap
 * @author Kashyap Patel (kashyap@adap.tv)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';

// Source: tableajax.tpl.js
angular.module('adaptv.adaptStrap.tableajax').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tableajax/tableajax.tpl.html', '<div class="ad-table-ajax-container"><table class="%=tableClasses%"><tr><th data-ng-repeat="definition in %=columnDefinition%"><div ng-if="definition.columnHeaderTemplate" ng-bind-html="definition.columnHeaderTemplate"></div><div ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div></th></tr><tr data-ng-repeat="item in %=tableName%.items.list"><td data-ng-repeat="definition in %=columnDefinition%"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="!definition.templateUrl">{{ %=tableName%.applyFilter(item[definition.displayProperty], definition.cellFilter) }}</div></td></tr></table><div class="row"><div class="col-md-8 col-sm-8"><div class="%=paginationBtnGroupClasses% pull-left"><button type="button" class="btn btn-default" ng-click="%=tableName%.loadPage(1)" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="glyphicon glyphicon-fast-backward"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadPreviousPage()" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="glyphicon glyphicon-backward"></i></button> <button type="button" class="btn btn-default" ng-repeat="page in %=tableName%.localConfig.pagingArray" ng-class="{active: %=tableName%.items.paging.currentPage == page}" ng-click="%=tableName%.loadPage(page)">{{ page }}</button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadNextPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="glyphicon glyphicon-forward"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadLastPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="glyphicon glyphicon-fast-forward"></i></button></div></div><div class="col-md-4 col-sm-4"><div class="%=paginationBtnGroupClasses% pull-right"><button type="button" class="btn btn-default" ng-repeat="size in %=tableName%.items.paging.pageSizes" ng-class="{active: %=tableName%.items.paging.pageSize == size}" ng-click="%=tableName%.pageSizeChanged(size)">{{ size }}</button></div></div></div></div>');
  }
]);

// Source: treebrowser.tpl.js
angular.module('adaptv.adaptStrap.treebrowser').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('treebrowser/treebrowser.tpl.html', '<div class="ad-tree-browser-container" ng-class="{\'tree-bordered\': %=bordered%}"><div id="segment-tree" data-level="0" class="tree-view"><div class="tree"><script type="text/ng-template" id="%=treeName%-tree-renderer.html"><div class="content" ng-style="{\'padding-left\': level * %=childrenPadding% + \'px\'}"\n' + '                     ng-class="%=rowNgClass%">\n' + '                    <div class="content-holder">\n' + '                        <div class="toggle">\n' + '                            <!--todo: create a callback api to handle the expand and collapse functions-->\n' + '                            <i ng-show="!item._expanded && %=treeName%TreeBrowser.hasChildren(item) && !item._loading"\n' + '                               class="%=expandIconClass%" ng-click="%=treeName%TreeBrowser.toggle($event,item)"></i>\n' + '                            <i ng-show="item._expanded && !item._loading"\n' + '                               class="%=collapseIconClass%" ng-click="%=treeName%TreeBrowser.toggle($event,item)"></i>\n' + '                            <span ng-show="item._loading">\n' + '                                <i class="%=loadingIconClass%"></i>\n' + '                            </span>\n' + '                        </div>\n' + '                        <div class="node-content">\n' + '                            <!--this is the template supplied as an attribute.-->\n' + '                            %=nodeTemplate%\n' + '                        </div>\n' + '                    </div>\n' + '                </div>\n' + '                <div ng-show="item._expanded">\n' + '                    <div ng-repeat="item in item.%=childNodeName%" class="tree-level tree-sub-level"\n' + '                         ng-include="\'%=treeName%-tree-renderer.html\'" onLoad="level=level+1">\n' + '                    </div>\n' + '                </div></script><div><div class="tree-level tree-header-level border" ng-show="%=treeName%TreeBrowser.showHeader"><div class="content" ng-style="{\'padding-left\': %=childrenPadding% + \'px\'}"><div class="content-holder"><div class="toggle"></div><div class="node-content">%=nodeHeaderTemplate%</div></div></div></div><div class="tree-level tree-top-level border" ng-repeat="item in %=treeRootName%.%=childNodeName%" ng-include="\'%=treeName%-tree-renderer.html\'" onload="level = 1"></div></div></div></div></div>');
  }
]);

// Source: tablelite.tpl.js
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/tablelite.tpl.html', '<div class="ad-table-lite-container"><table class="%=tableClasses%"><tr><th data-ng-repeat="definition in %=columnDefinition%" ng-click="%=tableName%.sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortable}"><div class="pull-right" ng-if="%=tableName%.localConfig.predicate == definition.displayProperty"><i class="glyphicon glyphicon-chevron-up" ng-hide="%=tableName%.localConfig.reverse"></i> <i class="glyphicon glyphicon-chevron-down" ng-show="%=tableName%.localConfig.reverse"></i></div><div class="pull-right" ng-if="%=tableName%.localConfig.predicate != definition.displayProperty && definition.sortable"><i class="glyphicon glyphicon-resize-vertical"></i></div><div ng-if="definition.columnHeaderTemplate" ng-bind-html="definition.columnHeaderTemplate"></div><div ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div></th></tr><tr data-ng-repeat="item in %=tableName%.items.list"><td data-ng-repeat="definition in %=columnDefinition%"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="!definition.templateUrl">{{ %=tableName%.applyFilter(item[definition.displayProperty], definition.cellFilter) }}</div></td></tr></table><div class="row"><div class="col-md-8 col-sm-8"><div class="%=paginationBtnGroupClasses% pull-left"><button type="button" class="btn btn-default" ng-click="%=tableName%.loadPage(1)" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="glyphicon glyphicon-fast-backward"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadPreviousPage()" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="glyphicon glyphicon-backward"></i></button> <button type="button" class="btn btn-default" ng-repeat="page in %=tableName%.localConfig.pagingArray" ng-class="{active: %=tableName%.items.paging.currentPage == page}" ng-click="%=tableName%.loadPage(page)">{{ page }}</button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadNextPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="glyphicon glyphicon-forward"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadLastPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="glyphicon glyphicon-fast-forward"></i></button></div></div><div class="col-md-4 col-sm-4"><div class="%=paginationBtnGroupClasses% pull-right"><button type="button" class="btn btn-default" ng-repeat="size in %=tableName%.items.paging.pageSizes" ng-class="{active: %=tableName%.items.paging.pageSize == size}" ng-click="%=tableName%.pageSizeChanged(size)">{{ size }}</button></div></div></div></div>');
  }
]);


})(window, document);
