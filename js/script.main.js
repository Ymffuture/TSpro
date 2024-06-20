// search section


// Define Event, Ticket, and User classes using OOP principles

class Event {

  constructor(name, date, venue) {       // event(name,  date,  venue){
    
                                          //   code here}
    this.name = name;
    this.date = date;
    this.venue = venue;
    this.tickets = [];

  }

  addTicket(ticket) {
    this.tickets.push(ticket);
  }

  getTickets() {
    return this.tickets;
  }
}

class Ticket {

  constructor(event, category, price, quantity) {
    this.event = event;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }

  sellTickets(amount) {
    if (amount <= this.quantity) {
      this.quantity -= amount;
      return true; // Tickets sold successfully
    } else {
      return false; // Insufficient tickets to sell
    }
  }
}

class User {

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.tickets = [];
  }

  buyTicket(ticket, quantity) {
    const totalPrice = ticket.price * quantity;
    // Assuming some validation or payment process here
    if (ticket.sellTickets(quantity)) {
      this.tickets.push({
        event: ticket.event.name,
        category: ticket.category,
        quantity,
      });
      return true; // Ticket purchased successfully
    } else {
      return false; // Unable to purchase tickets
    }
  }

  getTickets() {
    return this.tickets;
  }
}

// Function to initialize ticket purchasing functionality
function initializeTicketPurchase() {
  // Create instances of Event and Tickets
  let concert = new Event(
    "Summer Music Festival",
    "2024-07-15",
    "Central Park"
  );
  let concertTicket = new Ticket(concert, "Concert", 50, 100);
  let moviePremiereTicket = new Ticket(concert, "Movie Premiere", 80, 50);
  let sportsEventTicket = new Ticket(concert, "Sports Event", 60, 100);
  let theaterShowTicket = new Ticket(concert, "Theater Show", 70, 75);
  let festivalPass = new Ticket(concert, "Festival Pass", 150, 30);

  // Add tickets to the event
  concert.addTicket(concertTicket);
  concert.addTicket(moviePremiereTicket);
  concert.addTicket(sportsEventTicket);
  concert.addTicket(theaterShowTicket);
  concert.addTicket(festivalPass);

  const buyButtons = document.querySelectorAll(".buy-ticket");

  buyButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const eventName = button.getAttribute("data-event");
      const category = button.getAttribute("data-category");
      const price = parseFloat(button.getAttribute("data-price"));

      const eventTickets = concert.getTickets();
      const selectedTicket = eventTickets.find(
        (ticket) =>
          ticket.event.name === eventName && ticket.category === category
      );

      if (selectedTicket) {
        const currentUser = new User("Alice", "alice@example.com");
        const quantity = 1; // Assuming buying one ticket at a time
        if (currentUser.buyTicket(selectedTicket, quantity)) {
          // Ticket purchased successfully
          alert(
            `Congratulations! You've successfully purchased a ${category} ticket for ${eventName}.`
          );
          let msg = ` <a href="pay.html" class="btn btn-outline-secondary2 btn-sm">Complete the purchase</a>
`;
          document.getElementById("fullbuy").innerHTML = msg;

          window.location.href = "payment.html";
        } else {
          alert(
            `Sorry, we couldn't process your request to purchase a ${category} ticket for ${eventName}.`
          );
        }
      } else {
        alert(`Ticket not found for ${eventName} - ${category}`);
      }
    });
  });
}

initializeTicketPurchase();

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const fullScreenSearch = document.getElementById("fullScreenSearch");
  const searchInput = fullScreenSearch.querySelector("input");

  searchButton.addEventListener("click", () => {
    fullScreenSearch.style.display = "flex";
    searchInput.focus();
  });

  searchInput.addEventListener("blur", () => {
    fullScreenSearch.style.display = "none";
  });

  new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
});

 


