
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";
    return Controller.extend("student.com.sap.training.ux402.listdetail.ux402listdetail.controller.BaseController", {

        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },

        getListSelector: function () {
            return this.getOwnerComponent().oListSelector;
        },

        getresourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getresourceBundle();
        },

        onNavBack: function () {
            var sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                //history contains prev history
                history.go(-1);
            } else {
                //otherwise go backwards with a forward history
                var bReplace = true;
                this.getRouter().navTo("masterlist", {}, bReplace);
            }
        }
    }
    );
});