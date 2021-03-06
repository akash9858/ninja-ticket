
// First Class Ticket
function firstClassTicket(isIncrease) {
    const ticketInput = document.getElementById('ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    totalAmount = 150 * ticketCount;
    calculateAmount();
}


// Economy Class Ticket 
function economyClassTicket(isIncrement) {
    const economyTicketInput = document.getElementById('economyTicket-quantity');
    const economyTicketCount = parseInt(economyTicketInput.value);
    let economyTicketNewCount = economyTicketCount;
    if (isIncrement == true) {
        economyTicketNewCount = economyTicketCount + 1;
    }
    if (isIncrement == false && economyTicketCount > 0) {
        economyTicketNewCount = economyTicketCount - 1;
    }
    economyTicketInput.value = economyTicketNewCount;
    calculateAmount();
}


// Calculate Total Amount 
var totalAmount = 0;
var vatAmount = 0;
var grandTotal = 0;

function calculateAmount(){
    const ticketInput = document.getElementById('ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    const economyTicketInput = document.getElementById('economyTicket-quantity');
    const economyTicketCount = parseInt(economyTicketInput.value);
    totalAmount = (150 * ticketCount) + (100 * economyTicketCount);
    vatAmount = (totalAmount / 100) * 10;
    grandTotal = totalAmount + vatAmount;
    calculateShowing()
}


// Showing Data 
function calculateShowing() {
    const subTotalElement = document.getElementById('subTotal');
    subTotalElement.innerHTML = "";
    subTotalElement.append("$" + totalAmount);
    const vatAmountElement = document.getElementById('vatAmount');
    vatAmountElement.innerHTML = "";
    vatAmountElement.append("$" + vatAmount);
    const grandTotalElement = document.getElementById('grandTotal');
    grandTotalElement.innerHTML = "";
    grandTotalElement.append("$" + grandTotal);
}


// alert function 
document.getElementById("confirmBtn").addEventListener("click",function(){
   if (grandTotal>0) {
     alert("CONGRATULATIONS! Your ticket is confirmed.");
    } 
    else {
        alert("Please Buy a ticket first.");
    }
})

