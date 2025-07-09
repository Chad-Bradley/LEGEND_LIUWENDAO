// 游戏数据
let coins = 0;
let clickPower = 1;
let clickCost = 10;
let autoRate = 0;
let autoCost = 100;
let autoUnlocked = false;

let fruits = 0;
let fruitRate = 0;
let fruitCost = 50;

let yestoneOwned = false;
let qiziOwned = false;
let lihuaOwned = false;

let rebirthCount = 0;
let rebirthPoints = 0;
let totalClicks = 0;

// 成就系统
const achievements = [
  {
    id: 'click10',
    name: '新手采摘者',
    description: '累计点击10次',
    icon: 'img/achievement/click10.png',
    condition: () => totalClicks >= 10,
    reward: () => { clickPower += 1; },
    unlocked: false
  },
  {
    id: 'click100',
    name: '勤劳采摘者',
    description: '累计点击100次',
    condition: () => totalClicks >= 100,
    reward: () => { clickPower += 5; },
    unlocked: false
  },
  {
    id: 'coin100',
    name: '小有积蓄',
    description: '拥有100个车前草',
    condition: () => coins >= 100,
    reward: () => { coins += 10; },
    unlocked: false
  },
  {
    id: 'fruit10',
    name: '果香四溢',
    description: '拥有10个果子',
    condition: () => fruits >= 10,
    reward: () => { fruits += 5; },
    unlocked: false
  },
  {
    id: 'rebirth1',
    name: '第一次转生',
    description: '完成第一次转生',
    condition: () => rebirthCount >= 1,
    reward: () => { rebirthPoints += 1; },
    unlocked: false
  },
  {
    id: 'rebirth5',
    name: '回溯达人',
    description: '完成第五次回溯',
    condition: () => rebirthCount >= 5,
    reward: () => { rebirthPoints += 5; },
    unlocked: false
  }
];

// DOM 元素
const coinsDisplay = document.getElementById('coins');
const clickPowerDisplay = document.getElementById('clickPower');
const autoRateDisplay = document.getElementById('autoRate');
const clickCostDisplay = document.getElementById('clickCost');
const autoCostDisplay = document.getElementById('autoCost');

const fruitsDisplay = document.getElementById('fruits');
const fruitRateDisplay = document.getElementById('fruitRate');
const fruitCostDisplay = document.getElementById('fruitCost');

const rebirthCountDisplay = document.getElementById('rebirthCount');
const rebirthPointsDisplay = document.getElementById('rebirthPoints');

const clickButton = document.getElementById('clickButton');
const upgradeClickButton = document.getElementById('upgradeClick');
const upgradeAutoButton = document.getElementById('upgradeAuto');
const upgradeFruitButton = document.getElementById('upgradeFruit');

const buyYestoneButton = document.getElementById('buyYestone');
const buyQiziButton = document.getElementById('buyQizi');
const buyLihuaButton = document.getElementById('buyLihua');

const rebirthButton = document.getElementById('rebirthButton');
const buyClickEfficiencyButton = document.getElementById('buyClickEfficiency');
const buyAutoEfficiencyButton = document.getElementById('buyAutoEfficiency');
const buyFruitEfficiencyButton = document.getElementById('buyFruitEfficiency');
const buyRebirthBonusButton = document.getElementById('buyRebirthBonus');

const achievementList = document.getElementById('achievementList');
const saveButton = document.getElementById('saveButton');
const resetButton = document.getElementById('resetButton');

// 点击获得车前草
clickButton.addEventListener('click', () => {
  coins += clickPower;
  totalClicks++;
  updateDisplay();
  checkAchievements();
});

// 升级点击效率
upgradeClickButton.addEventListener('click', () => {
  if (coins >= clickCost) {
    coins -= clickCost;
    clickPower += 1;
    // 修改前：clickCost = Math.floor(clickCost * 1.2);
    clickCost = Math.floor(clickCost + Math.log(clickCost + 1) * 1.2);
    updateDisplay();
  }
});

