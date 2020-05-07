var _name = document.getElementById("_name");
var namem = document.getElementById("nameSurname");
var department = document.getElementById("department");
var _department = document.getElementById("_department");
var position = document.getElementById("position");
var _position = document.getElementById("_position");
var number = document.getElementById("number");
var _number = document.getElementById("_number");
var innumber = document.getElementById("innumber");
var _innumber = document.getElementById("_innumber");
var _copy = document.getElementById("_copy");
var lang = document.getElementById("lang");
var _person = document.getElementById("_person");
var unvan = document.getElementById("unvan");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var lname = document.getElementById("lname");
var lposition = document.getElementById("lposition");
var ldepartment = document.getElementById("ldepartment");
var lnumber = document.getElementById("lmobile");
var linner = document.getElementById("linner");

_name.addEventListener('input', function() {
    namem.innerHTML = _name.value + ","
})

_department.addEventListener('input', function() {
    department.innerHTML = _department.value
})

_position.addEventListener('input', function() {
    position.innerHTML = _position.value + "&nbsp;"
})

_number.addEventListener('input', function() {
    number.innerHTML = "Mob: " + _number.value + " "
})

_innumber.addEventListener('input', function() {
    innumber.innerHTML = " |  " + "*0990" + " (" + _innumber.value + ")";
})

function SelectText(element) {
    var doc = document,
        text = doc.getElementById(element),
        range, selection;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(function() {
    $('#_copy').click(function() {
        SelectText('copysign');
        document.execCommand('copy');

    });
});

lang.addEventListener('change', function() {
    if (lang.value == "1") {
        lname.innerHTML = "Name Surname";
        lposition.innerHTML = "Position";
        ldepartment.innerHTML = "Department";
        lnumber.innerHTML = "Mobile number";
        linner.innerHTML = "Internal number";
        unvan.innerHTML = "Street Address., AZ1000 Baku, Azerbaijan";
        position.innerHTML = "Position";
        department.innerHTML = "Division/Department";
        namem.innerHTML = "Name Surname";
        _copy.innerHTML = "COPY TO CLIPBOARD";
        text1.innerHTML = "Please do not print this email unless it is necessary. Every unprinted email helps the environment."
        text2.innerHTML = "CONFIDENTIALITY NOTICE: This email is intended only for the person(s) named in the message header."
        text3.innerHTML = "If you have received this message in error, please notify the sender of the error and delete the message."
    } else if (lang.value == "2") {
        lname.innerHTML = "Ad Soyad";
        lposition.innerHTML = "Vəzifə";
        ldepartment.innerHTML = "Şöbə/Departament";
        lnumber.innerHTML = "Mobil nömrə";
        linner.innerHTML = "Daxili nömrə";
        unvan.innerHTML = "Street Address., AZ1000 Baku, Azerbaijan";
        position.innerHTML = "Vəzifə";
        department.innerHTML = "Şöbə/Departament";
        namem.innerHTML = "Ad Soyad";
        _copy.innerHTML = "BUFERƏ KÖÇÜRMƏK";
        text1.innerHTML = " Xahiş edirik, bu e-mailı çap etmədən öncə təbiəti düşünün. Hər çap olunmamış e-mail ətraf mühitin qorunmasına kömək edir"
        text2.innerHTML = "KONFİDENSİALLIQ XƏBƏRDARLIĞI: Bu e-mail yalnız məktub başlığında adı qeyd olunmuş şəxs(lər) üçün nəzərdə tutulub.";
        text3.innerHTML = "Bu e-mailı səhvən almısınızsa, xahiş edirik bu barədə məktubu göndərənə məlumat verəsiniz və e-mailı siləsiniz.";
    } else if (lang.value == "3") {
        lname.innerHTML = "Имя и фамилия";
        lposition.innerHTML = "Должность";
        ldepartment.innerHTML = "Департамент";
        lnumber.innerHTML = "Мобильный номер";
        linner.innerHTML = "Внутренний номер";
        unvan.innerHTML = "пос. , AZ1000, Азербайджан";
        position.innerHTML = "Позиция";
        department.innerHTML = "Отдел/Департамент";
        namem.innerHTML = "Имя Фамилия";
        _copy.innerHTML = "Скопировать в буфер";
        text1.innerHTML = " Пожалуйста, подумайте о прироте прежде чем распечатать это письмо. Каждое нераспечатанное письмо помогает сохранению окружающей среды."
        text2.innerHTML = "CONFIУВЕДОМЛЕНИЕ О КОНФИДЕНЦИАЛЬНОСТИ: Это письмо предназначено только для лиц, указанных в заголовке данного письма."
        text3.innerHTML = "Если Вы получили письмо по ошибке, просим сообщить об этом отправителю и удалить письмо."
    }
})