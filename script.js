let name = prompt("Ismizi yoizng");

        let letter = prompt("Bronta harf yozing");

        if (name.toLowerCase().includes(letter.toLowerCase())) {
            alert("Bu harf sizni ismingizda bor");
        } else {
            alert("Bu harf sizni ismingizda yo'q");
        }