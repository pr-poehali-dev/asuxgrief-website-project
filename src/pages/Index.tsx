import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [rubiesAmount, setRubiesAmount] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const revenue = {
    week: 12450,
    month: 48900,
    year: 520000,
    total: 1250000
  };

  const handleAdminLogin = () => {
    if (adminPassword === "admin123") {
      setIsAdmin(true);
      setShowAdminPanel(false);
    }
  };
  const recentPurchases = [
    { player: "xXDarkKnightXx", item: "VIP Статус", price: "500₽", time: "2 мин назад" },
    { player: "ProGamer2024", item: "Алмазный ранг", price: "1200₽", time: "15 мин назад" },
    { player: "SteveMiner", item: "Набор ресурсов", price: "300₽", time: "1 час назад" },
    { player: "CreeperHunter", item: "Легендарный кейс", price: "800₽", time: "2 часа назад" },
  ];

  const rules = [
    { section: "1.0", title: "Общая информация", description: "Настоящий свод правил создан проектом AsuxGrief и применяются в рамках сервера AsuxGrief" },
    
    { section: "1.1", title: "Спам (флуд)", description: "Мут на 30 мин" },
    { section: "1.1.2", title: "Пиар проектов", description: "Бан навсегда" },
    { section: "1.2", title: "Массивное оскорбление", description: "Мут на 1 час" },
    { section: "1.3", title: "Организация флуда через опрос", description: "Мут на 4 часа" },
    { section: "1.4", title: "Упоминание родителей", description: "Мут на 7 дней" },
    { section: "1.4.1", title: "Оскорбление проекта и модераторов", description: "Мут на 12 часов" },
    
    { section: "1.5", title: "Использование читов", description: "Бан на 14 дней" },
    { section: "1.5.1", title: "Тим с читером", description: "Бан на 8 дней" },
    { section: "1.5.2", title: "Клан читеров", description: "Бан на 14 дней каждого" },
    { section: "1.6", title: "Признание в читах", description: "Бан на 12 дней" },
    { section: "1.7", title: "Ник как у администрации", description: "Бан навсегда" },
    { section: "1.8", title: "DDoS пакеты", description: "Бан на 28 дней" },
    { section: "1.8.1", title: "Краш сервера", description: "Бан навсегда" },
    { section: "1.9", title: "Отказ от проверки", description: "Бан на 14 дней" },
    { section: "2.0", title: "Задержка модератора", description: "Бан на 16 дней" },
    { section: "2.1", title: "Выдавать себя за модерацию", description: "Бан на 20 дней" },
    { section: "2.5", title: "Более 5 аккаунтов в бане", description: "Бан на 14 дней каждый новый" },
    
    { section: "2.2", title: "Некорректный TP", description: "Варн" },
    { section: "2.3", title: "Взятка", description: "Снятие" },
    { section: "2.4", title: "Выдача админских предметов", description: "Варн" },
    { section: "2.5", title: "Некорректный мут", description: "Варн" },
  ];

  const donatePackages = [
    { 
      name: "Pravitel", 
      price: "49₽", 
      features: ["🎭 Надеть блок на голову: /hat", "👥 Игроки рядом: /near"],
      color: "from-emerald-400 to-teal-500"
    },
    { 
      name: "Orion", 
      price: "299₽", 
      features: ["🛡️ Дон-панель: /orion", "🎁 Подарить донат: /grant", "📊 Статистика аккаунтов: /dupeip"],
      color: "from-blue-500 to-indigo-600"
    },
    { 
      name: "Xozyain", 
      price: "219₽", 
      features: ["⚡ Ударить молнией: /thor", "🌧️ Штормовая погода: /rain", "❤️ Исцелить себя: /heal", "📍 Установить варп: /setwarp", "🚫 Список банов: /banlist"],
      color: "from-green-500 to-emerald-600"
    },
    { 
      name: "Christmas", 
      price: "399₽", 
      features: ["🎄 ЛИМИТИРОВАННЫЙ СТАТУС", "Новогодний кит", "Эксклюзивный префикс", "7 домов"],
      popular: true,
      limited: true,
      color: "from-red-600 to-green-600"
    },
    { 
      name: "Morok", 
      price: "500₽", 
      features: ["☃️ Новогодний снеговик", "Уникальный скин", "10 домов", "Все команды"],
      special: true,
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "Custom", 
      price: "799₽", 
      features: ["🎨 Индивидуальный донат по вашему запросу", "📧 Киньте админу фото с покупкой", "⏱️ Получите привилегию за 2 дня", "👑 Права как у Morok"],
      color: "from-purple-500 to-pink-600"
    },
  ];

  const casePackages = [
    {
      name: "Донатный кейс",
      price: "79₽",
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "Монетный кейс",
      price: "15₽",
      color: "from-yellow-400 to-amber-500"
    },
    {
      name: "Кейс с рубинами",
      price: "20₽",
      color: "from-rose-500 to-red-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#0f1623] to-[#0a0f1a]">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                asuxgrief
              </h1>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#about" className="hover:text-primary transition-colors">О сервере</a>
              <a href="#donate" className="hover:text-primary transition-colors">Донаты</a>
              <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
              <a href="#purchases" className="hover:text-primary transition-colors">Покупки</a>
              <button
                onClick={() => setShowAdminPanel(true)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Lock" size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Добро пожаловать на
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                asuxgrief
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лучший Minecraft сервер с уникальными режимами игры, дружным комьюнити и честной администрацией
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее
              </Button>
            </div>
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-2">IP для подключения:</p>
              <div className="inline-flex items-center gap-2 bg-card border border-primary/30 rounded-lg px-6 py-3">
                <Icon name="Server" size={20} className="text-primary" />
                <code className="text-xl font-mono text-primary">asuxgrief.ru</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">О сервере</h2>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-card border border-primary/30 rounded-lg px-6 py-3">
              <Icon name="Server" size={20} className="text-primary" />
              <code className="text-lg font-mono text-primary">asuxgrief.ru</code>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Активное комьюнити</h3>
              <p className="text-muted-foreground">Более 50 игроков в нашем Discord сообществе. Новые друзья каждый день!</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Защита от читеров</h3>
              <p className="text-muted-foreground">Мощный античит и активная модерация 24/7. Честная игра гарантирована!</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Уникальные режимы</h3>
              <p className="text-muted-foreground">Гриф, выживание, мини-игры и эксклюзивные режимы, которых нет нигде!</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://cdn.poehali.dev/projects/98412efd-c0e5-43db-be0c-3b985056cb51/files/36ecf729-b09f-4eae-b069-6bd20eb58714.jpg" 
            alt="Новогодний снеговик" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-red-600 text-white border-0 mb-4 text-lg px-4 py-2">
              🎄 Новогодняя распродажа!
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Донат привилегии</h2>
            <p className="text-muted-foreground">Поддержите сервер и получите уникальные возможности</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {donatePackages.map((pkg, idx) => (
              <Card 
                key={idx}
                className={`p-5 bg-gradient-to-br ${pkg.color} border-0 relative overflow-hidden hover:scale-105 transition-transform`}
              >
                {pkg.popular && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500 text-black border-0 text-xs">
                    🔥 Популярное
                  </Badge>
                )}
                {pkg.limited && (
                  <Badge className="absolute top-3 right-3 bg-amber-500 text-white border-0 text-xs animate-pulse">
                    ⏰ Лимитед
                  </Badge>
                )}
                {pkg.special && (
                  <Badge className="absolute top-3 right-3 bg-cyan-400 text-black border-0 text-xs">
                    ⭐ Спецпредложение
                  </Badge>
                )}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-white">{pkg.name}</h3>
                  <p className="text-3xl font-bold mb-4 text-white">{pkg.price}</p>
                  <ul className="space-y-2 mb-4 min-h-[120px]">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-white/90 text-sm">
                        <Icon name="Check" size={16} className="text-white mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-black hover:bg-white/90 text-sm py-2">
                    Приобрести
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-8">Игровые кейсы</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {casePackages.map((caseItem, idx) => (
                <Card 
                  key={idx}
                  className={`p-6 bg-gradient-to-br ${caseItem.color} border-0 relative overflow-hidden hover:scale-105 transition-transform`}
                >
                  <div className="relative z-10 text-center">
                    <div className="mb-4 flex justify-center">
                      <img 
                        src="https://cdn.poehali.dev/projects/98412efd-c0e5-43db-be0c-3b985056cb51/files/beb736df-3613-41cf-94bf-98a68bc62e10.jpg"
                        alt="Кейс"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{caseItem.name}</h3>
                    <p className="text-3xl font-bold mb-4 text-white">{caseItem.price}</p>
                    <Button className="w-full bg-white text-black hover:bg-white/90 font-bold">
                      Открыть кейс
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-red-500 to-pink-600 border-0">
              <div className="text-center text-white">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Icon name="Gem" size={32} className="text-white" />
                  <h3 className="text-2xl font-bold">Рубины</h3>
                </div>
                <p className="text-white/90 mb-6">Игровая валюта для покупок в магазине</p>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Button 
                      onClick={() => setRubiesAmount(Math.max(1, rubiesAmount - 1))}
                      className="bg-white/30 hover:bg-white/40 text-white border-0"
                      size="icon"
                    >
                      <Icon name="Minus" size={20} />
                    </Button>
                    <div className="text-center">
                      <p className="text-5xl font-bold text-white">{rubiesAmount}₽</p>
                      <p className="text-white/80 mt-2">= {rubiesAmount * 100} рубинов</p>
                    </div>
                    <Button 
                      onClick={() => setRubiesAmount(rubiesAmount + 1)}
                      className="bg-white/30 hover:bg-white/40 text-white border-0"
                      size="icon"
                    >
                      <Icon name="Plus" size={20} />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[1, 5, 10, 50].map((amount) => (
                      <Button
                        key={amount}
                        onClick={() => setRubiesAmount(amount)}
                        variant={rubiesAmount === amount ? "default" : "outline"}
                        className={rubiesAmount === amount ? "bg-white text-pink-600" : "bg-white/20 text-white border-white/30 hover:bg-white/30"}
                        size="sm"
                      >
                        {amount}₽
                      </Button>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-start gap-2 text-white/90">
                    <Icon name="Check" size={16} className="text-white mt-0.5 flex-shrink-0" />
                    <span>Моментальное зачисление</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/90">
                    <Icon name="Check" size={16} className="text-white mt-0.5 flex-shrink-0" />
                    <span>Покупка в игровом магазине</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/90">
                    <Icon name="Check" size={16} className="text-white mt-0.5 flex-shrink-0" />
                    <span>Обмен с другими игроками</span>
                  </li>
                </ul>

                <Button className="w-full bg-white text-pink-600 hover:bg-white/90 font-bold">
                  Купить за {rubiesAmount}₽
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Правила сервера AsuxGrief</h2>
          <div className="space-y-3">
            {rules.map((rule, idx) => (
              <Card key={idx} className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="min-w-[60px] h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{rule.section}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{rule.title}</h3>
                    <p className="text-muted-foreground text-sm">{rule.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-8 p-6 bg-primary/10 border-primary/30">
            <p className="text-center text-sm text-muted-foreground">
              ⚠️ Выдавать мут и бан строго по правилам проекта по пунктам (например: 1.2). Выдача наказания не по пункту — варн!
            </p>
          </Card>
        </div>
      </section>

      <section id="purchases" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Последние покупки</h2>
          <p className="text-center text-muted-foreground mb-12">Другие игроки уже поддержали сервер</p>
          <div className="space-y-3">
            {recentPurchases.map((purchase, idx) => (
              <Card key={idx} className="p-4 bg-card border-border hover:border-primary/50 transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{purchase.player}</p>
                      <p className="text-sm text-muted-foreground">{purchase.item}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{purchase.price}</p>
                    <p className="text-xs text-muted-foreground">{purchase.time}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showAdminPanel && !isAdmin && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 bg-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Админ-панель</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAdminPanel(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Пароль</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Введите пароль"
                  onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                />
              </div>
              <Button onClick={handleAdminLogin} className="w-full">
                Войти
              </Button>
            </div>
          </Card>
        </div>
      )}

      {isAdmin && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className="p-6 bg-card border-primary/50 shadow-2xl max-w-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Аналитика прибыли</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAdmin(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">За неделю</p>
                  <p className="text-2xl font-bold text-primary">{revenue.week.toLocaleString()}₽</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">За месяц</p>
                  <p className="text-2xl font-bold text-primary">{revenue.month.toLocaleString()}₽</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">За год</p>
                  <p className="text-2xl font-bold text-primary">{revenue.year.toLocaleString()}₽</p>
                </div>
                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-4">
                  <p className="text-sm text-white/90 mb-1">Всего</p>
                  <p className="text-2xl font-bold text-white">{revenue.total.toLocaleString()}₽</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Info" size={16} />
                  <span>Данные обновляются в реальном времени</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">asuxgrief</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            © 2024 asuxgrief. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;