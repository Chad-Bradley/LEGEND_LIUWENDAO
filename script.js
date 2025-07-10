// 游戏数据
let coins = 0;
let clickPower = 1;
let clickCost = 10;
let autoRate = 0;
let autoCost = 100;
let autoUnlocked = false;

let fruits = 0;
let fruitRate =0;
let fruitCost = 50;

let rebirthCount = 0;
let rebirthPoints = 0;
let totalClicks = 0;

let friends =0;
let saveAchievementUnlocked = false;

let yestoneOwned = false;
let yestoneLevel = 1;
let yestoneUpgradeCost = 1000;
let yestoneEverOwned = false;

let qiziOwned = false;
let lihuaOwned = false;
// 成就系统
const achievements = [
  {
    /*车前草数量*/ 
    id:'coins1',
    name:'万物的开端',
    description:'拥有1个车前草',
    icon:'img/achievements/coins1.png',
    condition:()=>coins>=1,
    reward:()=>{ clickPower += 1; },
    unlocked: false
  },
  {
    id: 'coins10',
    name: '勤劳的小蜜蜂',
    description: '拥有10个车前草',
    icon: 'img/achievements/coins10.png',
    condition: () => coins >= 10,
    reward: () => { clickPower += 2; },
    unlocked: false
  },
  {
    id: 'coins100',
    name: '卷起来了',
    description: '拥有100个车前草',
    icon: 'img/achievements/coins100.png',
    condition: () => coins >= 100,
    reward: () => { clickPower += 5; },
    unlocked: false
  },
  {
    id: 'coins1000',
    name: 'OMG',
    description: '拥有1000个车前草',
    icon: 'img/achievements/coins1000.png',
    condition: () => coins >= 1000,
    reward: () => { autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'coins10000',
    name: '富可敌国',
    description: '拥有10000个车前草',
    icon: 'img/achievements/coins10000.png',
    condition: () => coins >= 10000,
    reward: () => {  autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'coins100000',
    name: '车前草之王',
    description: '拥有100000个车前草',
    icon: 'img/achievements/coins100000.png',
    condition: () => coins >= 100000,
    reward: () => {  autoRate *= 1.05; },
    unlocked: false
  },
  /*点击数量*/
  {
    id:'clicks1',
    name:'这是什么点一下',
    description:'累计点击1次',
    icon:'img/achievements/clicks1.png',
    condition:()=>totalClicks>=1,
    reward:()=>{ clickPower += 1; },
    unlocked: false
  },
  {
    id: 'clicks10',
    name: '点点点',
    description: '累计点击10次',
    icon: 'img/achievements/clicks10.png',
    condition: () => totalClicks >= 10,
    reward: () => { clickPower += 2; },
    unlocked: false
  },
  {
    id: 'clicks100',
    name: '继续点击！',
    description: '累计点击100次',
    icon: 'img/achievements/clicks100.png',
    condition: () => totalClicks >= 100,
    reward: () => { clickPower += 5; },
    unlocked: false
  },
  {
    id: 'clicks1000',
    name: '点吗？点啊！',
    description: '累计点击1000次',
    icon: 'img/achievements/clicks1000.png',
    condition: () => totalClicks >= 1000,
    reward: () => { autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'clicks10000',
    name: '鼠标粉碎机',
    description: '累计点击10000次',
    icon: 'img/achievements/clicks10000.png',
    condition: () => totalClicks >= 10000,
    reward: () => {  autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'clicks100000',
    name: '点王',
    description: '累计点击100000次',
    icon: 'img/achievements/clicks100000.png',
    condition: () => totalClicks >= 100000,
    reward: () => {  autoRate *= 1.05; },
    unlocked: false
  },

/*果子 */
  {
    id:'fruits1',
    name:'果子！',
    description:'拥有1个果子',
    icon:'img/achievements/fruits1.png',
    condition:()=> fruits>=1,
    reward:()=>{ autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'fruits10',
    name: '果子，果子！',
    description: '拥有10个果子',
    icon: 'img/achievements/fruits10.png',
    condition: () => fruits >= 10,
    reward: () => { autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'fruits100',
    name: '快乐源泉',
    description: '拥有100个果子',
    icon: 'img/achievements/fruits100.png',
    condition: () => fruits >= 100,
    reward: () => { autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'fruits1000',
    name: 'OMG!!!',
    description: '拥有1000个果子',
    icon: 'img/achievements/fruits1000.png',
    condition: () => fruits >= 1000,
    reward: () => { autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'fruits10000',
    name: '富可敌国II',
    description: '拥有10000个果子',
    icon: 'img/achievements/fruits10000.png',
    condition: () => fruits >= 10000,
    reward: () => {  autoRate *= 1.05; },
    unlocked: false
  },
  {
    id: 'fruits100000',
    name: '果王',
    description: '拥有100000个果子',
    icon: 'img/achievements/fruits100000.png',
    condition: () => fruits >= 100000,
    reward: () => {  autoRate *= 1.05; },
    unlocked: false
  },

  /*伙伴*/
  {
    id: 'friends0',
    name: '独行侠',
    description: '没有伙伴,祝你好运',
    icon: 'img/achievements/friends0.png',
    condition: () => friends==0,
    reward: () => {  ; },
    unlocked: false
  },
  {
    id: 'friends1',
    name: '勾肩搭背',
    description: '解锁1个伙伴',
    icon: 'img/achievements/friends1.png',
    condition: () => friends==1,
    reward: () => {  autoRate*=1.1; },
    unlocked: false
  },
  {
    id: 'friends2',
    name: '三人成行',
    description: '解锁2个伙伴',
    icon: 'img/achievements/friends2.png',
    condition: () => friends==2,
    reward: () => {  autoRate*=1.1; },
    unlocked: false
  },
  {
    id: 'friends3',
    name: '一桌麻将',
    description: '解锁3个伙伴',
    icon: 'img/achievements/friends3.png',
    condition: () => friends==2,
    reward: () => {  autoRate*=1.1; },
    unlocked: false
  },



/*回溯*/
  {
    id: 'rebirth1',
    name: '重启！',
    description: '完成1次转生',
    icon: 'img/achievements/rebirth1.png',
    condition: () => rebirthCount >= 1,
    reward: () => { clickPower+=10; },
    unlocked: false
  },
  {
    id: 'rebirth2',
    name: '梅开二度',
    description: '完成2次转生',
    icon: 'img/achievements/rebirth2.png',
    condition: () => rebirthCount >= 2,
    reward: () => { clickPower*=1.05; },
    unlocked: false
  },
  {
    id: 'rebirth3',
    name: '梅开三度',
    description: '完成3次转生',
    icon: 'img/achievements/rebirth3.png',
    condition: () => rebirthCount >= 3,
    reward: () => { clickPower*=1.05; },
    unlocked: false
  },
  {
    id: 'rebirth5',
    name: 'REWIND!',
    description: '完成第五次回溯',
    icon: 'img/achievements/rebirth5.png',
    condition: () => rebirthCount >= 5,
    reward: () => { rebirthPoints += 5; },
    unlocked: false
  },
  {
    id: 'rebirth10',
    name: '时光旅行者',
    description: '完成10次转生',
    icon: 'img/achievements/rebirth10.png',
    condition: () => rebirthCount >= 10,
    reward: () => { clickPower*=1.05; },
    unlocked: false
  },
  /*存档   */
  {
  id: 'save1',
  name: '未雨绸缪',
  description: '第1次手动存档',
  icon: 'img/achievements/save1.png', // 你可以准备一张图标
  condition: () => false, // 初始为 false，手动触发
  reward: () => { clickPower += 1; }, // 或其他奖励
  unlocked: false
},
/* 手动车前草*/
  {
    id: 'clickpower10',
    name: '薄言采之',
    description: '点击效率达到10',
    icon: 'img/achievements/clickpower10.png', // 你可以准备一张图标
    condition: () => clickPower>=10, // 初始为 false，手动触发
    reward: () => { clickPower += 1; }, // 或其他奖励
    unlocked: false
  },
  {
    id: 'clickpower100',
    name: '薄言掇之',
    description: '点击效率达到100',
    icon: 'img/achievements/clickpower100.png', // 你可以准备一张图标
    condition: () => clickPower>=100, // 初始为 false，手动触发
    reward: () => { clickPower*=1.05; }, // 或其他奖励
    unlocked: false
  },
  {
    id: 'clickpower200',
    name: '薄言捋之',
    description: '点击效率达到200',
    icon: 'img/achievements/clickpower200.png', // 你可以准备一张图标
    condition: () => clickPower>=200, // 初始为 false，手动触发
    reward: () => { clickPower*=1.05; }, // 或其他奖励
    unlocked: false
  },
  {
    id: 'clickpower500',
    name: '薄言袺之',
    description: '点击效率达到500',
    icon: 'img/achievements/clickpower500.png', // 你可以准备一张图标
    condition: () => clickPower>=500, // 初始为 false，手动触发
    reward: () => { clickPower*=1.05; }, // 或其他奖励
    unlocked: false
  },
  {
    id: 'clickpower1000',
    name: '薄言襭之',
    description: '点击效率达到1000',
    icon: 'img/achievements/clickpower1000.png', // 你可以准备一张图标
    condition: () => clickPower>=1000, // 初始为 false，手动触发
    reward: () => { clickPower*=1.05; }, // 或其他奖励
    unlocked: false
  },


/*自动*/
  {
    id: 'auto1',
    name: '科技的力量',
    description: '首次解锁自动采摘',
    icon: 'img/achievements/auto1.png',
    condition: () => autoRate>=1,
    reward: () => { clickPower+=10; },
    unlocked: false
  },
  {
    id: 'auto10',
    name: '解放双手',
    description: '自动采摘达到10',
    icon: 'img/achievements/auto10.png',
    condition: () => autoRate>=10,
    reward: () => { clickPower+=10; },
    unlocked: false
  },
  {
    id: 'auto100',
    name: '联合收割机',
    description: '自动采摘达到100',
    icon: 'img/achievements/auto100.png',
    condition: () => autoRate>=100,
    reward: () => { clickPower*=1.1; },
    unlocked: false
  },
  {
    id: 'auto200',
    name: '车前草工厂',
    description: '自动采摘达到200',
    icon: 'img/achievements/auto200.png',
    condition: () => autoRate>=200,
    reward: () => { clickPower*=1.1; },
    unlocked: false
  },
  {
    id: 'auto500',
    name: '全自动',
    description: '自动采摘达到500',
    icon: 'img/achievements/auto500.png',
    condition: () => autoRate>=500,
    reward: () => { autoRate*=1.1; },
    unlocked: false
  },
  {
    id: 'auto1000',
    name: '车前草帝国',
    description: '自动采摘达到1000',
    icon: 'img/achievements/auto1000.png',
    condition: () => autoRate>=1000,
    reward: () => { autoRate*=1.1; },
    unlocked: false
  },
/*自动果子*/
  {
    id: 'fruitrate10',
    name: 'Yestone厉害',
    description: '果子产出达到10',
    icon: 'img/achievements/fruitrate10.png',
    condition: () => fruitRate>=10,
    reward: () => {  autoRate*=1.05; },
    unlocked: false
  },
  {
    id: 'fruitrate100',
    name: 'Yestone真厉害',
    description: '果子产出达到100',
    icon: 'img/achievements/fruitrate100.png',
    condition: () => fruitRate>=100,
    reward: () => {  autoRate*=1.05; },
    unlocked: false
  },
  {
    id: 'fruitrate200',
    name: 'Yestone双倍厉害',
    description: '果子产出达到200',
    icon: 'img/achievements/fruitrate200.png',
    condition: () => fruitRate>=200,
    reward: () => {  fruitRate*=1.05; },
    unlocked: false
  },
  {
    id: 'fruitrate500',
    name: 'Yestone真是太厉害了',
    description: '果子产出达到500',
    icon: 'img/achievements/fruitrate500.png',
    condition: () => fruitRate>=500,
    reward: () => {  fruitRate*=1.1; },
    unlocked: false
  },
  {
    id: 'fruitrate1000',
    name: 'Yestone得了MVP',
    description: '果子产出达到1000',
    icon: 'img/achievements/fruitrate1000.png',
    condition: () => fruitRate>=1000,
    reward: () => { fruitRate*=1.2; },
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
    clickPower=Math.floor(clickPower*1.3);
    // 修改前：clickCost = Math.floor(clickCost * 1.2);
    clickCost = Math.floor(clickCost + Math.log(clickCost + 1) * 1.2);
    updateDisplay();
  }
  checkAchievements();
});

// 升级自动采摘
upgradeAutoButton.addEventListener('click', () => {
  if (coins >= autoCost) {
    coins -= autoCost;
    autoRate =Math.floor((autoRate+1)*1.1);
    autoCost = Math.floor(autoCost * 1.25);
  if (!autoUnlocked) {
      autoUnlocked = true;
      startAutoProduction();
    }
    updateDisplay();
  }
  checkAchievements();
});

// 升级果子产出
upgradeFruitButton.addEventListener('click', () => {
  if (fruits >= fruitCost) {
    fruits -= fruitCost;
    fruitRate =Math.floor((fruitRate+1)*1.3);
    fruitCost = Math.floor((fruitCost-0.5) * 1.2);
    updateDisplay();
  }
  checkAchievements();
});

// 购买伙伴
buyYestoneButton.addEventListener('click', () => {
  if (!yestoneOwned) {
    if (coins >= 1000) {
      coins -= 1000;
      yestoneOwned = true;
      fruitRate = 1;

      // 只在首次购买时增加 friends
      if (!yestoneEverOwned) {
        friends += 1;
        yestoneEverOwned = true; // 标记为曾经拥有过
      }

      updateDisplay();
    }
  } else {
    if (coins >= yestoneUpgradeCost) {
      coins -= yestoneUpgradeCost;
      yestoneLevel++;
      fruitRate = fruitRate * 1.2;
      yestoneUpgradeCost = Math.floor(yestoneUpgradeCost * 1.5);
      updateDisplay();
    }
  }
  checkAchievements();
});

buyQiziButton.addEventListener('click', () => {
  if (rebirthCount >= 2 && coins >= 2000 && fruits >= 500) {
    coins -= 2000;
    fruits -= 500;
    qiziOwned = true;
    friends+=1;
    updateDisplay();
  }
  checkAchievements();
});

buyLihuaButton.addEventListener('click', () => {
  if (rebirthCount >= 5 && coins >= 5000 && fruits >= 1000) {
    coins -= 5000;
    fruits -= 1000;
    lihuaOwned = true;
    friends+=1;
    updateDisplay();
  }
  checkAchievements();
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
    yestoneOwned = false;
    yestoneLevel = 1;
    yestoneUpgradeCost = 1000;
    qiziOwned = false;
    lihuaOwned = false;

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
  checkAchievements();
});

buyAutoEfficiencyButton.addEventListener('click', () => {
  if (rebirthPoints >= 2) {
    rebirthPoints -= 2;
    autoRate += 1;
    updateDisplay();
  }
  checkAchievements();
});

buyFruitEfficiencyButton.addEventListener('click', () => {
  if (rebirthPoints >= 2) {
    rebirthPoints -= 2;
    fruitRate += 1;
    updateDisplay();
  }
  checkAchievements();
});

buyRebirthBonusButton.addEventListener('click', () => {
  if (rebirthPoints >= 5) {
    rebirthPoints -= 5;
    // 实现转生点获取加成逻辑
    updateDisplay();
  }
  checkAchievements();
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
  checkAchievements();
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
  if (yestoneOwned) {
  buyYestoneButton.textContent = `升级Yestone (Lv.${yestoneLevel})`;
  buyYestoneButton.disabled = coins < yestoneUpgradeCost;
  buyYestoneButton.parentElement.setAttribute(
      'data-tooltip',
      `当前果子产出：${fruitRate}/秒\n升级花费：${yestoneUpgradeCost} 车前草`
    );
  } else {
    buyYestoneButton.textContent = 'Yestone';
    buyYestoneButton.disabled = coins < 1000;
    buyYestoneButton.parentElement.setAttribute(
      'data-tooltip',
      'Yestone解锁条件：无\n价格：1000 车前草\n产生果子'
    );
  }
  // 更新成就列表
  updateAchievements();
}

// 成就检测
function checkAchievements() {
  achievements.forEach(ach => {
    if (!ach.unlocked && ach.condition()) {
      console.log(`解锁成就：${ach.name}`);
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
  const grid = document.getElementById('achievementGrid');
  const progress = document.getElementById('achievementProgress');
  grid.innerHTML = '';

  let unlockedCount = 0;

  achievements.forEach(ach => {
    const item = document.createElement('div');
    item.className = 'achievement-item';

    const img = document.createElement('img');
    img.src = ach.unlocked ? ach.icon : 'img/achievements/locked.png';
    img.alt = ach.name;

    const tooltip = document.createElement('div');
    tooltip.className = 'achievement-tooltip';
    tooltip.innerHTML = `<strong>${ach.name}</strong><br>条件：${ach.description}`;

    item.appendChild(img);
    item.appendChild(tooltip);
    grid.appendChild(item);

    if (ach.unlocked) unlockedCount++;
  });

  progress.textContent = `已完成：${unlockedCount} / ${achievements.length}`;
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
    achievements,
    yestoneOwned,
    yestoneLevel,
    yestoneUpgradeCost,
    yestoneEverOwned,
    qiziOwned,
    lihuaOwned,
    friends,
  };
  localStorage.setItem('idleGameSave', JSON.stringify(gameData));
  console.log('游戏已保存');

  // 检查“第一次存档”成就
  const saveAch = achievements.find(a => a.id === 'save1');
  if (saveAch && !saveAch.unlocked && !saveAchievementUnlocked) {
    saveAchievementUnlocked = true;
    saveAch.unlocked = true;
    saveAch.reward();
    showAchievementNotification(saveAch);
    updateAchievements();
  } 
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
    yestoneLevel = gameData.yestoneLevel || 1;
    yestoneUpgradeCost = gameData.yestoneUpgradeCost || 1000;
    yestoneOwned = gameData.yestoneOwned || false;
    qiziOwned = gameData.qiziOwned || false;
    lihuaOwned = gameData.lihuaOwned || false;
    friends = gameData.friends || 0;
    yestoneEverOwned = gameData.yestoneEverOwned || false;
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