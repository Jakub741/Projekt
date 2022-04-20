# Projekt č.1

S využitím knihovny ReactJS vytvořte komponentu pro přehled všech vypsaných termínů ke zkoušce u daného předmětu a výsledků dosažených v minulých termínech.
Vztáhněte data k učební skupině.
Potřebná data převezměte z props.

### VERZE ALFA ###

Na verzi alfa jsou jen základní HTML prvky s využitím frameworku Bootstrap 5. 
Vzhled stránky se moc neupravoval, jelikož se využilo css co je zabudovaný v Bootstrapu.

Index.html je základní stránka, která by se mohla podobovat "Rozvrhy v1.0" na IS UNOB a zadává se tam zvolené období. Odkazuje na letni.html a zimni.html
letni a zimni.html je naše vybrané období, ve kterém si vybíráme studenta, obor a předmět. Odkazuje na prehled.html a prehledL.html
prehled a prehled.html 
prehled a prehledL.html slouží pro přehled naších vybraných hodnot ze stránky letni.html a zimni.html a u vybrraných předmětů ve zkouškách je odkaz na zápis ke zkoušce.
zapisL.html a zapisZ.html slouží pro zapsání studenta na vybranou zkoušku. Po potrvzení to vrátí zpátky na přehled

## Co udělat do příští verze?

1. Upravit vzhled stránky
2. Začít využívat prvky z ReactJS, například jak je v "Rozvrhy v1.0", kde po vybraném období nám to načte pole pro vyplnění informací k získání přehledu zkoušek
3. Vytvořit kalendář s přehledem zkoušek