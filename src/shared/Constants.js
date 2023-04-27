export const Constants = Object.freeze({
    tableHeaderItems:[
        {itemName:'Date'},
        {itemName:'Min Temp'},
        {itemName:'Max Temp'},
        {itemName:'Weather Condition'}
    ],
    noRecordFoundMsg: "This city does not exist! Please use correct city name!",
    limit:10,
    offset:0,
    APP_ID:"fc46d1863dcf188d1f2616bc73c7f7c8",
    weatherApi:"http://api.openweathermap.org/data/2.5/forecast",
    weatherUnit:'metric',
    weatherIcons:{
        Clouds:'bi-cloud-fill',
        Clear:'bi-brightness-high-fill',
        Rain:'bi-cloud-drizzle-fill'
    }
})
