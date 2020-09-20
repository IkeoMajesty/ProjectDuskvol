function randomiser(props) {

    let range;                                                       // USTAL ZASIĘG Z JAKIEGO BEDZIE LOSOWAC
    let data = [];                                                  // DANE Z JAKICH CHCESZ LOSOWAC
    if (Array.isArray(props)){                                      //SPRAWDZ CZY PROPS TO ARRAY JESLI TAK ROB TEN BLOK KODU
        data = props                                                //WIEC TERAZ JESLI TO JEST ARRAY TO WSADZ PROPS DO DATA
        range = data.length                                         //ZASIE LOSOWANIA TO ILOSC ELEMENTOW W ARRAY
        console.log("Array:",data, range, Math.round(Math.random() * range) ); //CONSOLE LOG ZEBY SPRAWDZIC CZY WSZYSTKO SIE ZGADZA
        
        return data[Math.round(Math.random() * (range-1))]          //ZWROC WARTOSC KTORA ZNAJDUJE SIE W DATA POD INDEXEM KTORY WYJDZIE Z LOSOWANIA (RANGE-1 BO INDEXOWANIE ZACZYNAMY OD 0)
    }else{                                                          // W INNYM PRZYPADKU (MOŻNA TU JESZCZE DAC ŁAPANIE JAK JAKIŚ DEBIL DA NIC ALBO STRING) ZAWSZE BEDZIE OBJECT
        for (let [key] of Object.entries(props)) {                  //PRZELEC PRZEZ WSZYSTKIE WARTOSCI W OBIEKCIE I KLUCZ KAZDEJ WRZUC DO ARRAY DATA 
            data.push(key);
          }
        range = data.length                                         //ZNOW USTAL RANGE NA ILOSC ELEMENTOW W ARRAY DATA
        const randomNumber = Math.round(Math.random() * (range-1)) //WYLOSUK JAKI INDEX BEDZIE UZYTY
        const keyToReturn = data[randomNumber]                      //TERAZ KTORY KLUCZ BEDZIE ZWRACANY
        console.log("OBJ:", "props",props,"data",data,"range", range, "keytoreturn:",keyToReturn,"randomNumber:", randomNumber); //CONSOLE LOG DO SPRAWDZENIA
        return props[keyToReturn]                                   //I TERAZ BIERZESZ WARTOSC KTORA JEST POD KLUCZEM W OBJECT

    }

    

    
}

export default randomiser
