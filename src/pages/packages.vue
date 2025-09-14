<template>
    <div class="container py-5" style="pading-top:300px">
        <div class="text-center">
            <h2 class="pt-5">Paketi</h2>
            <hr class="w-50 mx-auto mb-4">
        </div>
        <div class="table-responsive">
            <table class="table table-bordered">
                <tr class="bg-main">
                    <th class="align-bottom text-center" style="width:40%">
                        <h3 class="text-light">Karakteristike</h3>
                    </th>
                    <th class="text-center" style="width:20%">
                        <h3 class="font-weight-bold text-light">START</h3>
                        <hr class="bg-light" />
                        <span class="text-nowrap text-light">od <label class="lead font-weight-bold">{{
                            convertAndFormat(prices.start.min_mo_price) }}</label> mesečno</span>
                    </th>
                    <th class="text-center" style="width:20%">
                        <h3 class="font-weight-bold text-light">STANDARD</h3>
                        <hr class="bg-light" />
                        <span class="text-nowrap text-light">od <label class="lead font-weight-bold">{{
                            convertAndFormat(prices.standard.min_mo_price) }}</label> mesečno</span>
                    </th>
                    <th class="text-center" style="width:20%">
                        <h3 class="font-weight-bold text-light">PREMIUM</h3>
                        <hr class="bg-light" />
                        <span class="text-nowrap text-light">od <label class="lead font-weight-bold">{{
                            convertAndFormat(prices.premium.min_mo_price) }}</label> mesečno</span>
                    </th>
                </tr>
                <tr>
                    <td>
                        Dodatne licence
                        <p class="small">
                            <em>
                                * Odnosi se na dodatne korisnike aplikacije koji unutar jednog tima (zajedničke radne
                                organizacije ili ustanove) imaju pristup zajedničkoj bazi podataka.<br />
                                Pravo na dodatne licence imaju samo pravna lica, korisnici <strong>STANDARD</strong> ili
                                <strong>PREMIUM</strong> paketa.<br />
                                Cena dodatne licence iznosi {{ convertAndFormat(prices.additionalUsers.regularPrice) }}
                                / god.
                                (obrazovne ustanove: {{ convertAndFormat(prices.additionalUsers.studentPrice) }} /
                                god.).
                            </em>
                        </p>
                    </td>
                    <td class="text-center font-weight-bold">0</td>
                    <td class="text-center font-weight-bold">maksimalno 1</td>
                    <td class="text-center">
                        <div class="font-weight-bold">neograničeno</div>
                        <div>
                            <em class="small">
                                * dodatna licenca:
                                <br />
                                {{ convertAndFormat(prices.additionalUsers.regularPrice) }} / god.
                                <br />
                                (škole: {{ convertAndFormat(prices.additionalUsers.studentPrice) }} / god.)
                            </em>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Broj novih klijenata (mesečno)
                        <p class="small"><em>* Maksimalan broj novih klijenata (pacijenta) koje možete sačuvati u bazu u
                                tekućem mesecu.</em></p>
                    </td>
                    <td class="text-center font-weight-bold">5</td>
                    <td class="text-center font-weight-bold">20</td>
                    <td class="text-center font-weight-bold">neograničeno</td>
                </tr>
                <tr>
                    <td>Broj namirnica</td>
                    <td class="text-center font-weight-bold">664</td>
                    <td class="text-center font-weight-bold">740</td>
                    <td class="text-center font-weight-bold">970</td>
                </tr>
                <tr>
                    <td>
                        Pristup USDA bazi namirnica
                        <p class="small">
                            <em>
                                * Nacionalna baza podataka nutritivnih sastojaka namirnica američkog ministarstva
                                poljoprivrede.
                            </em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" /><br />
                        <em class="small">* više od 230 000 namirnica</em>
                    </td>
                </tr>
                <tr>
                    <td>
                        Broj obroka
                        <p class="small">
                            <em>
                                * Maksimalan broj obroka u jelovniku. Korisnici START i STANDARD paketa imaju do 6
                                predefinisanih obroka (doručak, užina, ručak, popodnevna užina, večera i obrok pred
                                spavanje),
                                dok korisnici PREMIUM paketa mogu koristiti do 9 obroka sa sopstvenim nazivima i
                                preporukama.
                            </em>
                        </p>
                    </td>
                    <td class="text-center">6</td>
                    <td class="text-center">6</td>
                    <td class="text-center">9</td>
                </tr>
                <tr>
                    <td>
                        Normativi
                        <div class="small">
                            <em>
                                * Nacionalne smernice za ishranu:
                            </em>
                        </div>
                        <ul class="small">
                            <li><em>Normativi za ishranu učenika u osnovnoj školi, nacionalne smernice za ishranu učenika i
                                    program zdravstvene zaštite, higijene i pravilne ishrane dece u vrtićima (RH).</em></li>
                            <li><em>Smernice za ishranu starijih osoba (RH).</em></li>
                            <li><em>Smernice za zdravu ishranu dece predškolskog i školskog uzrasta (Federacija BiH).</em>
                            </li>
                        </ul>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Moji normativi
                        <div class="small">
                            <em>
                                * Izrada jelovnika / normativa bez unosa antropometrijskih parametara klijenta.
                            </em>
                        </div>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Broj makro i mikronutrijenata</td>
                    <td class="text-center">39</td>
                    <td class="text-center">39</td>
                    <td class="text-center">39</td>
                </tr>
                <tr>
                    <td>Prikaz mikronutrijenata po obrocima</td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Broj fizičkih aktivnosti</td>
                    <td class="text-center">470</td>
                    <td class="text-center">470</td>
                    <td class="text-center">727</td>
                </tr>
                <tr>
                    <td>Broj dijeta</td>
                    <td class="text-center">27</td>
                    <td class="text-center">27</td>
                    <td class="text-center">27</td>
                </tr>
                <tr>
                    <td>
                        Moja dijeta
                        <p class="small">
                            <em>
                                * Korisnici PREMIUM paketa mogu kreirati dodatne dijete sa sopstvenim preporukama.
                            </em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Metode proračuna BMR (bazalnog metabolizma)</td>
                    <td>
                        <ul>
                            <li>Miflin - St Jeor</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Miflin - St Jeor</li>
                            <li>Haris - Benedikt (Roza i Šizgal)</li>
                            <li>Haris - Benedikt</li>
                            <li>Oven</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Miflin - St Jeor</li>
                            <li>Haris - Benedikt (Roza i Šizgal)</li>
                            <li>Haris - Benedikt</li>
                            <li>Oven</li>
                            <li>Kač-MakArdl</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Antropometrijski parametri</td>
                    <td>
                        <ul>
                            <li>Visina</li>
                            <li>Starost</li>
                            <li>Obim struka</li>
                            <li>Obim kukova</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Visina</li>
                            <li>Starost</li>
                            <li>Obim struka</li>
                            <li>Obim kukova</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Visina</li>
                            <li>Starost</li>
                            <li>Obim struka</li>
                            <li>Obim kukova</li>
                            <li>Masno tkivo</li>
                            <li>Visceralna mast</li>
                            <li>Mišićna masa</li>
                            <li>Koštana masa</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        Kalkulator masnog tkiva
                        <p class="small">
                            <em>
                                * Proračunavanje masnog tkiva pomoću merenja kaliperom
                            </em>
                        </p>
                        <ul class="small">
                            <li>Džekson/Polok 3</li>
                            <li>Džekson/Polok 4</li>
                            <li>Džekson/Polok 7</li>
                            <li>Dernin/Vomersli</li>
                        </ul>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Alergeni
                        <p class="small">
                            <em>
                                * Obeležavanje alergena koji kod klijenta mogu izazvati alergijsku reakciju.
                                Definisanje alergena u „Mojim namirnicama” i prikaz alergena u jelovniku.
                            </em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Omiljene / neomiljene namirnice
                        <p class="small">
                            <em>
                                * Obeležavanje namirnica koje klijent voli ili mu nisu omiljene, čime se olakšava kreiranje
                                personalizovanih jelovnika.
                            </em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Proračunavanje indeksa telesne mase (BMI) i energetske potrošnje</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Detaljan proračun energetske potrošnje</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Krive rasta za uzrast od 2 do 20 godina
                        <p class="small">
                            <em>
                                * Percentilne krive za BMI, telesnu masu i visinu prema CDC krivama koje je razvio američki
                                Nacionalni centar za zdravstvenu statistiku (NCHS) iz 2000. godine.
                            </em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Nutricionistički izveštaj</td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Odabir dodatne fizičke aktivnosti</td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Izrada jelovnika</td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Izrada jelovnika/normativa za grupe korisnika</td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Izrada jelovnika za grupe klijenata
                        <p class="small">
                            <em>* Izrada jelovnika za više klijenata sa različitim energetskim potrebama, npr.
                                porodica.</em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Izrada recepata</td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Razmena recepata
                        <p class="small mb-1">
                            <em>* Pristup receptima drugih korisnika aplikacije koji su ih podelili sa ostalima.</em>
                        </p>
                        <hr class="m-1 right-transparency" />
                        <div class="text-nowrap">
                            Broj podeljenih recepata: <strong>{{ sharingRecipesCount }}</strong>
                        </div>
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Ideje za recepte <sup>(AI)</sup>
                        <p class="small">
                            <em>* Ova funkcija omogućava personalizovane predloge recepata koje generiše veštačka
                                inteligencija, prilagođene vašim željama i potrebama.</em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Generisanje slike recepta <sup>(AI)</sup>
                        <p class="small">
                            <em>* Ova funkcija omogućava generisanje slike recepta na osnovu opisa i sastojaka uz pomoć
                                veštačke inteligencije.</em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Generisanje slike recepta za objavu <sup>(AI)</sup>
                        <p class="small">
                            <em>* Generisanje slike recepta spremne za deljenje na društvenim mrežama.
                                Automatsko formatiranje sastojaka recepta (količina, mera i naziva) pomoću veštačke inteligencije.</em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Prevodi jelovnika i recepata <sup>(AI)</sup>
                        <p class="small">
                            <em>
                                * Prevod uz pomoć veštačke inteligencije. Moguće su manje netačnosti.<br />
                                Dostupni jezici: srpski, hrvatski, bosanski, engleski, češki, danski, holandski, finski,
                                francuski, nemački, grčki, mađarski, italijanski, makedonski, crnogorski, norveški, poljski,
                                portugalski, rumunski, slovački, slovenački, španski, švedski.
                            </em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Automatsko čuvanje jelovnika i recepata
                        <p class="small">
                            <em>* Ova funkcija omogućava automatsko čuvanje jelovnika ili recepta tokom rada, što je korisno
                                u slučaju iznenadnog gašenja računara ili prekida internetske veze.</em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale="1" class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale="1" class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Štampanje dnevnih i nedeljnih jelovnika u PDF formatu</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Tipovi štampe dnevnih jelovnika</td>
                    <td class="text-center">2</td>
                    <td class="text-center">2</td>
                    <td class="text-center">5</td>
                </tr>
                <tr>
                    <td>Čuvanje podešavanja štampe</td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Prikaz slike recepta u štampi jelovnika</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Štampa analize dnevnih i nedeljnih jelovnika u PDF formatu</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Štampa podataka o klijentu u PDF formatu</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Štampa recepata u PDF formatu</td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Primeri jelovnika</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Unos sopstvenih namirnica</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Izrada liste za kupovinu</td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Izrada cenovnika</td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Kalendar termina</td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Aplikacija za klijente
                        <p class="small"><em>* Veb aplikacija putem koje klijenti sami prate i evidentiraju promene svoje
                                telesne mase, vode dnevnik ishrane i preuzimaju jelovnike.</em></p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Automatski nutricionistički izveštaj <sup>(AI)</sup>
                        <p class="small"><em>* Automatsko generisanje nutricionističkog izveštaja na osnovu podataka iz
                                dnevnika ishrane koji vodi klijent, uz pomoć veštačke inteligencije.</em></p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Sopstveni logo u štampi
                        <p class="small"><em>* Štampa jelovnika i ostalih dokumenata u PDF-u sa logoom sopstvene firme u
                                zaglavlju.</em></p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Logo klijenta
                        <p class="small"><em>* Kod izrade planova ishrane za druge firme, moguće je u zaglavlju štampe uz
                                svoj logo dodati i logo te firme.</em></p>
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Baza klijenata</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Praćenje antropometrijskih parametara</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Izvoz analize dnevnih i nedeljnih jelovnika u CSV formatu</td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Izvoz liste za kupovinu u CSV formatu</td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="minus" scale=1 class="text-danger" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>Tehnička podrška</td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr>
                    <td>
                        AI asistent <sup>(AI)</sup>
                        <p class="small">
                            <em>* AI asistent koristi veštačku inteligenciju za odgovaranje na pitanja vezana za rad
                                aplikacije. Iako se trudimo da pružimo tačne i korisne informacije, odgovori mogu biti
                                ograničeni ili netačni. Ne delite osetljive lične podatke putem četa. Za specifična ili
                                bezbednosno važna pitanja obratite se tehničkoj podršci.</em>
                        </p>
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                    <td class="text-center">
                        <icon name="check" scale=1 class="text-main" />
                    </td>
                </tr>
                <tr class="bg-main text-light">
                    <td class="align-middle text-center">
                        <h3 class="text-light">Cene</h3>
                    </td>
                    <td class="text-center">
                        <h3 class="font-weight-bold text-light">START</h3>
                        <div class="text-nowrap">
                            od <span class="lead font-weight-bold">{{ convertAndFormat(prices.start.min_mo_price) }}</span>
                            mesečno
                        </div>
                        <hr class="bg-light" />
                        <div class="text-left">
                            <div class="text-nowrap">
                                1 mesec - <span class="font-weight-bold">{{ convertAndFormat(prices.start.mo_1) }}</span>
                            </div>
                            <div class="text-nowrap">
                                2 meseca - <span class="font-weight-bold">{{ convertAndFormat(prices.start.mo_3) }}</span>
                                (-10%)
                            </div>
                            <div class="text-nowrap">
                                3 meseca - <span class="font-weight-bold">{{ convertAndFormat(prices.start.mo_6) }}</span>
                                (-20%)
                            </div>
                            <div class="text-nowrap">
                                1 godina - <span class="font-weight-bold">{{ convertAndFormat(prices.start.yr_1) }}</span>
                                (-30%)
                            </div>
                            <div class="text-nowrap">
                                2 godine - <span class="font-weight-bold">{{ convertAndFormat(prices.start.yr_2) }}</span>
                                (-40%)
                            </div>
                            <div class="text-nowrap">
                                3 godine - <span class="font-weight-bold">{{ convertAndFormat(prices.start.yr_3) }}</span>
                                (-50%)
                            </div>
                        </div>
                        <hr class="bg-light" />
                        <a href="https://www.programprehrane.com/narudzba?lang=sr" class="btn btn-light my-2"
                            title="Porudžbina">
                            <icon name="cart-arrow-down" /> Poruči
                        </a>
                    </td>
                    <td class="text-center">
                        <h3 class="font-weight-bold text-light">STANDARD</h3>
                        <div class="text-nowrap">
                            od <span class="lead font-weight-bold">{{ convertAndFormat(prices.standard.min_mo_price)
                            }}</span> mesečno
                        </div>
                        <hr class="bg-light" />
                        <div class="text-left">
                            <div class="text-nowrap">
                                1 mesec - <span class="font-weight-bold">{{ convertAndFormat(prices.standard.mo_1) }}</span>
                            </div>
                            <div class="text-nowrap">
                                2 meseca - <span class="font-weight-bold">{{ convertAndFormat(prices.standard.mo_3)
                                }}</span> (-10%)
                            </div>
                            <div class="text-nowrap">
                                3 meseca - <span class="font-weight-bold">{{ convertAndFormat(prices.standard.mo_6)
                                }}</span> (-20%)
                            </div>
                            <div class="text-nowrap">
                                1 godina - <span class="font-weight-bold">{{ convertAndFormat(prices.standard.yr_1)
                                }}</span> (-30%)
                            </div>
                            <div class="text-nowrap">
                                2 godine - <span class="font-weight-bold">{{ convertAndFormat(prices.standard.yr_2)
                                }}</span> (-40%)
                            </div>
                            <div class="text-nowrap">
                                3 godine - <span class="font-weight-bold">{{ convertAndFormat(prices.standard.yr_3)
                                }}</span> (-50%)
                            </div>
                        </div>
                        <hr class="bg-light" />
                        <a href="https://www.programprehrane.com/narudzba?lang=sr" class="btn btn-light my-2"
                            title="Porudžbina">
                            <icon name="cart-arrow-down" /> Poruči
                        </a>
                    </td>
                    <td class="text-center">
                        <h3 class="font-weight-bold text-light">PREMIUM</h3>
                        <div class="text-nowrap">
                            od <span class="lead font-weight-bold">{{ convertAndFormat(prices.premium.min_mo_price)
                            }}</span> mesečno
                        </div>
                        <hr class="bg-light" />
                        <div class="text-left">
                            <div class="text-nowrap">
                                1 mesec - <span class="font-weight-bold">{{ convertAndFormat(prices.premium.mo_1) }}</span>
                            </div>
                            <div class="text-nowrap">
                                2 meseca - <span class="font-weight-bold">{{ convertAndFormat(prices.premium.mo_3) }}</span>
                                (-10%)
                            </div>
                            <div class="text-nowrap">
                                3 meseca - <span class="font-weight-bold">{{ convertAndFormat(prices.premium.mo_6) }}</span>
                                (-20%)
                            </div>
                            <div class="text-nowrap">
                                1 godina - <span class="font-weight-bold">{{ convertAndFormat(prices.premium.yr_1) }}</span>
                                (-30%)
                            </div>
                            <div class="text-nowrap">
                                2 godine - <span class="font-weight-bold">{{ convertAndFormat(prices.premium.yr_2) }}</span>
                                (-40%)
                            </div>
                            <div class="text-nowrap">
                                3 godine - <span class="font-weight-bold">{{ convertAndFormat(prices.premium.yr_3) }}</span>
                                (-50%)
                            </div>
                        </div>
                        <hr class="bg-light" />
                        <a href="https://www.programprehrane.com/narudzba?lang=sr" class="btn btn-light my-2"
                            title="Porudžbina">
                            <icon name="cart-arrow-down" /> Poruči
                        </a>
                    </td>
                </tr>
            </table>
        </div>

        <p style="font-size: 0.9em; color: #666; margin-top: 10px;">
            <strong>Napomena:</strong> Sve iskazane cene su informativne i izražene u srpskim dinarima. Konačna cena može
            neznatno varirati u zavisnosti od srednjeg kursa evra na dan porudžbine.
        </p>

        <div class="alert alert-info my-3" role="alert">
            Svi podaci uneti u aplikaciju (klijenti, recepti, jelovnici, namirnice i ostalo)
            čuvaju se najmanje 1 godinu nakon isteka višegodišnje pretplate, odnosno najmanje 1 mesec nakon isteka
            mesečne, tromesečne i polugodišnje pretplate. Nakon isteka pretplate, korisnički nalog se deaktivira – većina
            funkcionalnosti u programu biće onemogućena – ali nalog i svi podaci neće biti obrisani dok traje navedeni
            period.
        </div>

        <!-- <div class="pt-3">
        <h3>Dodatne usluge:</h3>
        <div class="row">
            <div class="col-lg-9">
                <div class="table-responsive">
                    <table class="table">
                        <tr ng-if="x.isVisible" ng-repeat="x in settings.prices.additionalService">
                            <td style="width:80%">
                                <div class="font-weight-bold">{{x.title}}</div>
                                <em class="small">{{x.desc}}</em>
                            </td>
                            <td class="text-nowrap">
                                <div ng-if="settings.discount.additionalServiceDiscount===0" class="font-weight-bold">
                                    {{x.price | formatCurrency}} {{settings.prices.currency}}<span ng-if="x.unit">/{{x.unit}}</span>
                                </div>
                                <div ng-if="settings.discount.additionalServiceDiscount>0">
                                    <s>{{x.price | formatCurrency}} {{settings.prices.currency}}<span ng-if="x.unit">/{{x.unit}}</span></s>
                                    <div class="font-weight-bold">{{x.price - (x.price * (settings.discount.additionalServiceDiscount/100)) | formatCurrency}} {{settings.prices.currency}}<span ng-if="x.unit">/{{x.unit}}</span></div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div> -->
    </div>
</template>
  
<script>
import { prices } from "../config/prices";
export default {
    metaInfo: {
        titleTemplate: "%s | Paketi",
        meta: [
            {
                name: "description",
                content:
                    "Paketi",
            },
        ],
    },
    data() {
        return {
            prices,
            sharingRecipesCount: '+900'
        };
    },
    methods: {
        convertAndFormat(value) {
            const rsd = value * prices.conversionRate;
            return new Intl.NumberFormat('sr-RS', {
                style: 'currency',
                currency: prices.currency,
                minimumFractionDigits: 2
            }).format(rsd);
        }
    }
};
</script>