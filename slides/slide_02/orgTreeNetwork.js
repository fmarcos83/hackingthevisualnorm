pt.orgTreeNetwork = pt.orgTreeNetwork || {created:false};
graphData = graphData || {};

pt.orgTreeNetwork.init = function(graph) {
    pt.orgTreeNetwork.data = graph
    if(!pt.orgTreeNetwork.created){
      pt.orgTreeNetwork.created = createGraphData(pt.orgTreeNetwork.data);
    }
}//init

pt.orgTreeNetwork.treeNetwork = function() {
    //createGraphData(pt.orgTreeNetwork.data);
}//treeNetwork

pt.orgTreeNetwork.normalNetwork = function() {

}//normalNetwork

