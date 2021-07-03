//select class ticket function
function selectTicketChange(ticket,isIncrease){
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if(isIncrease == true && ticketCount < 10){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket+'-count').value = ticketNewCount;
    let ticketTotal = 0;
    if(ticket == 'firstclass'){
        ticketTotal = ticketNewCount*150;
    }
    if(ticket == 'economyclass'){
        ticketTotal = ticketNewCount*100;
    }
    document.getElementById(ticket+'-total').innerText = ticketTotal;
    calculateTotal();
}


//total price calculation function
function calculateTotal(){
    const firstCount = getInputValue('firstclass');
    const economy = getInputValue('economyclass');

    const totalPrice = firstCount*150 + economy*100;
    document.getElementById('total-price').innerText = totalPrice;

    const tax = Math.round(totalPrice*0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice+tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

//get input ticket price function
function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket+'-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}