// 升级自动采摘
upgradeAutoButton.addEventListener('click', () => {
  if (coins >= autoCost) {
    coins -= autoCost;
    autoRate += 1;
    autoCost = Math.floor(autoCost * 1.25);
  if (!autoUnlocked) {
      autoUnlocked = true;
      startAutoProduction();
    }
    updateDisplay();
  }
});

// 升级果子产出
upgradeFruitButton.addEventListener('click', () => {
  if (fruits >= fruitCost) {
    fruits -= fruitCost;
    fruitRate += 1;
    fruitCost = Math.floor(fruitCost * 1.2);
    updateDisplay();
  }
});

// 购买伙伴
buyYestoneButton.addEventListener('click', () => {
  if ( coins >= 1000) {
    coins -= 1000;
    yestoneOwned = true;
    fruitRate=1;
    updateDisplay();
  }
});

buyQiziButton.addEventListener('click', () => {
  if (rebirthCount >= 2 && coins >= 2000 && fruits >= 500) {
    coins -= 2000;
    fruits -= 500;
    qiziOwned = true;
    updateDisplay();
  }
});

buyLihuaButton.addEventListener('click', () => {
  if (rebirthCount >= 5 && coins >= 5000 && fruits >= 1000) {
    coins -= 5000;
    fruits -= 1000;
    lihuaOwned = true;
    updateDisplay();
  }
});

// 转生
rebirthButton.addEventListener('click', () => {
  if (coins >= 5000 && fruits >= 1000) {
    coins = 0;
    fruits = 0;
    clickPower = 1;
    clickCost = 10;
    autoRate = 0;
    autoCost = 100;
    fruitRate = 0;
    fruitCost = 50;
    autoUnlocked = false;
    rebirthCount++;
    rebirthPoints += rebirthCount;
    updateDisplay();
    checkAchievements();
  }
});

// 转生商店
buyClickEfficiencyButton.addEventListener('click', () => {
  if (rebirthPoints >= 1) {
    rebirthPoints -= 1;
    clickPower += 1;
    updateDisplay();
  }
});

buyAutoEfficiencyButton.addEventListener('click', () => {
  if (rebirthPoints >= 2) {
    rebirthPoints -= 2;
    autoRate += 1;
    updateDisplay();
  }
});

buyFruitEfficiencyButton.addEventListener('click', () => {
  if (rebirthPoints >= 2) {
    rebirthPoints -= 2;
    fruitRate += 1;
    updateDisplay();
  }
});

buyRebirthBonusButton.addEventListener('click', () => {
  if (rebirthPoints >= 5) {
    rebirthPoints -= 5;
    // 实现转生点获取加成逻辑
    updateDisplay();
  }
});

// 自动产出
function startAutoProduction() {
  setInterval(() => {
    coins += autoRate;
    fruits+=fruitRate;
    if (qiziOwned) {     coins += 1;
      fruits += 1;
    }
    updateDisplay();
  }, 1000);
}

// 更新显示
function updateDisplay() {
  coinsDisplay.textContent = coins;
  clickPowerDisplay.textContent = clickPower;
  autoRateDisplay.textContent = autoRate;
  clickCostDisplay.textContent = clickCost;
  autoCostDisplay.textContent = autoCost;

  fruitsDisplay.textContent = fruits;
  fruitRateDisplay.textContent = fruitRate;
  fruitCostDisplay.textContent = fruitCost;

  rebirthCountDisplay.textContent = rebirthCount;
  rebirthPointsDisplay.textContent = rebirthPoints;

  // 更新按钮状态
  upgradeClickButton.disabled = coins < clickCost;
  upgradeAutoButton.disabled = coins < autoCost;
  upgradeFruitButton.disabled = fruits < fruitCost;

  buyYestoneButton.disabled = !(coins >= 1000);
  buyQiziButton.disabled = !(rebirthCount >= 2 && coins >= 2000 && fruits >= 500);
  buyLihuaButton.disabled = !(rebirthCount >= 5 && coins >= 5000 && fruits >= 1000);

  rebirthButton.disabled = !(coins >= 5000 && fruits >= 1000);

  buyClickEfficiencyButton.disabled = rebirthPoints < 1;
  buyAutoEfficiencyButton.disabled = rebirthPoints < 2;
  buyFruitEfficiencyButton.disabled = rebirthPoints < 2;
  buyRebirthBonusButton.disabled = rebirthPoints < 5;

  // 更新成就列表
  updateAchievements();
}

