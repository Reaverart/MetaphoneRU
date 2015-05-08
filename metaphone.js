/*
    Для всех гласных букв проделать следующие операции.
    ЙО, ИО, ЙЕ, ИЕ → И
    О, Ы, Я → А
    Е, Ё, Э → И
    Ю → У
    Для всех согласных букв, за которыми следует любая согласная, кроме Л, М, Н или Р, либо же для согласных на конце слова, провести оглушение:
    Б → П
    З → С
    Д → Т
    В → Ф
    Г → К
    Склеиваем ТС и ДС в Ц:
    ТС → Ц
*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.metaphoneRu = factory();
  }
}(this, function () {
    function IOIEtoI (token) {
        return token.replace(/ЙО|ИО|ЙЕ|ИЕ/g, 'И')
    }
    
    function OIAtoA (token) {
        return token.replace(/О|Ы|Я/g, 'А')
    }

    function EtoI (token) {
        return token.replace(/Е|Ё|Э/g, 'И')
    }

    function UtoY (token) {
        return token.replace(/Ю/g, 'У')
    }
    return {
        code: function (token) {
            token = token.toUpperCase();

            token = IOIEtoI(token);
            token = OIAtoA(token);
            token = EtoI(token);
            token = UtoY(token);

            return token;
        }
    };
}));