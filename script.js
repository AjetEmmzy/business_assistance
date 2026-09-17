function nextStep(current) {
    document.getElementById("step"+ current).style.display='none';
    document.getElementById("step"+ (current + 1)).style.display='flex';
}
function prevStep(current) {
    document.getElementById("step"+ current).style.display='none';
    document.getElementById("step"+ (current - 1)).style.display='flex';
}

function validateBusiness() {
    clearErrors("step1");
    let isValid = true;
    
    const businessClassify = document.getElementById('business_classname');
    const businessType = document.getElementById('business_type');
    const businessName = document.getElementById('business_name');
    const businessCategory = document.getElementById('business_category');
    const businessNature = document.getElementById('business_nature');
    const businessDesc = document.getElementById('business_desc');

    if (businessClassify.value === "") {
        showError(businessClassify, 'Please select a Business Classification');
        isValid = false;
    }

    if (businessType.value === "") {
        showError(businessType, 'Please select a Business Type');
        isValid = false;
    }

    if (businessName.value.trim() === "") {
        showError(businessName, 'Please enter your business name');
        isValid = false;
    }

    if (businessCategory.value.trim() === "") {
        showError(businessCategory, 'Please enter your Business category');
        isValid = false;
    }

    if (businessNature.value.trim() === "") {
        showError(businessNature, 'Please enter nature of your business');
        isValid = false;
    }

    if (businessDesc.value.trim() === "") {
        showError(businessDesc, 'Please describe your business');
        isValid = false;
    }
    return isValid
}

function showError(businessEl,message){
    const errorEl = document.createElement("span");
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    businessEl.insertAdjacentElement('afterend', errorEl);
    businessEl.style.border = "1px solid #c74141";
}

function clearErrors(sectionId) {
    const section = document.getElementById(sectionId);
    section.querySelectorAll('.error-message').forEach(el => el.remove());
    section.querySelectorAll('input, select').forEach(el => el.style.border = "");
}
document.getElementById('next_button1').addEventListener('click', () => {
    if (validateBusiness()){
        nextStep(1)
    } 
});

function validateOwner (){
    clearErrors('step2');
    isValid = true;

    const fullName = document.getElementById('full_name');
    const email = document.getElementById('email');
    const dateBirth = document.getElementById('dob');
    const phoneNo = document.getElementById('phone_no');
    const nin = document.getElementById('nin');
    const ownerAddress = document.getElementById('res_address');

    if (fullName.value.trim() === "") {
        showError(fullName, "Please enter your full name")
        isValid = false;
    }

    if (email.value.includes('@') || email.value.trim() === "") {
        showError(email, "Please enter a valid email address");
        isValid = false;
    }

    if (dateBirth.value.trim() === "") {
        showError(dateBirth, "Please enter your date of birth");
        isValid = false;
    }

    if (phoneNo.value.trim() === "") {
        showError(phoneNo, "Please enter your Phone number");
        isValid = false;
    }

    if (String(nin.value.trim()).length >= 12 || nin.value.trim() === "") {
        showError(nin, "Please enter a valid NIN");
        isValid = false;
    }

    if (ownerAddress.value.trim() === "") {
        showError(ownerAddress, "Enter your home address");
        isValid = false;
    }

    return isValid
};

document.getElementById('next_button2').addEventListener('click', () => {
    if (validateOwner()){
        nextStep(2)
    } 
});

function validateDocuments() {
    clearErrors('step3');
    isValid = true;

    const businessAddress = document.getElementById('bus_address');
    const regNo = document.getElementById('reg_no');
    const tax = document.getElementById('tin');
    const cio = document.getElementById('cio');
    const poa = document.getElementById('poa');

    if (businessAddress.value.trim() === "") {
        showError(businessAddress, "Please enter your business address");
        isValid = false;
    }

    if (String(regNo.value.trim()) === "") {
        showError(regNo, "Enter your registration number");
        isValid = false;
    }

    if (String(tax.value,trim()) === "") {
        showError(tax, "Enter your Tax Identification Number");
        isValid = false;
    }
    if (cio.value.trim().length === 0) {
        showError(cio, "Provide your Certificate of Incorporation");
        isValid = false;
    }

     if (poa.value.trim().length === 0) {
        showError(poa, "Provide your Proof of Address");
        isValid = false;
    }

    return isValid
};

document.getElementById('next_button3').addEventListener('click', () => {
    if (validateDocuments()){
        nextStep(3)
    } 
});

function validateBank() {
    clearErrors('step4');
    isValid = true;

    const bankName = document.getElementById('bank_name');
    const accName = document.getElementById('acc_name');
    const accNo = document.getElementById('acc_no');

    if (bankName.value.trim() === "") {
        showError(bankName, "Please enter your bank name");
        isValid = false;
    }

    if (accName.value.trim() === "") {
        showError(accName, "Please enter your Account name");
        isValid = false;
    }
    
    if (String(accNo.value.trim()).length >= 12 || accNo.value.trim() === "") {
        showError(accNo, "Please enter your account number");
        isValid = false;
    }

    return isValid
};

document.getElementById('next_button4').addEventListener('click', () => {
    if (validateBank()){
        nextStep(4);
        alert("Form submitted successfully")
    } 
});