class ticketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
    addAvailableTickets(nametick, price) {
        this.availableTickets.push(new ticketType(nametick, price));
    }
    allTickets() {
        let ticketlist = "All Tickets: "
        this.availableTickets.forEach((ticket, index) => {
        ticketlist += `${index + 1}. ${ticket.name} ($${ticket.price}) `;
        })
        return ticketlist;
    }
    searchTickets(lowerBound, upperBound) {
        const eligibleTickets = this.availableTickets.filter(ticket => {
            return ticket.price >= lowerBound && ticket.price <= upperBound;
        });

        if (eligibleTickets.length > 0) {
            let ticketList = 'Eligible tickets: ';
            eligibleTickets.forEach((ticket, index) => {
                ticketList += `${index + 1}. ${ticket.name} ($${ticket.price}) `;
            });
            return ticketList;
        } else {
            return 'No tickets available.';
        }
    }
}

let eventArr = new Array();


let eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
let eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
let eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

eventArr.push(eventObj1, eventObj2, eventObj3);

console.log(eventArr);


document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArr.forEach((item) => {
        const eligibleTickets = item.searchTickets(0, 250);
    html += `<li>${item.name} - ${item.description} - ${item.allTickets()} - ${eligibleTickets}</li>`;
    });
    document.querySelector('#event').innerHTML = html;
});



