/*
    Для всех гласных букв (А, Е, Ё, И, О, У, Ы, Э, Ю, Я) проделать следующие операции.
    ЙО, ИО, ЙЕ, ИЕ → И
    О, Ы, Я → А
    Е, Ё, Э → И
    Ю → У
    Для всех согласных букв (Б, В, Г, Д, Ж, З, Й, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ), за которыми следует любая согласная, кроме Л, М, Н или Р, либо же для согласных на конце слова, провести оглушение:
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
    function IOtoI (token) {
        return token.replace(/ЙО|ИО|ЙЕ|ИЕ/g, 'И')
    }
    
    function OtoA (token) {
        return token.replace(/О|Ы|Я/g, 'А')
    }

    function EtoI (token) {
        return token.replace(/Е|Ё|Э/g, 'И')
    }

    function UtoY (token) {
        return token.replace(/Ю/g, 'У')
    }

    function BtoP (token) {
        token = token.replace(/Б(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'П$1')
        token = token.replace(/Б$/, 'П')
        return token
    }

    function ZtoS (token) {
        token = token.replace(/З(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'С$1')
        token = token.replace(/З$/, 'С')
        return token
    }

    function DtoT (token) {
        token = token.replace(/Д(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'Т$1')
        token = token.replace(/Д$/, 'Т')
        return token
    }

    function VtoF (token) {
        token = token.replace(/В(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'Ф$1')
        token = token.replace(/В$/, 'Ф')
        return token
    }

    function GtoK (token) {
        token = token.replace(/Г(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'К$1')
        token = token.replace(/Г$/, 'К')
        return token
    }

    function TStoC (token) {
        return token.replace(/ТС|ДС/g, 'Ц')
    }
    return {
        code: function (token) {
            token = token.toUpperCase();

            token = IOtoI(token);
            token = OtoA(token);
            token = EtoI(token);
            token = UtoY(token);
            token = BtoP(token);
            token = ZtoS(token);
            token = DtoT(token);
            token = VtoF(token);
            token = GtoK(token);
            token = TStoC(token);

            return token;
        }
    };
}));