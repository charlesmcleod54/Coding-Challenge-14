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

