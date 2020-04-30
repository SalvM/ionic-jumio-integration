import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
declare var Jumio: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  status: String = "";

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.ready().then(() => {
      Jumio = (<any>window).plugins.Jumio;
    })
  }

  ionViewDidLoad() {
    this.initialize();
  }

  get API_TOKEN()  {
    return 'a3415482-e3b7-4445-ba38-5fcaba05f63c';
  }
  get API_SECRET() {
    return 'BG3gmVgAJzPRZyUBKd3bAORtGfhi5d1K';
  }
  get DATACENTER() {
    return 'EU';
  }


  initialize() {
    document.getElementById("initNetverify").addEventListener("click", this.initNetverify);
    document.getElementById("startNetverify").addEventListener("click", this.startNetverify);
    document.getElementById("initAuthentication").addEventListener("click", this.initAuthentication);
    document.getElementById("startAuthentication").addEventListener("click", this.startAuthentication);
    document.getElementById("startBAM").addEventListener("click", this.startBAM);
    document.getElementById("startDocumentVerification").addEventListener("click", this.startDocumentVerification);
    document.getElementById("log").addEventListener("change", function unhide() {
      document.getElementById("logtitle").hidden = true
    })
  }

  initNetverify = () => {
    // Netverify / Fastfill
    Jumio.initNetverify(this.API_TOKEN, this.API_SECRET, this.DATACENTER, {
      enableVerification: true,
      //callbackUrl: "URL",
      //enableIdentityVerification: true,
      //preselectedCountry: "AUT",
      //customerInternalReference: "CustomerInternalReference",
      //reportingCriteria: "ReportingCriteria",
      //userReference: "UserReference",
      //sendDebugInfoToJumio: true,
      //dataExtractionOnMobileOnly: false,
      //cameraPosition: "back",
      //preselectedDocumentVariant: "plastic",
      //documentTypes: ["PASSPORT", "DRIVER_LICENSE", "IDENTITY_CARD", "VISA"],
      //enableWatchlistScreening: ["enabled", "disabled" || "default"],
      //watchlistSearchProfile: "YOURPROFILENAME"
      //offlineToken: ""
    }, {
      // Customization iOS only
      //disableBlur: true,
      //enableDarkMode: true,
      //backgroundColor: "#ff0000",
      //foregroundColor: "#ff0000",
      //tintColor: "#ff0000",
      //barTintColor: "#ff0000",
      //textTitleColor: "#ff0000",
      //documentSelectionHeaderBackgroundColor: "#ff0000",
      //documentSelectionHeaderTitleColor: "#ff0000",
      //documentSelectionHeaderIconColor: "#ff0000",
      //documentSelectionButtonBackgroundColor: "#ff0000",
      //documentSelectionButtonTitleColor: "#ff0000",
      //documentSelectionButtonIconColor: "#ff0000",
      //fallbackButtonBackgroundColor: "#ff0000",
      //fallbackButtonBorderColor: "#ff0000",
      //fallbackButtonTitleColor: "#ff0000",
      //positiveButtonBackgroundColor: "#ff0000",
      //positiveButtonBorderColor: "#ff0000",
      //positiveButtonTitleColor: "#ff0000",
      //negativeButtonBackgroundColor: "#ff0000",
      //negativeButtonBorderColor: "#ff0000",
      //negativeButtonTitleColor: "#ff0000",
      //scanOverlayStandardColor: "#ff0000",
      //scanOverlayValidColor: "#ff0000",
      //scanOverlayInvalidColor: "#ff0000",
      //scanBackgroundColor: "#ff0000",
      //faceOvalColor: "#ff0000",
      //faceProgressColor: "#ff0000",
      //faceFeedbackBackgroundColor: "#ff0000",
      //faceFeedbackTextColor: "#ff0000"
    });

    Jumio.startNetverify(function(documentData) {
      // alert(JSON.stringify(documentData));
      document.getElementById("log").textContent = JSON.stringify(documentData);
    }, function(error) {
      // alert(JSON.stringify(error));
      document.getElementById("log").textContent = JSON.stringify(error);
    });
  };

  startNetverify = () => {
    // Netverify / Fastfill

    this.initNetverify();

    Jumio.startNetverify(function(documentData) {
      // alert(JSON.stringify(documentData));
      document.getElementById("log").textContent = JSON.stringify(documentData);
    }, function(error) {
      // alert(JSON.stringify(error));
      document.getElementById("log").textContent = JSON.stringify(error);
    });
  };

  initAuthentication = () =>  {
    // Authentication
    Jumio.initAuthentication(this.API_TOKEN, this.API_SECRET, this.DATACENTER, {
      enrollmentTransactionReference: "EnrollmentTransactionReference",
      //userReference: "UserReference",
      //callbackUrl: "URL",
      //authenticationTransactionReference: "AuthenticationTransactionReference"
    }, {
      // Customization iOS only
      /*
      disableBlur: true,
      enableDarkMode: true,
      backgroundColor: "#ff0000",
      tintColor: "#ff0000",
      barTintColor: "#ff0000",
      extTitleColor: "#ff0000",
      positiveButtonBackgroundColor: "#ff0000",
      positiveButtonBorderColor: "#ff0000",
      positiveButtonTitleColor: "#ff0000",
      faceOvalColor: "#ff0000",
      faceProgressColor: "#ff0000",
      faceFeedbackBackgroundColor: "#ff0000",
      faceFeedbackTextColor: "#ff0000"
      */
    });
  }

  startAuthentication= () =>  {

    Jumio.startAuthentication(function(documentData) {
      document.getElementById("log").textContent = JSON.stringify(documentData);
    }, function(error) {
      document.getElementById("log").textContent = JSON.stringify(error);
    });
  }

  startDocumentVerification= () =>  {
    // Document Verification
    Jumio.initDocumentVerification(this.API_TOKEN, this.API_SECRET, this.DATACENTER, {
      type: "BS",
      userReference: "123456789",
      country: "USA",
      customerInternalReference: "123456789",
      //reportingCriteria: "ReportingCriteria",
      //callbackUrl: "URL",
      //documentName: "Name",
      //enableExtraction: true,
      //customDocumentCode: "Custom",
      //cameraPosition: "back"
    }, {
      // Customization iOS only
      //disableBlur: true,
      //enableDarkMode: true,
      //backgroundColor: "#ff0000",
      //foregroundColor: "#ff0000",
      //tintColor: "#ff0000",
      //barTintColor: "#ff0000",
      //textTitleColor: "#ff0000",
      //positiveButtonBackgroundColor: "#ff0000",
      //positiveButtonBorderColor: "#ff0000",
      //positiveButtonTitleColor: "#ff0000",
      //negativeButtonBackgroundColor: "#ff0000",
      //negativeButtonBorderColor: "#ff0000",
      //negativeButtonTitleColor: "#ff0000"
    });

    Jumio.startDocumentVerification(function(documentData) {
      document.getElementById("log").textContent = JSON.stringify(documentData);
    }, function(error) {
      document.getElementById("log").textContent = JSON.stringify(error);
    });
  }

  startBAM= () =>  {
    // BAM Checkout
    Jumio.initBAM(this.API_TOKEN, this.API_SECRET, this.DATACENTER, {
      cardHolderNameRequired: true,
      //sortCodeAndAccountNumberRequired: false,
      //expiryRequired: true,
      //cvvRequired: false,
      //expiryEditable: false,
      //cardHolderNameEditable: false,
      //reportingCriteria: "ReportingCriteria",
      //vibrationEffectEnabled: true,
      //enableFlashOnScanStart: false,
      //cardNumberMaskingEnabled: false,
      //offlineToken: "TOKEN",
      //cameraPosition: "back",
      //cardTypes: ["VISA", "MASTER_CARD", "AMERICAN_EXPRESS", "CHINA_UNIONPAY", "DINERS_CLUB", "DISCOVER", "JCB"]
    }, {
      // Customization iOS only
      //disableBlur: true,
      //backgroundColor: "#ff0000",
      //foregroundColor: "#ff0000",
      //tintColor: "#ff0000",
      //barTintColor: "#ff0000",
      //textTitleColor: "#ff0000",
      //defaultButtonBackgroundColor: "#ff0000",
      //defaultButtonTitleColor: "#ff0000",
      //activeButtonBackgroundColor: "#ff0000",
      //activeButtonTitleColor: "#ff0000",
      //fallbackButtonBackgroundColor: "#ff0000",
      //fallbackButtonBorderColor: "#ff0000",
      //fallbackButtonTitleColor: "#ff0000",
      //positiveButtonBackgroundColor: "#ff0000",
      //positiveButtonBorderColor: "#ff0000",
      //positiveButtonTitleColor: "#ff0000",
      //negativeButtonBackgroundColor: "#ff0000",
      //negativeButtonBorderColor: "#ff0000",
      //negativeButtonTitleColor: "#ff0000",
      //scanOverlayTextColor: "#ff0000",
      //scanOverlayBorderColor: "#ff0000"
    });

    Jumio.startBAM(function(cardInformation) {
      document.getElementById("log").textContent = JSON.stringify(cardInformation);
    }, function(error) {
      document.getElementById("log").textContent = JSON.stringify(error);
    });
  };
}
