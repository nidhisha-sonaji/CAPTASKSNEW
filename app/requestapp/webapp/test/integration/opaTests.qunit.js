sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'caprequestapp/ns/requestapp/test/integration/FirstJourney',
		'caprequestapp/ns/requestapp/test/integration/pages/ReqHeaderSetList',
		'caprequestapp/ns/requestapp/test/integration/pages/ReqHeaderSetObjectPage',
		'caprequestapp/ns/requestapp/test/integration/pages/ReqItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, ReqHeaderSetList, ReqHeaderSetObjectPage, ReqItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('caprequestapp/ns/requestapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheReqHeaderSetList: ReqHeaderSetList,
					onTheReqHeaderSetObjectPage: ReqHeaderSetObjectPage,
					onTheReqItemSetObjectPage: ReqItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);