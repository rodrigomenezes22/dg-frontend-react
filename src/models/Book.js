class Book {
    constructor( { title, isbn, appendixPage } ) {
        this.title = title;
        this.isbn = isbn;
        this.appendixPage = appendixPage;
    }
    get convertAppendixPage() {

        const romanNumerals = [
            { number: 1000, roman: "M" },
            { number: 900, roman: "CM" },
            { number: 500, roman: "D" },
            { number: 400, roman: "CD" },
            { number: 100, roman: "C" },
            { number: 90, roman: "XC" },
            { number: 50, roman: "L" },
            { number: 40, roman: "XL" },
            { number: 10, roman: "X" },
            { number: 9, roman: "IX" },
            { number: 5, roman: "V" },
            { number: 4, roman: "IV" },
            { number: 1, roman: "I" },
          ];

    let rommanValue = "";
    let number = this.appendixPage;
    for (let i = 0; i < romanNumerals.length; i++) {

        if (romanNumerals[i].number <= number) {
        number = number - romanNumerals[i].number;

        rommanValue = rommanValue + romanNumerals[i].roman;

        i--;
        }
    }

    return rommanValue;
    }

    get checkIsbn () {
        let isbn = this.isbn;

        const isValidISBN = (isbn) => {
            if (/[^0-9]/.test(isbn)) return false;
          
            let checksum = 0;
            for (let i = 0; i < isbn.length; i++) {
              const digit = parseInt(isbn[i]);
              if (i % 2 === 0) {
                checksum += digit;
              } else {
                checksum += 3 * digit;
              }
            }
          
            return checksum % 10 === 0;
          }

        const validateIsbn = isValidISBN(isbn);

        const formatISBN = (isbn) => {
            const formattedNumber = `${isbn.slice(0, 3)}-${isbn.slice(
              3,
              4
            )}-${isbn.slice(4, 9)}-${isbn.slice(9, 12)}-${isbn.slice(12)}`;
            return formattedNumber;
        }


        if(validateIsbn) {
            return formatISBN(isbn);
        } else {
            return "Invalid isbn!"
        }

    }




}




export default Book;