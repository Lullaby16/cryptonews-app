import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { COLORS, FONTS } from '../constants'
import { NewsList } from '../components';
import axios from "axios";

const data = [
    {
        "title":"First Mover Asia: The Renminbi Rises; Cryptos Suffer Another Lost Weekend",
        "url":"https://www.coindesk.com/markets/2022/02/20/first-mover-asia-the-renminbi-rises-cryptos-suffer-another-lost-weekend/",
        "source":"coindesk.com"
    },
    {
        "title":"OpenSea Investigating ‘Exploit Rumors’ as Users Complain of Missing NFTs",
        "url":"https://www.coindesk.com/business/2022/02/20/opensea-investigating-exploit-rumors-as-users-complain-of-missing-nfts/",
        "source":"coindesk.com"
    },
    {
        "title":"Staking Claims: Abra’s CEO Talks Passive Income",
        "url":"https://www.coindesk.com/sponsored-content/staking-claims-abras-ceo-talks-passive-income/",
        "source":"coindesk.com"
    },
    {
        "title":"Vitalik Buterin Calls Canada's Use of Banks to Stifle Protestors 'Dangerous' ",
        "url":"https://www.coindesk.com/policy/2022/02/19/vitalik-buterin-calls-canadas-use-of-banks-to-stifle-protestors-dangerous/",
        "source":"coindesk.com"
    },
    {
        "title":"State Lawmakers in Illinois, Georgia Propose Tax Incentives for Bitcoin Miners",
        "url":"https://www.coindesk.com/policy/2022/02/18/state-lawmakers-in-illinois-georgia-propose-tax-incentives-for-bitcoin-miners/",
        "source":"coindesk.com"
    }
]

const News = () => {

    const [news, setNews] = useState(null)
    const [loading, setLoading] = useState(false)

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => <NewsList cryptoNews={item}/>}
            />
        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4
    }
})