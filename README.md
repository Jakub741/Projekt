# Projekt č.1

S využitím knihovny ReactJS vytvořte komponentu pro přehled všech vypsaných termínů ke zkoušce u daného předmětu a výsledků dosažených v minulých termínech.
Vztáhněte data k učební skupině.
Potřebná data převezměte z props.

data : 
    předmět, 
    uč. skupina, 
    vypsané termíny (studenti co jsou přihlášeni a výsledky), id temrínu, datum a čas, seznam studentů a výsledky (nebo bez výsledku)
### VERZE ALFA ### 

Na verzi alfa jsou jen základní HTML prvky s využitím frameworku Bootstrap 5. 
Vzhled stránky se moc neupravoval, jelikož se využilo css co je zabudovaný v Bootstrapu.

Index.html je základní stránka, která by se mohla podobovat "Rozvrhy v1.0" na IS UNOB a zadává se tam zvolené období. Odkazuje na letni.html a zimni.html
letni a zimni.html je naše vybrané období, ve kterém si vybíráme studenta, obor a předmět. Odkazuje na prehled.html a prehledL.html
prehled a prehled.html 
prehled a prehledL.html slouží pro přehled naších vybraných hodnot ze stránky letni.html a zimni.html a u vybrraných předmětů ve zkouškách je odkaz na zápis ke zkoušce.
zapisL.html a zapisZ.html slouží pro zapsání studenta na vybranou zkoušku. Po potrvzení to vrátí zpátky na přehled


### VERZE ALFA v.1 ###

Upravil se kód do verze, se kterou budeme pracovat
Máme stránku index.html, na které, jak je v zadání, je základní vzhled.
Máme tam předmět, termín, hodnocení a kolik studentů bylo na zkoušce v danéém termínu.

#### VERZE ALFA v.2 ###

Ještě jednou se upravil kód, kde se využila třída "collapse". Po výběru termínu vyjede tabulka se studenty a výsledky.
Výběr termínu je v jedné tabulce a studenti a výsledky v jiné.
Po konzultaci s p. Štefkem uvidíme, jestli se s touto verzí bude pracovat.
### ZBYTEČNĚ KOMPLIKOVANÉ, je to třeba zjednodušit


### Verze Beta třeba ###

Po měsíci trápení a nevědění co dělat jsme se do toho konečně pustili. Tlačí na nás čas, tak by nebylo na škodu něco začít dělat.
Předešlí kód byl opět moc komplikovaný, tak se musel zjdednodušit. Kdybychom pochoppili zadáníí hned ze začátku, tak bychom mmohli pokročit už dřív, ale hrát si s bootstrapem je sice jednoduché, ale nudné. 
Teď je to jednuduché jak facka, ale problém je, že máme tři tabulky. Zní to komplikovaně, ale snad se to dá jednodučše implementovat. Co mě napadá je použít tři indexy, nebo rooty, či jak se to jmenuje. Ten root dáme mezi prvky z BS (ne bullshit ale bootstrap) a to mezi < col >.


## Co udělat do příští verze (Verze Beta)?

1. Upravit vzhled stránky - stále platí
2. Začít využívat prvky z ReactJS
    Použít funkce a pro každou komponentu(table, button, card)
    ## UŽ JE TŘBA IMPLEMENTOVAT TEN REACT ABYCHOM SE POHLI
3. Chceme aby se tabulka přepsala, jakmile klikneme na jiný termín.
    Momentálně, podle chuti mě, se to zobrazuje horizontálně nebo vertikálně
    Při horizontálním vzhledu zůstavá tabulka odsazena vpravo a chceme, aby se přepsala.
    Při vertikálním se zobrazí tabulky pod sebe, ale jakmile zmizne vrchní, tak ta spodní se přesune místo té první.
    Teď když nad tím tak uvažuji, tak by bylo lepší, aby byli horizontálně, jelikož to bude přehlednější.
    Ale je třeba použít funkci na přepsaní tabulky, když zmizne ta první.

4. Prostě, vole dáme tam jen tu tabulku a na ni použijeme react, jinak to bude moc hardcore!!!!



