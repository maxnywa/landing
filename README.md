# Проект Thomas Rhythm


## Структура папок


Название файлов | Содержание
----------------|----------------------
www             | Директория с готовым проектом
www/css         | Готовые стили к продакшену
www/js          | Готовый js к продакшену
www/img         | Готовые картинки к продакшену
www/fonts       | Шрифты            
guide.html      | Страница с примером использования стандартных компонентов и классов
index.html      | Основная страница, для проверки вносимых изменений



## Используемые в проекте технологии

Библиотека JavaScript - jQuery

## Плагины

* slick-slider - стилизация карусели
* slick-nav - стилизация мобильного меню

## Шрифты и иконки

***Иконки***

* Font-Awesome - иконочный шрифт
* Icons ET-Line- иконочный шрифт

***Шрифты:***

* Dosis: 300,400;
* Open Sans: 300,400,600;

## Стилизация стандартных компонентов и классов

***Компоненты***


1. Cтандартные блоки

* Контейнер с максимальной шириной 1200px
```css
.container
```
* Контейнер на всю ширину
```css
.container-fluid
```
* Стандартный блок
```css
.default-section
```
* Блок с внутренними отступами меньшими чем у стандартного блока
```css
.small-section
```
2. Заголовки

* Основной класс для заголовков,задаст шрифт 'Dosis', заглавные буквы и черный цвет текста
```css
.title
```
* Основной класс для заголовков, цвет текста белый 
```css
.title.title-white
```
* Стандартные заголовки секций с отступом 75px
```css
.title.section-title
```
* Подзаголовки серого цвета с отступом 20px
```css
.title.section-title-light
```
* Стандартный текст
```css
.default-text
```
* Оформление текста цитаты
```css
blockquote,
.blockquote
```
* Оформление автора цитаты
```css
blockquote span,
.blockquote span
```
3. Стандартные кнопки
* Класс для стандартной кнопки, задаст шрифт, внутренние отступы и заглавные букв
```css
.btn
```
* Стандартная кнопка с серым фоном
```css
.btn.btn-default
```
* Черная кнопка
```css
.btn.btn-black 
```
* Неактивная кнопка
```css
.btn[disabled]
```
* Изменение цвета фона стандартной кнопки при наведении
```css
.btn.btn-default:hover
```
* Изменение цвета фона черной кнопки при наведении 
```css
.btn.btn-black:hover
```
4. Поля для ввода иформации

* Oформление шрифта и отступов для полей ввода
```css
.form-control
```
* Делает поле ввода недоступным для ввода информации
```css
.form-control[disabled],
.form-control.disabled
```
5. Выравнивание элементов по горизонтали и вертикали

* Добавление класса выравнивает текст по правому краю
```css
.text-right
```
* Добавление класса выравнивает текст по левому краю
```css
.text-center
```
* Добавление класса выравнивает текст по всей ширине
```css
.text-justify
```
* Добавление класса прижимает блок к левому краю
```css
.pull-left
```
* Добавление класса прижимает блок к правому краю
```css
.pull-right
```
* Отменяет прижатие блока к правому или левому краю
```css
.m-auto{
```
6. Цвет фона

* Класс задает черный цвет фона
```css
.bg-black
```
* Класс задает серый цвет фона
```css
.bg-grey
```
---

## Основные контрольные точки media-запросов
```
@media (max-width: 1200px) - устройства c разрешением до 1200px
@media (max-width: 991px) - устройства c разрешением до 991px
@media (max-width: 767px) - устройства c разрешением до 767px
@media (max-width: 576px) - мобильные устройства c разрешением до 599px
@media (max-width: 479px) - мобильные устройства c разрешением до 479px
```
---