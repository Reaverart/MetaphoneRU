# MetaphoneRU
## Usage
Here is [demo](http://reaverart.github.io/MetaphoneRU/)

## Russian adoptation of metaphone.
Based on algorithm by Petr Kankovski

1. For all vowels do follow transitions:

  Character | Replacement 
  :-------------|:------------:
  ЙО, ИО, ЙЕ, ИЕ | И
  О, Ы, Я | A
  Ю | У
  Е, Ё, Э | И

2. For all consonants, prepends any other consonant, except Л, М, Н or Р, or for consonants in the ending do follow transitions:

  Character | Replacement 
  :-------------|:------------:
  Б | П
  З | С
  Д | Т
  В | Ф
  Г | К

3. Merge ТС and ДС to Ц:

  Character | Replacement 
  :-------------|:------------:
  ТС, ДС | Ц


## Русская адаптация Метафона.
Основана на алгоритме Петра Каньковского, оригинальной ссылки не сохранилось, поэтому в основу легла [эта статья](http://forum.aeroion.ru/topic461.html), а также отличный материал с [хабра](http://habrahabr.ru/post/114947/). В отличии от оригинального алгоритма, я также отказался от сжатия окончаний.

1. Для всех гласных букв проделать следующие операции.

  Символы | Заменяются на 
  :-------------|:------------:
  ЙО, ИО, ЙЕ, ИЕ | И
  О, Ы, Я | A
  Ю | У
  Е, Ё, Э | И

2. Для всех согласных букв, за которыми следует любая согласная, кроме Л, М, Н или Р, либо же для согласных на конце слова, провести оглушение:

  Символы | Заменяются на 
  :-------------|:------------:
  Б | П
  З | С
  Д | Т
  В | Ф
  Г | К
  
3. Склеиваем ТС и ДС в Ц:

  Символы | Заменяются на 
  :-------------|:------------:
  ТС, ДС | Ц