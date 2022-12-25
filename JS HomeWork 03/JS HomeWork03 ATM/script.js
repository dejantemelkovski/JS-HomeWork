let bankAcount = 50000;
let withDraw = prompt ("Enter how mutch money you will pick from your bank acount");
let balance = bankAcount - withDraw;
function calculateBalance (bankAcount, withDraw) {
    let balance = bankAcount - withDraw;

    if (withDraw == bankAcount) {
        console.log (`Your bank acount is zero please make a new deposit: ${balance}`)
    }
    
    else if (withDraw > bankAcount) {
        console.log (`Not enough money ${balance}`)
    }

    else if (withDraw < bankAcount) {
        console.log (`On your Bank Acount you have: ${balance}`)
    }   
}
calculateBalance(50000, withDraw)

