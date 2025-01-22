export const particlesConfig = {
  particles: {
    number: { value: 0 },
    color: { value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"] },
    shape: { type: ["circle", "star"] },
    opacity: { value: 1 },
    size: { value: { min: 2, max: 4 } },
    move: {
      enable: true,
      speed: { min: 5, max: 15 },
      direction: "none",
      outModes: "destroy",
      gravity: { enable: true, acceleration: 2 }
    },
    life: { duration: { sync: true, value: 2 }, count: 1 }
  },
  emitters: []
};

export const rocketConfig = {
  startCount: 1,
  position: { x: 50, y: 100 },
  rate: { delay: 0, quantity: 1 },
  life: { duration: 1, count: 1 },
  particles: {
    color: { value: "#FFFF00" },
    size: { value: 3 },
    move: {
      speed: { min: 30, max: 40 },
      direction: "top",
      straight: true
    }
  }
};

export const createExplosion = (x, y, color) => ({
  position: { x, y },
  rate: { delay: 0, quantity: 100 },
  life: { duration: 0.1, count: 1 },
  particles: {
    color: { value: color },
    size: { value: { min: 2, max: 5 } },
    move: {
      speed: { min: 10, max: 30 },
      direction: "random",
      outModes: "destroy",
      gravity: { enable: true, acceleration: 2 }
    },
    links: {
      enable: true,
      color: color,
      distance: 150
    }
  }
});
