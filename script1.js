   // Завдання 1
   var userName = prompt('Введіть ваше ім\'я:');
   alert('Привіт, ' + userName + '!');

   // Завдання 2
   var currentYear = new Date().getFullYear();
   var birthYear = prompt('Введіть рік народження:');
   var age = currentYear - birthYear;
   alert('Вам ' + age + ' років.');

   // Завдання 3
   var sideLength = prompt('Введіть довжину сторони квадрата:');
   var perimeter = 4 * sideLength;
   alert('Периметр квадрата: ' + perimeter);

   // Завдання 4
   var radius = prompt('Введіть радіус кола:');
   var area = Math.PI * radius * radius;
   alert('Площа кола: ' + area);

   // Завдання 5
   var distance = prompt('Відстань між містами (км):');
   var time = prompt('За скільки годин ви хочете дістатися:');
   var speed = distance / time;
   alert('Потрібно рухатися зі швидкістю ' + speed + ' км/год.');

   // Завдання 6
   var usdAmount = prompt('Введіть суму в доларах:');
   var exchangeRate = 0.85; 
   var eurAmount = usdAmount * exchangeRate;
   alert('Ви отримаєте ' + eurAmount + ' євро.');

   // Завдання 7
   var flashDriveSizeGB = prompt('Обсяг флешки у ГБ:');
   var fileSizeMB = 820;
   var filesCount = Math.floor(flashDriveSizeGB * 1024 / fileSizeMB);
   alert('На флешці поміститься ' + filesCount + ' файлів розміром 820 МБ.');

   // Завдання 8
   var walletMoney = prompt('Сума грошей у гаманці:');
   var chocolatePrice = prompt('Вартість однієї шоколадки:');
   var chocolateCount = Math.floor(walletMoney / chocolatePrice);
   var change = walletMoney % chocolatePrice;
   alert('Ви можете купити ' + chocolateCount + ' шоколадок, і у вас залишиться ' + change + ' грошей.');

   // Завдання 9
   var threeDigitNumber = prompt('Введіть тризначне число:');
   var reversedNumber = parseInt(threeDigitNumber.toString().split('').reverse().join(''));
   alert('Паліндром: ' + reversedNumber);

   // Завдання 10
   var number = prompt('Введіть ціле число:');
   var isEven = number % 2 === 0;
   var result = isEven ? 'парне' : 'непарне';
   alert('Введене число - ' + result + '.');