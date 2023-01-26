# NETMATE - Michal Matúš
# Vstupní zadání na pozici front-end developer

Popis
Vytvořit modul s prostředím pro selekci svg ikon do předem připravených slotů. Vstupem bude JSON pole objektů, získané z existujícího API endpointu.
Projekt bude stavěn na frameworku Bootstrap 5. Další knihovny a pluginy jsou na Vašem uvážení.
Celkově bude potřeba vypracovat dvě hlavní části:

Část 1: HTML stránka se 4mi prázdnými sloty.
Část 2: Galerie ikon. Tato galerie se zobrazí po kliknutí na jeden ze slotů na hlavní stránce.

Po kliknutí na jednu z ikon v galerii se galerie zavře. Na slotu, kterým byla galerie vyvolána se zobrazí vybraná ikona. Tzn. pokud kliknu na třetí slot a následně v galerii na ikonu Design – Fusion, zobrazí se tato ikona na třetím slotu a galerie se zavře. Dále přidejte na první místo v galerii ikonu, pomocí které se slot vyprázdní.
Ikony v galerii budou mít take přidělené ID (či `data-id` atribut), které se zapíše do atributu `data-icon`, který s sebou nese každý slot. Tzn. slot 1 bude mít atribut “data-icon” prázdný, ale po zvolení ikony se hodnota atributu změní např. na data-icon=”143”.
Dále je potřeba, aby součástí galerie bylo také fulltextové vyhledávání ikon. Toto vyhledávání bude pracovat pouze nad názvy ikon.

Bonusové zadání:
Vytvořit v galerii ovládací prvek `<select>`, který bude obsahovat 2 položky: `Vše` a `Energie`. Výchozí položka bude “Vše”. Pokud uživatel překlikne toto pole na položku “Energie”, budou se zobrazovat pouze ikony, které mají v názvu slovo “Energie”. Po překliknutí zpět na “Vše” se znovu zobrazí všechny ikony.

API endpoint pro načítání ikon:
[http://82.142.87.102/extAPI/api/icon/read.php?parent=2](http://82.142.87.102/extAPI/api/icon/read.php?parent=2)

Umístění ikony je potom nasledující:
[https://eletak.oresi.cz/files/Icons/CZ/](https://eletak.oresi.cz/files/Icons/CZ/) + pole “filename” z JSONu.


