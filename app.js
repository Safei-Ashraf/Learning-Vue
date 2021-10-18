const app = Vue.createApp({
    //data, functions

    data() {
        return {
            display: true,
            url:'http://www.google.com',
        champions: [
            {
                name: 'Rakan',
                role: 'support',
                release: '2014',
                img: './imgs/rakan.jpg',
                url: 'https://leagueoflegends.fandom.com/wiki/Rakan/LoL',
                isFav: true,
                display: false,

        },

        {
            name: 'Vex',
            role: 'Mage',
            release: '2021',
            img: './imgs/vex.jpg',
            url: 'https://leagueoflegends.fandom.com/wiki/Vex/LoL',
            isFav: false,
            display: true,



            },
            {
                name: 'Xayah',
                role: 'ADC',
                release: '2014',
                img: './imgs/xayah.jpg',
                url: 'https://leagueoflegends.fandom.com/wiki/Xayah/LoL',
                isFav: true,
                display: true,
            },
        {
            name: 'Zoe',
            role: 'Mage',
            release: '2018',
            img: './imgs/zoe.jpg',
            url: 'https://leagueoflegends.fandom.com/wiki/zoe/LoL',
            isFav: false,
            display: true,
        },
        
        ]
    }
},
methods:{
    toggleFav(e, champion) {
        champion.isFav = !champion.isFav;
    },
    hideDisplay(champion) {
        champion.display = false;
    },
    show(champion) {
        champion.display = true;
    },

    },
    computed: {
        filteredChampions() {
            return this.champions.filter(champ => champ.isFav === true);
            
    }
}
});

app.mount('#app')