// 成就检测
function checkAchievements() {
  achievements.forEach(ach => {
    if (!ach.unlocked && ach.condition()) {
      ach.unlocked = true;
      ach.reward();
      showAchievementNotification(ach);
    }
  });
}

// 成就通知
function showAchievementNotification(ach) {
  const container = document.getElementById('achievement-notifications');

  const toast = document.createElement('div');
  toast.className = 'achievement-toast';

  toast.innerHTML = `
    <img src="${ach.icon}" alt="${ach.name}" class="achievement-icon">
    <div class="achievement-text">
      <strong>${ach.name}</strong><br>
      ${ach.description}
    </div>
  `;

  container.appendChild(toast);

  // 触发显示动画
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // 3秒后自动移除
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      container.removeChild(toast);
    }, 500); // 等待动画结束
  }, 3000);
}

// 更新成就列表
function updateAchievements() {
  achievementList.innerHTML = '';
  achievements.forEach(ach => {
    if (ach.unlocked) {
      const li = document.createElement('li');
      li.textContent = `${ach.name} - ${ach.description}`;
      achievementList.appendChild(li);
    }
  });
}

// 存档系统
function saveGame() {
  const gameData = {
    coins,
    clickPower,
    clickCost,
    autoRate,
    autoCost,
    autoUnlocked,
    fruits,
    fruitRate,
    fruitCost,
    yestoneOwned,
    qiziOwned,
    lihuaOwned,
    rebirthCount,
    rebirthPoints,
    totalClicks,
    achievements
  };
  localStorage.setItem('idleGameSave', JSON.stringify(gameData));
  console.log('游戏已保存');
}

function loadGame() {
  const savedData = localStorage.getItem('idleGameSave');
  if (savedData) {
    const gameData = JSON.parse(savedData);
    coins = gameData.coins || 0;
    clickPower = gameData.clickPower || 1;
    clickCost = gameData.clickCost || 10;
    autoRate = gameData.autoRate || 0;
    autoCost = gameData.autoCost || 100;
    autoUnlocked = gameData.autoUnlocked || false;
    fruits = gameData.fruits || 0;
    fruitRate = gameData.fruitRate || 0;
    fruitCost = gameData.fruitCost || 50;
    yestoneOwned = gameData.yestoneOwned || false;
    qiziOwned = gameData.qiziOwned || false;
    lihuaOwned = gameData.lihuaOwned || false;
    rebirthCount = gameData.rebirthCount || 0;
    rebirthPoints = gameData.rebirthPoints || 0;
    totalClicks = gameData.totalClicks || 0;

    // 恢复成就状态
    if (gameData.achievements) {
      gameData.achievements.forEach((ach, index) => {
        if (ach.unlocked) {
          achievements[index].unlocked = true;
        }
      });
    }

    updateDisplay();
    console.log('游戏已加载');
  } else {
    console.log('未找到存档');
  }
}

function resetGame() {
  if (confirm('确定要重置游戏吗？这将清除所有存档！')) {
    localStorage.removeItem('idleGameSave');
    location.reload();
  }
}

// 存档按钮事件
saveButton.addEventListener('click', saveGame);
resetButton.addEventListener('click', resetGame);

// 自动保存
setInterval(saveGame, 30000);

// 页面加载时自动加载存档
window.onload = function() {
  loadGame();
  updateDisplay();
};


// 侧边栏切换功能
const sidebarItems = document.querySelectorAll('#sidebar li');
const sections = document.querySelectorAll('.section');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-section');

    // 移除所有 active 类
    sidebarItems.forEach(i => i.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // 添加 active 类到当前项
    item.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});