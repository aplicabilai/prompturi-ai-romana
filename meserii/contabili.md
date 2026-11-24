# Prompturi ChatGPT, Claude și Gemini pentru contabili, în română

13 prompturi gata de copiat pentru contabili, scrise direct în română. Merg în ChatGPT, Claude, Gemini, Grok sau Copilot. Înlocuiește ce e între [paranteze drepte] cu situația ta.

> Versiunea cu buton de copiere, actualizată zilnic: [aplicabilai.ro/prompturi/contabili/](https://aplicabilai.ro/prompturi/contabili/?utm_source=github&utm_medium=referral&utm_campaign=prompturi-contabili)

## Cuprins

- [Comunicare cu clienții](#comunicare-cu-clienții)
- [Organizare](#organizare)
- [Excel](#excel)
- [Oferte și onorarii](#oferte-și-onorarii)

## Comunicare cu clienții

### Email pentru documentele lipsă

```text
Ești asistentul unui birou de contabilitate. Scrie un email scurt și politicos către un client care nu a trimis documentele pentru luna trecută (facturi, extrase, bonuri). Ton prietenos, dar ferm. Maximum 6 rânduri, cu o listă scurtă a documentelor așteptate.
```

- **Când îl folosești:** În fiecare lună, pentru clienții care întârzie cu actele.
- **Ce verifici:** Termenul intern și lista exactă de documente, înainte de trimitere.
- **Ce nu pui în chat:** Numele clientului, CUI-ul, sume sau date din contabilitatea lui; le adaugi tu în email.

### Explicație pentru un antreprenor

```text
Explică pe înțelesul unui antreprenor fără pregătire economică ce înseamnă [noțiunea contabilă sau fiscală], în maximum 8 rânduri, cu un exemplu cu cifre inventate și rotunde.
```

- **Când îl folosești:** Când un client te întreabă același lucru pentru a cincea oară.
- **Ce verifici:** Regulile fiscale, în sursa oficială; AI-ul poate avea informații vechi.
- **Ce nu pui în chat:** Cifre reale ale clientului.

### Cum a ieșit luna: explicație pentru antreprenor, pe baza balanței

```text
Ești asistentul unui contabil. Scrie o explicație de maximum o pagină pentru un antreprenor fără pregătire economică, despre cum a ieșit luna, pornind de la aceste cifre rotunjite: venituri [suma rotunjită], cheltuieli [suma rotunjită], din care cele mai mari: [2–3 categorii, cu sume rotunjite], sold bancă și casă [suma rotunjită], ce are de încasat de la clienți [suma rotunjită], ce are de plătit furnizorilor [suma rotunjită]. Structura: 1) în două propoziții, rezultatul lunii; 2) de unde au venit banii și unde s-au dus; 3) diferența dintre profit și banii din cont, explicată simplu; 4) 2–3 lucruri la care să fie atent luna viitoare; 5) o întrebare pe care să mi-o pună dacă ceva nu e clar. Fără termeni ca „sold debitor” sau simboluri de conturi. Nu calcula impozite și nu adăuga cifre în afară de cele date.
```

- **Când îl folosești:** Când clientul te întreabă „cum stăm?” și vrei să-i trimiți un rezumat pe înțeles, nu balanța.
- **Ce verifici:** Fiecare cifră față de balanța din programul de contabilitate și că AI-ul n-a făcut adunări sau scăderi greșite; orice calcul îl refaci tu.
- **Ce nu pui în chat:** Balanța reală, exportată sau copiată, denumirea și CUI-ul firmei, nume de clienți sau furnizori; dai doar sume rotunjite pe categorii.

### Refuz politicos când clientul cere ceva ce nu poți face legal

```text
Sunt contabil și un client îmi cere [ce cere, descris general, ex. să trec pe firmă o cheltuială personală / să înregistrez un document cu o dată anterioară / să nu înregistrez o încasare]. Scrie un răspuns politicos și ferm, de maximum 8 rânduri: refuz clar, explic pe scurt, fără ton de lecție, că nu pot face asta și că răspunderea e și a lui, apoi propun ce putem face corect în locul ei: [alternativa ta, dacă există]. Închei cu disponibilitatea de a discuta. Fără să citezi articole de lege și fără să-l acuzi. Dă-mi și o variantă mai scurtă, pentru telefon sau WhatsApp.
```

- **Când îl folosești:** Când un client îți cere o „rezolvare” pe care nu o poți face și vrei să spui nu fără să-l pierzi.
- **Ce verifici:** Că alternativa propusă e corectă pentru situația lui (verifici în sursa oficială) și că mesajul nu sună a acuzație.
- **Ce nu pui în chat:** Numele clientului, firma, sumele sau documentele în cauză; descrii doar tipul cererii.

## Organizare

### Listă de închidere de lună

```text
Fă o listă de verificare pentru închiderea lunii la o firmă mică de servicii: pașii în ordine, ce document ai nevoie la fiecare și ce verifici. Format de tabel cu trei coloane.
```

- **Când îl folosești:** Ca să ai un șablon de lucru pe care îl adaptezi biroului.
- **Ce verifici:** Pașii, față de procedura ta și de legislația în vigoare.
- **Ce nu pui în chat:** Date ale clienților.

### Listă de documente pentru preluarea unui client nou

```text
Preiau contabilitatea unei firme de la alt contabil. Profilul firmei: [formă juridică], [plătitor sau neplătitor de TVA], [cu sau fără salariați], [domeniu]. Fă-mi o listă de verificare cu tot ce trebuie să primesc la predare-primire, grupată pe: acte ale firmei, evidență contabilă (balanțe, registre, jurnale), declarații depuse, salarizare, bancă și casă, acces și împuterniciri. Tabel cu trei coloane: document, de la cine îl cer (fostul contabil / client), observații. La final, 5 întrebări pe care să le pun clientului la prima discuție.
```

- **Când îl folosești:** La preluarea unui client de la alt cabinet, ca să nu descoperi lipsurile abia la prima declarație.
- **Ce verifici:** Lista față de procedura cabinetului tău și de cerințele în vigoare (verifici în sursa oficială ce registre și formulare se aplică firmei).
- **Ce nu pui în chat:** Denumirea și CUI-ul firmei, numele fostului contabil, parole SPV sau date de acces.

### Controale pe balanța de verificare înainte de declarații

```text
Fă-mi o listă de controale pe care le fac lunar pe balanța de verificare, înainte de a depune declarațiile, pentru o firmă [tipul firmei, ex. SRL de comerț, plătitor de TVA, cu salariați]. Pentru fiecare control: ce verific, ce conturi sau grupe de conturi privesc, ce înseamnă un sold anormal (ex. casă cu sold creditor, furnizori cu sold debitor) și ce fac dacă îl găsesc. Format: listă numerotată, maximum 15 puncte, fără explicații de bază. Nu inventa cote sau termene.
```

- **Când îl folosești:** Ca șablon de verificare lunară, pe care îl adaptezi la planul de conturi și la clienții cabinetului.
- **Ce verifici:** Fiecare control față de planul de conturi și reglementările în vigoare; AI-ul poate greși simbolurile conturilor.
- **Ce nu pui în chat:** Balanța reală a clientului, nici exportată, nici copiată; ceri doar lista de controale.

### Verificări la o factură de la un furnizor nou, înainte de plată

```text
Fă-mi o listă de verificare pentru o factură primită în RO e-Factura de la un furnizor cu care firma clientului nu a mai lucrat sau pentru care nu găsesc comandă. Situația: [tipul firmei clientului, ex. SRL de producție], [ce se facturează, descris general, ex. servicii de consultanță], [ce am deja: contract / comandă / proces-verbal / nimic]. Grupează verificările pe: furnizorul (date de identificare, starea lui, verificată în sursa oficială), legătura cu activitatea firmei, dovada că serviciul sau marfa au fost primite, factura în sine (descriere, cantități, prețuri), plata. Format: listă numerotată, maximum 15 puncte, plus la final un mesaj scurt, de maximum 5 rânduri, prin care îi cer clientului confirmarea și documentele lipsă. Nu inventa termene sau articole de lege.
```

- **Când îl folosești:** Când în SPV apare o factură neașteptată și vrei să o verifici înainte de înregistrare și înainte ca firma să o plătească.
- **Ce verifici:** Datele furnizorului în sursele oficiale (ANAF, ONRC) și pașii de refuz al facturii în documentația ANAF, dacă e cazul.
- **Ce nu pui în chat:** Factura sau XML-ul real, denumirea și CUI-ul furnizorului sau ale clientului, sumele reale; descrii doar tipul de factură.

### Reguli de lucru pentru un client nou: cum și când trimite documentele

```text
Ești asistentul unui cabinet de contabilitate. Scrie un mesaj de bun venit pentru un client nou, care să-i spună pe scurt regulile de lucru ale cabinetului: 1) ce documente trimite lunar (facturi emise și primite, extrase, bonuri, contracte noi, documente de personal, dacă are); 2) cum le trimite: [canalul cabinetului, ex. un folder comun, email dedicat, aplicație]; 3) până când, în fiecare lună: [termenul intern al cabinetului]; 4) ce se întâmplă dacă documentele vin târziu (în cuvinte simple, fără amenințări); 5) cum mă contactează și în cât timp răspund: [programul tău]; 6) ce trebuie să mă anunțe imediat (angajări, mașini, contracte mari, controale, scrisori de la ANAF). Ton prietenos și clar, liste scurte, maximum o pagină. La final, o variantă de 5 rânduri pentru WhatsApp.
```

- **Când îl folosești:** La începutul colaborării, ca clientul să știe din prima zi ce, cum și când îți trimite.
- **Ce verifici:** Lista de documente față de situația firmei (TVA, salariați) și termenele față de contractul și procedura cabinetului.
- **Ce nu pui în chat:** Numele clientului, CUI-ul, adrese de email sau linkuri reale, parole de acces; le adaugi tu în mesajul trimis.

## Excel

### Formulă explicată

```text
Am un tabel Excel cu coloanele [descrie coloanele, fără date reale]. Vreau o formulă care [ce vrei să calculezi]. Dă-mi formula și explică-mi pe rând ce face fiecare parte.
```

- **Când îl folosești:** Când nu-ți amintești o formulă sau vrei să automatizezi un calcul.
- **Ce verifici:** Rezultatul formulei pe câteva rânduri verificate manual.
- **Ce nu pui în chat:** Fișierul real cu datele clienților.

## Oferte și onorarii

### Ofertă de servicii de contabilitate pentru un client nou

```text
Ești asistentul unui cabinet de contabilitate. Scrie o ofertă de servicii pentru o firmă nouă cu acest profil: [formă juridică, ex. SRL], [plătitor sau neplătitor de TVA], [domeniu de activitate], aproximativ [număr] documente pe lună, [număr] angajați. Structura: 1) o propoziție de introducere; 2) serviciile incluse, pe puncte (evidența contabilă, declarațiile lunare și anuale, salarizare dacă e cazul, situațiile financiare anuale); 3) ce NU e inclus și se taxează separat; 4) ce documente aștept de la client și până când, lunar; 5) onorariul: lasă [onorariu lunar] ca paranteză, fără să propui tu o sumă; 6) pașii de început. Ton profesionist, fără promisiuni. Maximum o pagină.
```

- **Când îl folosești:** Când un antreprenor îți cere „cât costă contabilitatea” și vrei să trimiți o ofertă clară, pe puncte, în aceeași zi.
- **Ce verifici:** Lista de declarații față de situația firmei (TVA, salariați, regim de impozitare) și față de sursa oficială; onorariul și condițiile le pui tu, din grila cabinetului.
- **Ce nu pui în chat:** Denumirea și CUI-ul firmei, numele asociaților, cifra de afaceri reală; descrii doar profilul general.

### Răspuns la un client care cere reducere de onorariu

```text
Sunt contabil și un client vechi îmi cere să reduc onorariul lunar. Situația: [de câți ani lucrăm împreună], [ce s-a schimbat în volumul de muncă, ex. mai multe documente, angajați noi, e-Factura], [ce pot oferi: păstrez prețul / o mică reducere cu condiții / un pachet cu mai puține servicii]. Scrie un email politicos și ferm, de maximum 10 rânduri: mulțumesc pentru colaborare, explic pe scurt ce include onorariul acum, propun varianta mea și închei cu o întrebare clară. Fără scuze exagerate și fără să critic alte cabinete. Dă-mi apoi și o variantă mai scurtă, pentru WhatsApp.
```

- **Când îl folosești:** Când un client cere un preț mai mic și vrei să răspunzi calm, fără să pierzi clientul și fără să lucrezi în pierdere.
- **Ce verifici:** Că varianta propusă e cea pe care chiar o poți susține și că emailul nu promite servicii în plus față de contract.
- **Ce nu pui în chat:** Numele clientului, onorariul actual, sumele din contractul lui sau cifrele firmei; le completezi tu în emailul final.

### Mesaje în trepte către un client care întârzie plata onorariului

```text
Sunt contabil și un client nu a plătit onorariul la termen. Situația: [de câte luni / zile e restanța], [de câți ani lucrăm împreună], [ce prevede contractul la întârzieri și la suspendarea serviciilor, în cuvintele tale, fără să inventezi]. Scrie-mi trei mesaje, în trepte: 1) un reminder prietenos, de maximum 4 rânduri, ca și cum ar fi o scăpare; 2) o revenire fermă, de maximum 6 rânduri, cu data până la care aștept plata: [data]; 3) o ultimă notificare, de maximum 8 rânduri, care spune calm ce urmează conform contractului. Ton profesionist, fără amenințări și fără reproșuri personale. Pentru fiecare treaptă dă-mi și o variantă scurtă pentru WhatsApp.
```

- **Când îl folosești:** Când onorariul întârzie și vrei să-l ceri fără să strici relația, cu un plan clar dacă primul mesaj nu ajunge.
- **Ce verifici:** Că ce scrie în a treia treaptă corespunde exact clauzelor din contractul tău; termenele și consecințele le pui tu, nu AI-ul.
- **Ce nu pui în chat:** Numele clientului, suma restantă, numărul facturii sau contractului; le completezi tu în mesajul final.

---

[← Toate meseriile](../README.md) · Licență [CC BY 4.0](../LICENSE) · Sursa: [aplicabilai.ro](https://aplicabilai.ro/?utm_source=github&utm_medium=referral&utm_campaign=prompturi-contabili), cursuri gratuite de AI pe meserii
