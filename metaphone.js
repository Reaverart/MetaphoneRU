(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.metaphoneRu = factory();
  }
}(this, function () {
    function normalize (token) {
        token = token.toUpperCase();
        return token.replace(/Ъ|Ь|-/g, '')
    }

    function removeDuplicates (token) {
        return token.replace(/(.)\1/gi, '$1')
    }

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
        process: function (token) {
            token = normalize(token);
            token = removeDuplicates(token);
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
            token = removeDuplicates(token);

            return token;
        }
    };
}));