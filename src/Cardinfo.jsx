
const titles=[
    'Price','TVL','Popular pairs'
];
const dailychangenums=[
+10,-12.32,-11.93,+0.26,-8.1
];
const greenored=[];
for(let i in dailychangenums){
if(dailychangenums[i]>0){
    greenored[i]='plusgreen';
    dailychangenums[i]='+'+dailychangenums[i];
}

else greenored[i]='minusred';
}
const info_obj =[
    {
        id: 1,
        name: 'Bitcoin (BTC)',
        dailychange: `${dailychangenums[0]}%`,
        plusorminus: greenored[0],
        price: '$31,812.80',
        pricetitle: titles[0],
        TVL: '$60,000',
        TVLtitle: titles[1],
        img1: "./Solana.png",
        img2: "./Ethereum.png",
        img3: "./BinanceCoin.png",
        populartitle: titles[2],
        coinclass: 'bitcoin',
        coinclasslogo: 'bitcoinlogo'

    },
    {
        id: 2,
        name: 'Solana (SOL)',
        dailychange: `${dailychangenums[1]}%`,
        plusorminus: greenored[1],
        price: '$32.83',
        pricetitle: titles[0],
        TVL: '$60,000',
        TVLtitle: titles[1],
        img1: "./BitcoinSV.png",
        img2: "./Ethereum.png",
        img3: "./BinanceCoin.png",
        populartitle: titles[2],
        coinclass: 'solana',
        coinclasslogo: 'solanalogo'
       
    },
    {
        id: 3,
        name: 'Ethereum (ETH)',
        dailychange: `${dailychangenums[2]}%`,
        plusorminus: greenored[2],
        price: '$1,466.45',
        pricetitle: titles[0],
        TVL: '$60,000',
        TVLtitle: titles[1],
        img1: "./Solana.png",
        img2: "./BitcoinSV.png",
        img3: "./BinanceCoin.png",
        populartitle: titles[2],
        coinclass: 'ethereum',
        coinclasslogo: 'ethereumlogo'
       
    },
    {
        id: 4,
        name: 'Binance USD (BUSD)',
        dailychange: `${dailychangenums[3]}%`,
        plusorminus: greenored[3],
        price: '$1.00',
        pricetitle: titles[0],
        TVL: '$60,000',
        TVLtitle: titles[1],
        img1: "./Solana.png",
        img2: "./Ethereum.png",
        img3: "./BinanceCoin.png",
        populartitle: titles[2],
        coinclass: 'binance',
        coinclasslogo: 'binancelogo'
       
    },
    {
        id: 4,
        name: 'Shiba Inu (SHIB)',
        dailychange: `${dailychangenums[4]}%`,
        plusorminus: greenored[4],
        price: '$0.00000001948',
        pricetitle: titles[0],
        TVL: '$60,000',
        TVLtitle: titles[1],
        img1: "./Solana.png",
        img2: "./Ethereum.png",
        img3: "./BinanceCoin.png",
        populartitle: titles[2],
        coinclass: 'shiba',
        coinclasslogo: 'shibalogo'
       
    }
];
export default info_obj;