pt.orgTreeNetwork = pt.orgTreeNetwork || {};
graphData = graphData || {};

pt.orgTreeNetwork.init = function(graph) {
    pt.orgTreeNetwork.data = graph
    createGraphData(pt.orgTreeNetwork.data);
}//init

pt.orgTreeNetwork.treeNetwork = function() {
    createGraphData(pt.orgTreeNetwork.data);
}//treeNetwork

pt.orgTreeNetwork.normalNetwork = function() {

}//normalNetwork

