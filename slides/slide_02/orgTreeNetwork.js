pt.orgTreeNetwork = pt.orgTreeNetwork || {};

pt.orgTreeNetwork.init = function(graph) {
    pt.orgTreeNetwork.data = graph;
}//init

pt.orgTreeNetwork.treeNetwork= function() {
    window.createGraphData(pt.orgTreeNetwork.data);
}//treeNetwork

