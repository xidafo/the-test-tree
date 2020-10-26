addLayer("w", {
        name: "wood", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "ω", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: true,
			points: new Decimal(0),
        }},
        color: "#7c3c21",
        requires: new Decimal(10), // Can be a function that takes requirement increases into account
        resource: "wood", // Name of prestige currency
        baseResource: "blocks", // Name of resource prestige is based on
        baseAmount() {return player.points}, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 0.5, // Prestige currency exponent
        gainMult() { // Calculate the multiplier for main currency from bonuses
            mult = new Decimal(1)
            if (player.p.upgrades.includes(11)) mult = mult.times(2)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 0, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "w", description: "Reset for wood", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown(){return true},
        
        upgrades: {
            rows: 2,
            cols: 4,
            11: {
                tital: 'stronger fists'
                description: "boost blocks gain by 1.75",
                cost: new decimal(1),
                unlocked() => true,
                
            }
            12: {
                tital: 'work out'
                description: ''
            }
        }
})