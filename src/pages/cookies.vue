<template>
  <div class="container text-center py-3">
    <h2>Izjava o kolačićima</h2>
    <div class="mt-3">
      <p class="text-justify">
        Ova web stranica koristi Google Analytics, uslugu web analize koju pruža
        Google Inc. ("Google"). Google Analytics upotrebljava takozvane
        "kolačiće", tekstualne datoteke koje su pohranjene na vašem računalu i
        koje omogućuju analizu korištenja web stranice.<br />
        Informacije koje ovi kolačići generiraju o načinu korištenja web
        stranica, među kojima je i IP adresa s koje pristupate stranicama,
        prenose se na server tvrtke Google u Sjedinjenim Američkim Državama i
        tamo se pohranjuju. Te informacije se koriste u svrhu analize načina
        korištenja web stranica i izrade izvješća namijenjenih administratorima
        stranica o aktivnostima na istim, bez povezivanja IP adrese s drugim
        podacima koje Google posjeduje. Napominjemo kako Google može prenijeti
        te podatke trećim stranama, temeljem zakonske obveze ili ako treće
        strane obrađuju podatke u ime Googlea.<br />
        Više o Google Analytics se može pronaći na
        <a
          target="_blank"
          href="https://support.google.com/analytics/answer/6004245"
          rel="nofollow"
          >ovom linku</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s | Uvjeti korištenja kolačića",
    meta: [
      {
        name: "description",
        content:
          "Kolačiće koristimo za pravilan rad naše stranice i analizu prometa.",
      },
    ],
  },
};
</script>
