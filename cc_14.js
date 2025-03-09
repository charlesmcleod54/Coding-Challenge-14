// Task 2: Adding Support Tickets Dynamically
function createSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer");

    const ticket = document.createElement("h3");
    name.textContent = customerName;
    ticket.appendChild(name);

    const issue = document.createElement("p");
    issue.textContent = issueDescription;
    ticket.appendChild(issue);

    const priority = document.createElement("label");
    priority.textContent = 'Priority: ${priorityLevel}';
    ticket.appendChild(priority);

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolveButton");

    resolveButton.addEventListener("click", function() {
        ticketContainer.removeChild(ticket);
    });

    ticket.appendChild(resolveButton);

    ticketContainer.appendChild(ticket);
}

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll(."ticket label");

    const ticketsArray = Array.from(highPriorityTickets);

    ticketsArray.forEach(ticket => {
        if (ticket.textContent.includes("Priority: High")) {
            ticket.parentElement.style.backgroundColor = "red";
            ticket.parentElement.style.border = '2px solid black';
        }
    });
}

// Task 4: Implementing ticket Resolution with Event Bubbling
document.getElementById("ticketContainer").addEventListener("click", function(event) {
    console.log("A ticket was clicked!", event.target);
});

function createSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer");

    const ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    ticket.setAttribute("id", 'ticket-${Date.now()}');

    const name = document.createElement("h3");
    name.textContent = customerName;
    ticket.appendChild(name);

    const issue = document.createElement("p");
    issue.textContent = issueDescription;
    ticket.appendChild(issue);

    const priority = document.createElement("label");
    priority.textContent = 'Priority: ${priorityLevel}';
    ticket.appendChild(priority);

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolveButton");

    resolveButton.addEventListener("click", function(event) {
        event.stopPropagation();
        ticketContainer.removeChild(ticket);
    });

    ticket.appendChild(resolveButton);

    ticketContainer.appendChild(ticket);
}

