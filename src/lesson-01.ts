export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.
    
    /** @type {Array} points - számok tömbje, 1-től 10-ig egyesével. */
    points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /** 
     * A tömb minden eleme legyen egy objektum, amely egy felhasználót reprezentál.
     * Kötelező elemek: name<string>, email<string>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} users - minden elem egy felhasználó.
     */
    users: Array<{name: string, email: string}> = [
        {
            name: "Egy Valaki",
            email: "egyvalaki@gmail.com"
        },
        {
            name: "Ketto Valaki",
            email: "kettovalaki@gmail.com"
        }
    ];
    
    /** 
     * A tömb minden eleme legyen egy objektum, amely egy terméket reprezentál.
     * Kötelező elemek: name<string>, price<number>, stock<number>.
     * Opcionális elemek: active<boolean>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} products - minden elem egy termék.
     */    
     products: Array<{name: string, price: number, stock: number, active?: boolean}> = [
        {
            name: "Egy valami",
            price: 555,
            stock: 100,
            active: true
        },
        {
            name: "Egy valami",
            price: 555,
            stock: 100
        }
    ]
    
    /** 
     * Inicializálj egy tuple típust, azaz adj neki értéket is.
     * @type {Tuple} role - number, string, boolean. 
     */
    role : [number, string, boolean] = [77, "albandi", true];

}
