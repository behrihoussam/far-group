const farStafford = document.querySelector(".far_stafford");
const sanfordFederal = document.querySelector(".sanford_federal");
const talonVeteran = document.querySelector(".talon_veteran");
const safroCorp = document.querySelector(".safro_corp");
const farGov = document.querySelector(".far_gov");
const sepfar = document.querySelector(".sepfar");

const Far_Stafford = {
    name: "Far Stafford",
    description: "Far stafford stands amongst the leading operatives of its province, our quality based performance is by virtue of our most promising and highly skilled personnel, that in their turn will service your business to the best of their capabilities, allowing you to further develop your business and achieve greater economic growth.",
    tagline: "We revamp the meaning of quality performance, by providing highly skilled personnel, that will significantly improve your business’ development and prosperity.",
    location: "La Baie de Tanger, Tanger 90000",
    website: "https://far-stafford.com",
}
const Sanford_Federal = {
    name: "Sanford Federal",
    description: "Sanford Federal INC. Headquartered In Stafford, VA Is a premier, federal professional services company, we lead amongst the most innovative, respected and ethical services providers for the United States of America. Amongst our numerous diverse services, we offer home health care services, apprenticeship training, flight training, marine cargo handling… Among our everlasting priorities is to match high quality standards of performance, in order to primely assist Federal agencies in aiding and serving the American people.",
    tagline: "bending the definition of what it means to face difficulty, and standing unphased before challenges, ultimately making technology smarter, communication easier, nations safer, and communities stronger.",
    location: "800 Corporate Dr Ste 301 Stafford, VA 22554-4889 USA",
    website: "https://sanfordfederal.com",
}
const Talon_Veteran = {
    name: "Talon Veteran",
    description: "Talon Veteran Services is a privately-owned design, building and construction company. Established in 2009, we forged a heritage by virtue of the years of service to the construction industry, and with over 12 Years of expertise and a combined 200 years of experience on our team, which served as testament to the company’s commitment, expertise and integrity in all of what it does. Projects undertaken by the TALON team include facilities and construction support services for the department of defense, commercial and residential high-rise, mining and resources industry infrastructure projects, industrial, sporting, health, government, retail, education, hotel and club, tourism, civil works and modular construction, particularly student and resource sector accommodation. Headquartered in Richmond, VA now has a branch office network throughout the world that reaches every continent.",
    tagline: "As a veteran owned small company, we endeavor to deliver outstanding quality, and show pride in the heritage forged by our years of servicing the construction industry. Along with our undeniable expertise and the fact that we know what it takes to serve in the army, Talon veteran services’ primary objective is to deliver with utter excellence.",
    location: "3516 BELT BLVD RICHMOND, VA 23234-1521 USA",
    website: "https://www.talonvet.com",
}
const Safro_Corp = {
    name: "Safro Corp",
    description: "SAFRO Corp is a prime solutions services company that provides a vast spectrum of services to aid companies and federal agencies to further develop their business procedures",
    tagline: "Achieving the modern dynamic market needs at an exceptional rate of performance.",
    location: "3516 Belt Blvd Richmond, VA 23234-1521 USA",
    website: "https://safrocorp.com",
}
const Far_Gov = {
    name: "Far Government",
    description: "FAR Gov is the first foundation of global solutions services, providing all required services by all governmental agencies worldwide, all while overcoming all odds and performing through all predicaments.",
    tagline: "Dispensing any & all required solutions services, against any & all odds or conditions.",
    location: "800 CORPORATE DR STE 301 Stafford, VA 22554-4889 USA",
    website: "https://www.fargov.com/",
}
const Sepfar = {
    name: "SEPFAR",
    description: "SEPFAR is the fore most solutions services company for the middle east. We dispense reliable, remarkable, and above the norm quality of service.",
    tagline: "Defining the authentic meaning of quality of service.",
    location: "800 Corporate Dr Ste 301 Stafford, VA 22554-4889 USA",
    website: "https://sepfar.com/",
}

let companyName = document.querySelector(".company_upper--section_title");
let companyDescription = document.querySelector(".company_upper--section_description");
let companyTagline = document.querySelector(".company_lower--section_information-tagline");
let companyLocation = document.querySelector(".company_lower--section_information-location");
let companyWebsite = document.querySelector(".company_lower--section_website");

const toggleCompany = (company) => {
    companyName.innerHTML = company.name;
    companyDescription.innerHTML = company.description;
    companyTagline.innerHTML = company.tagline;
    companyLocation.innerHTML = company.location;
    companyWebsite.href = company.website;

    document.getElementById("company_container").scrollIntoView();
}

const animateCompany = () => {
    const companyContainer = document.querySelectorAll(".company--container");
    companyContainer.forEach((company) => {
        setTimeout(() => {
            company.classList.add("company--container_animate");
        }, 100);
        company.classList.remove("company--container_animate");
    })
}

farStafford.addEventListener("click", () => {
    toggleCompany(Far_Stafford);
    animateCompany();
});
sanfordFederal.addEventListener("click", () => {
    toggleCompany(Sanford_Federal);
    animateCompany();
});
talonVeteran.addEventListener("click", () => {
    toggleCompany(Talon_Veteran);
    animateCompany();
});
safroCorp.addEventListener("click", () => {
    toggleCompany(Safro_Corp);
    animateCompany();
});
farGov.addEventListener("click", () => {
    toggleCompany(Far_Gov);
    animateCompany();
});
sepfar.addEventListener("click", () => {
    toggleCompany(Sepfar);
    animateCompany();
});
