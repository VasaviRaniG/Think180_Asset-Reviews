sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "T180/fiorichallenge/model/models",
    //"sap.ui.table",
   
   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models) {
        "use strict";
       // var ListController = Controller.extend("T180.fiorichallenge.controller.Main",{
      return Controller.extend("T180.fiorichallenge.controller.Main", {
            onInit: function () {
               // this.getView().setModel(new JSONModel(models.createAssetReviewModelTemplate()), "AssetReviewModel");

            },
           

            onAfterRendering: function () {
var counter;
var arryList = []
                // Instantiate the Asset Review Model from the models.js template
                this.getView().setModel(new JSONModel(models.createAssetReviewModelTemplate()), "AssetReviewModel");
                
                // Example; setting the 'CurrentDate' property in the Asset Review model
                this.getView().getModel("AssetReviewModel").setProperty("/CurrentDate", new Date());
                // to get the length of Array Reviews
                var arrayList = this.getView().getModel("AssetReviewModel").getProperty("/Reviews");
                this.getView().getModel("AssetReviewModel").setProperty('/TotalNumberOfReviews',arrayList.length);
                console.log(arrayList.length);

             //   this.getView().getModel("AssetReviewModel").setProperty("/TotalNumberOfReviews",read("AssetReviewModel>/Reviews/$count"));

                // count $inlinecount=allpage  Reviews.getLength()”

         //this.getView().getmodel("AssetReviewModel").getcount("$inlinecount=allpage").setProperty("/TotalNumberofReviews", new count());
     
            }    

            
        });
        //return ListController;
        
    });

    