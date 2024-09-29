// Initialize initial values and cooldowns
let water = 20;
let fert = 20;
let sun = 20;
let cooldown = 1 * 60; // 1 minute cooldown in seconds
let waterBtnClicks = 0;
let fertBtnClicks = 0;
let sunBtnClicks = 0;

// Set up interval to update stats every second
setInterval(updateStats, 1000);

function updateStats() {
  // Update timer display
  document.getElementById('timer').textContent = formatTime(cooldown);

  // Reduce stats every 1 minute
  if (cooldown % 60 === 0) {
    water -= 1;
    fert -= 1;
    sun -= 1;

    // Update HTML to reflect current stats
    document.getElementById('water-stat').textContent = water;
    document.getElementById('fert-stat').textContent = fert;
    document.getElementById('sun-stat').textContent = sun;

    // Check if the flower is dead
    if (water <= 0 || fert <= 0 || sun <= 0) {
      alert('Your flower has withered. Game over!');
      resetGame();
    }
  }

  cooldown--;

  // Reset cooldown every minute
  if (cooldown === 0) {
    cooldown = 1 * 60;
  }
}

function waterPlant() {
  if (waterBtnClicks < 3) {
    water += 5;
    waterBtnClicks++;
    document.getElementById('water-stat').textContent = water;
  } else {
    alert('You can only water the plant 3 times every 1 minute.');
  }
}

function fertPlant() {
  if (fertBtnClicks < 3) {
    fert += 5;
    fertBtnClicks++;
    document.getElementById('fert-stat').textContent = fert;
  } else {
    alert('You can only fertilize the plant 3 times every 1 minute.');
  }
}

function sunPlant() {
  if (sunBtnClicks < 3) {
    sun += 5;
    sunBtnClicks++;
    document.getElementById('sun-stat').textContent = sun;
  } else {
    alert('You can only give sunlight to the plant 3 times every 1 minute.');
  }
}

function killPlant() {
  alert('Your flower has withered. Game over!');
  resetGame();
}

function resetGame() {
  // Reset all values to default
  water = 20;
  fert = 20;
  sun = 20;
  cooldown = 1 * 60;
  waterBtnClicks = 0;
  fertBtnClicks = 0;
  sunBtnClicks = 0;

  // Update HTML to reflect default values
  document.getElementById('water-stat').textContent = water;
  document.getElementById('fert-stat').textContent = fert;
  document.getElementById('sun-stat').textContent = sun;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
