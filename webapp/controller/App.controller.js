
sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel"
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("student.com.sap.training.ux402.listdetail.ux402listdetail.controller.App", {
      onInit() {
        var oViewModel = new JSONModel({
          layout : "oneColumn"
        });

        this.getView().setModel(oViewModel, "mainView");
      }
    });
  }
);