# Zadanie praktyczne React.js – poziom Junior

Jest to pierwszy poziom zadania przeznaczonego do potwierdzenia umiejętności z zakresu użycia biblioteki React.js oraz wszelkich technologii ościennych powiązanych z front-endem. 

Aplikacja, która będzie wypadkową poniższego zadania będzie podlegała code review i generalnej ocenie mającej stwierdzić, czy poziom kandydata jest wystarczający do zajęcia stanowiska React.js developera na określonym w zadaniu poziomie.

Kolejne poziomy zadania dotyczyć będą dokładnie tej samej aplikacji, jednakże wymagania dot. zastosowanych rozwiązań będą znacząco się różnić. Tym samym, na podstawowym poziomie nacisk zostanie położony na faktyczne funkcjonalności, podczas gdy na wyższych poziomach większa uwaga zostanie zwrócona na poprawną konfigurację projektu, zastosowane technologie pomocnicze, czystość kodu i poprawność architekturalna, wydajność kodu a nawet odpowiednia dokumentacja.

## Przedmiot zadania

Przedmiotem zadanie jest wykonanie komponentu fund screenera w sposób, który umożliwia go wyświetlenie w przeglądarce. 

**Figma**\
[Przejdź do portalu Figma](https://www.figma.com/file/Azr8l4GDxIKhz2kxk1mFnn/Zadanie-praktyczne-React.js-%E2%80%93-poziom-Junior?node-id=3%3A6089). Plik zawiera zarówno interfejs graficzny, jak i mapowanie umieszczone w komentarzach.

Aplikacja składa się z poniższych elementów:
* **Wyszukiwarka** – Pole tekstowe, które pozwala przefiltrować wyniki w tabeli. Komponent, 250ms po wpisaniu frazy w input, powinien ograniczyć zawartość tabeli do funduszy, które w polu `name`, lub `fundName` zawierają szukaną frazę,
* **Filtry** – Zbiór selectboksów, które pozwalają przefiltrować wyniki w tabeli, Komponent wyświetla wszystkie unikalne opcje dostępne z zestawu danych w ramach selectboksów, oraz powinien ograniczyć zawartość tabeli do funduszy, które w odpowiadających mapowaniach zawierają wybraną opcję. Filtrowanie powinno się odbywać po stronie klienta, a zatem po wykonaniu pierwszego zapytania do API, dalsza komunikacja nie powinna być już prowadzona.
* **Tabela** (Lista wyników) – Przestrzeń do wyświetlenia funduszy inwestycyjnych. Tabela powinna być łatwo konfigurowalna, a dodawanie lub usuwanie nowych pól nie powinno zajmować z reguły więcej niż 60 sekund.
  Tabela grupuje wyniki przychodzące z API po polu `fundName`, oraz domyślnie ukrywa wszystkie share classy należące do danej grupy. Po naciśnięciu grupy, powinny ukazywać się wszystkie fundusze o takim samym `fundName` posortowane po parametrze `name` od A do Z.
  W zależności od wyboru taba, tabela powinna wyświetlać różne kolumny, natomiast otwarte grupy powinny zostać zachowane pomiędzy tabami.

### Scenariusze testowe

**Komunikacja**
- [ ] Przyjmując, że użytkownik załadował aplikację ale surowe dane nie zostały jeszcze załadowane z zewnętrznego API, wyświetlona jest maska przysłaniająca interfejs w 90%, oraz wyświetlany jest animowany loader SVG,
- [ ] Przyjmując, że użytkownik załadował aplikację, surowe dane zostają załadowane z zewnętrznego API,
- [ ] Przyjmując, że użytkownik załadował aplikację, oraz że surowe dane zostały załadowane z zewnętrznego API, filtry zostają uzupełnione unikalnymi wartościami dla danego mapowania oraz wartością "All" jako standardowy stan,
- [ ] Przyjmując, że użytkownik załadował aplikację, oraz że surowe dane zostały załadowane z zewnętrznego API, żadna komunikacja z API nie powinna być już prowadzona w żadnej faz z cyklu życia aplikacji,

**Wyszukiwanie**
- [ ] Przyjmując, że użytkownik wpisał frazę w wyszukiwarkę oraz minęło 250ms od czasu wpisania ostatniego znaku, dane wyświetlone w tabeli są limitowane jedynie do pozycji w których tytuły zawierają ciąg znaków (wielkość znaków powinna być ignorowana),
- [ ] Przyjmując, że użytkownik wpisał choć jeden znak w wyszukiwarkę, w ramach komponentu pojawia się przycisk do usunięcia zawartości pola tekstowego,

**Filtrowanie**
- [ ] Przyjmując, że użytkownik zmienił jeden z filtrów z domyślnego stanu wejściowego, dane wyświetlone w tabeli zostaną odpowiednio dostosowane do wyborów,
- [ ] Przyjmując, że użytkownik zmienił jeden z filtrów z domyślnego stanu wejściowego, dane pozostałych filtrów nie zmieniają się
- [ ] Przyjmując, że użytkownik zmienił jeden z filtrów z domyślnego stanu wejściowego, przed komponentami pojawia się przycisk "Clear All" przywracający ustawienia wejściowe,
- [ ] Przyjmując, że użytkownik zmienił więcej niż jeden filtr, relacja między filtrami zostaje ustawiona na `AND`

**Tabela**
- [ ] Przyjmując, że użytkownik załadował aplikację, oraz że surowe dane zostały załadowane z zewnętrznego API, użyty powinien zostać komponent tabów, wyświetlający tabele z funduszami w każdym z nich,
- [ ] Przyjmując, że użytkownik załadował aplikację, oraz że surowe dane zostały załadowane z zewnętrznego API, fundusze inwestycyjne pogrupowane zostają w zbiory o unikalnej nazwie zmapowanej do `FundName`,
- [ ] Przyjmując, że użytkownik załadował aplikację, oraz że surowe dane zostały załadowane z zewnętrznego API, oraz że fundusze inwestycyjne pogrupowane, grupy zostają wyświetlone w tabeli 
- [ ] Przyjmując, że grupy funduszy zostają wyświetlone w tabeli, naciśnięcie na grupę powoduje wyświetlenie wszystkich funduszy przylegających do danej grupy, jednocześnie, otwarcie grupy nie powoduje automatycznego zamknięcia innych grup,
- [ ] Przyjmując, że grupy funduszy zostają wyświetlone w tabeli, oraz fundusz został otwarty, wybór powinien pozostać po wybraniu innego taba,
- [ ] Przyjmując, że wybrane filtry nie pozwalają na wyświetlenie żadnego funduszu inwestycyjnego, tabela powinna wyświetlić komunikat o braku funduszy spełniających dane kryteria.

**Wyjątki**
- [ ] Przyjmując, że komunikacja z API nie jest możliwa, aplikacja powinna wyświetlić błąd na masce przysłaniająca interfejs w 90%,
- [ ] Przyjmując, że dane zwrócone w API są niekompletne, oraz którekolwiek z rekordów nie zawierają pól `FundName` lub `Name`, całe elementy kolekcji powinny zostać odfiltrowane,
- [ ] Przyjmując, że dane zwrócone w API są niekompletne aplikacja powinna działać nieprzerwanie,
- [ ] Przyjmując, że dane liczbowe zwrócone przez API są niekompletne, aplikacja powinna wyświetlać symbol `-` w miejscach brakującej wartości

### Repozytorium

Repozytorium zadania zawiera 3 zasoby:
- Katalog `frontend/`, jako przestrzeń do stworzenia aplikacji frontendowej,
- Katalog `backend/`, który zawiera serwer lokalny bazujący na rozwiązaniu express.js i który to wystawia lokalne API do użycia w ramach aplikacji frontendowej. Dokumentacja API dostępna jest także w tym katalogu,
- oraz plik `README.md`.