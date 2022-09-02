function openTab(tabName) {
    let i;
    let tabContent;

    tabContent = document.getElementsByClassName("tab-content");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "flex";
    document.getElementById(tabName).scrollIntoView();
}


// This needs to DRY'ed up so it can be used with a CMS
let ProfesionalServicesLinkEl = document.getElementById("ProfesionalServicesLink");
let LogisticsLinkEl = document.getElementById("LogisticsLink");
let ConstructionAndInfrastructureLinkEl = document.getElementById("ConstructionAndInfrastructureLink");
let SecurityMilitaryProductsLinkEl = document.getElementById("SecurityMilitaryProductsLink");
let ScientificAndTechnicalLinkEl = document.getElementById("ScientificAndTechnicalLink");
let BusinessProcessOutsourcingLinkEl = document.getElementById("BusinessProcessOutsourcingLink");

ProfesionalServicesLinkEl.addEventListener("click", function () { openTab("ProfesionalServices") }, false);
LogisticsLinkEl.addEventListener("click", function () { openTab("Logistics") }, false);
ConstructionAndInfrastructureLinkEl.addEventListener("click", function () { openTab("ConstructionAndInfrastructure") }, false);
SecurityMilitaryProductsLinkEl.addEventListener("click", function () { openTab("SecurityMilitaryProducts") }, false);
ScientificAndTechnicalLinkEl.addEventListener("click", function () { openTab("ScientificAndTechnical") }, false);
BusinessProcessOutsourcingLinkEl.addEventListener("click", function () { openTab("BusinessProcessOutsourcing") }, false);





