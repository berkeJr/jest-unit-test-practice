// İki sayının toplamını dönen fonksiyon:

const sum = (num1, num2) => {
    return num1 + num2;
}


// module.export objesi sayesinde test dosyasından sum fonksiyonuna erişim sağlayacağız.

module.exports = {
    sum,
};