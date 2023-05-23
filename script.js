const wizard = {
  name: "Trisky",
  health: 75,
  heal(potion1 = 10, potion2 = 10) {
    return (this.health += potion1 + potion2);
  },
};

const warrior = {
  name: "zeus",
  health: 30,
};

// Call method
wizard.heal.call(warrior, 10, 20);

// Apply method
wizard.heal.apply(warrior, [5, 15]);

// Bind method
const healWarrior = wizard.heal.bind(warrior, 10, 20);

healWarrior();
