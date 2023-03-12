import { visitCard, Visit } from "./Visit.js";

class VisitDentist extends Visit {
  constructor(fio, doctor, purpose, description, priority, lastVisit) {
    super(fio, doctor, purpose, description, priority);
    this.lastVisit = lastVisit;
  }
  render() {
    const lastVisit = document.createElement("p");
    lastVisit.className = "visitCard__container--lastVisit";
    lastVisit.textContent = this.lastVisit;

    visitCard.append(lastVisit);

  }
}

export { VisitDentist };
