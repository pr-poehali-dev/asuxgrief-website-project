import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [rubiesAmount, setRubiesAmount] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCoupons, setShowCoupons] = useState(false);
  const [coupons, setCoupons] = useState([
    { id: 1, code: "NEWYEAR2024", discount: 20, items: ["Christmas", "Morok"] },
    { id: 2, code: "FIRSTBUY", discount: 15, items: ["all"] },
    { id: 3, code: "FASTPEKOV", discount: 10, items: ["all"] },
    { id: 4, code: "MOLCOS", discount: 10, items: ["all"] },
  ]);
  const [newCoupon, setNewCoupon] = useState({ code: "", discount: 0, items: "" });
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);
  const [couponInput, setCouponInput] = useState("");
  const [showServicesPanel, setShowServicesPanel] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [showDonatesPanel, setShowDonatesPanel] = useState(false);
  const [telegramLink, setTelegramLink] = useState("https://t.me/asuxgrief");
  const [discordLink, setDiscordLink] = useState("https://discord.gg/4X3hd5a5mq");
  const [funpayLink, setFunpayLink] = useState("https://funpay.com/users/14617125/");
  const [donates, setDonates] = useState([]);
  const [editingDonate, setEditingDonate] = useState<any>(null);
  const [showSBPPayment, setShowSBPPayment] = useState(false);
  const [nickname, setNickname] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

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
  const addToCart = (item: any) => {
    setCart([...cart, { ...item, id: Date.now() }]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    const coupon = coupons.find(c => c.code === couponInput.toUpperCase());
    if (coupon) {
      setAppliedCoupon(coupon);
    }
  };

  const getDiscountedPrice = (item: any) => {
    if (!appliedCoupon) return parseInt(item.price);
    if (appliedCoupon.items.includes("all") || appliedCoupon.items.includes(item.name)) {
      return parseInt(item.price) * (1 - appliedCoupon.discount / 100);
    }
    return parseInt(item.price);
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + getDiscountedPrice(item), 0);
  };

  const addCoupon = () => {
    if (newCoupon.code && newCoupon.discount > 0) {
      setCoupons([...coupons, {
        id: Date.now(),
        code: newCoupon.code.toUpperCase(),
        discount: newCoupon.discount,
        items: newCoupon.items.split(",").map(i => i.trim())
      }]);
      setNewCoupon({ code: "", discount: 0, items: "" });
    }
  };

  const deleteCoupon = (id: number) => {
    setCoupons(coupons.filter(c => c.id !== id));
  };

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
      oldPrice: "65₽",
      features: ["🎭 Надеть блок на голову: /hat", "👥 Игроки рядом: /near"],
      color: "from-emerald-400 to-teal-500",
      discount: 25
    },
    { 
      name: "Orion", 
      price: "299₽",
      oldPrice: "399₽",
      features: ["🛡️ Дон-панель: /orion", "🎁 Подарить донат: /grant", "📊 Статистика аккаунтов: /dupeip"],
      color: "from-blue-500 to-indigo-600",
      discount: 25
    },
    { 
      name: "Xozyain", 
      price: "219₽",
      oldPrice: "292₽",
      features: ["⚡ Ударить молнией: /thor", "🌧️ Штормовая погода: /rain", "❤️ Исцелить себя: /heal", "📍 Установить варп: /setwarp", "🚫 Список банов: /banlist"],
      color: "from-green-500 to-emerald-600",
      discount: 25
    },
    { 
      name: "Morok", 
      price: "500₽",
      oldPrice: "667₽",
      features: ["🛡️ Дон-панель: /morok", "⬆️ Телепорт наверх: /top", "📋 Инфо по мутам/банам: /checkmute /checkban", "💰 Игровая зарплата: /salary"],
      special: true,
      color: "from-red-600 to-red-800",
      discount: 25
    },
    { 
      name: "Custom", 
      price: "799₽",
      oldPrice: "1065₽",
      features: ["🎨 Индивидуальный донат по вашему запросу", "📧 Киньте админу фото с покупкой", "⏱️ Получите привилегию за 2 дня", "👑 Права как у Morok"],
      color: "from-purple-500 to-pink-600",
      discount: 25
    },
  ];

  const exclusiveDonate = {
    name: "Christmas",
    price: "399₽",
    oldPrice: "532₽",
    features: ["🎄 ЛИМИТИРОВАННЫЙ СТАТУС", "🎁 Все права как у Morok", "🎀 Эксклюзивный набор", "⭐ Эксклюзивный префикс", "💵 Личная зарплата"],
    color: "from-red-600 to-green-600",
    discount: 25
  };

  const casePackages = [
    {
      name: "Донатный кейс",
      price: "79₽",
      oldPrice: "105₽",
      color: "from-amber-500 to-orange-600",
      discount: 25
    },
    {
      name: "Монетный кейс",
      price: "15₽",
      oldPrice: "20₽",
      color: "from-yellow-400 to-amber-500",
      discount: 25
    },
    {
      name: "Кейс с рубинами",
      price: "20₽",
      oldPrice: "27₽",
      color: "from-rose-500 to-red-600",
      discount: 25
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#0f1623] to-[#0a0f1a] relative overflow-hidden">
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/-1 (1) (2).png" 
                alt="AsuxGrief Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                asuxgrief
              </h1>
            </div>
            <div className="flex-1 flex justify-center gap-6">
              <a href="#about" className="hover:text-primary transition-all duration-300 hover:scale-110">О сервере</a>
              <a href="#donate" className="hover:text-primary transition-all duration-300 hover:scale-110">Донаты</a>
              <a href="#rules" className="hover:text-primary transition-all duration-300 hover:scale-110">Правила</a>
            </div>
            <div className="flex gap-3 items-center">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-muted-foreground hover:text-primary transition-colors"
                title={isDarkMode ? "Светлая тема" : "Тёмная тема"}
              >
                <Icon name={isDarkMode ? "Sun" : "Moon"} size={20} />
              </button>
              <button
                onClick={() => setShowCart(true)}
                className="text-muted-foreground hover:text-primary transition-colors relative"
              >
                <Icon name="ShoppingCart" size={20} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-primary text-white text-xs">
                    {cart.length}
                  </Badge>
                )}
              </button>
              <button
                onClick={() => setShowAdminPanel(true)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Lock" size={20} />
              </button>
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
            <div className="inline-flex items-center gap-2 bg-card border border-primary/30 rounded-lg px-6 py-3 mb-6">
              <Icon name="Server" size={20} className="text-primary" />
              <code className="text-lg font-mono text-primary">asuxgrief.ru</code>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href={telegramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white px-6 py-3 rounded-lg transition-opacity"
              >
                <Icon name="Send" size={20} />
                <span className="font-semibold">Telegram сообщество</span>
              </a>
              <a 
                href={discordLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg transition-opacity"
              >
                <Icon name="MessageCircle" size={20} />
                <span className="font-semibold">Discord сообщество</span>
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Активное комьюнити</h3>
              <p className="text-muted-foreground">Более 50 игроков в нашем Discord сообществе. Новые друзья каждый день!</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Pickaxe" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гриф режим</h3>
              <p className="text-muted-foreground">Уникальный гриф-сервер с честной игрой и без привилегий!</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Донат привилегии</h2>
            <p className="text-muted-foreground">Поддержите сервер и получите уникальные возможности</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {donatePackages.map((pkg, idx) => (
              <Card 
                key={idx}
                className={`p-5 bg-gradient-to-br ${pkg.color} border-0 relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {pkg.discount && (
                  <Badge className="absolute top-3 right-3 bg-red-600 text-white border-0 text-xs font-bold animate-pulse shadow-lg">
                    🎄 -{pkg.discount}% НОВЫЙ ГОД
                  </Badge>
                )}
                {pkg.popular && !pkg.discount && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500 text-black border-0 text-xs">
                    🔥 Популярное
                  </Badge>
                )}
                {pkg.limited && !pkg.discount && (
                  <Badge className="absolute top-3 right-3 bg-amber-500 text-white border-0 text-xs animate-pulse">
                    ⏰ Лимитед
                  </Badge>
                )}
                {pkg.special && !pkg.discount && (
                  <Badge className="absolute top-3 right-3 bg-cyan-400 text-black border-0 text-xs">
                    ⭐ Спецпредложение
                  </Badge>
                )}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-white">{pkg.name}</h3>
                  <div className="mb-4">
                    {pkg.oldPrice && (
                      <p className="text-lg text-white/60 line-through">{pkg.oldPrice}</p>
                    )}
                    <p className="text-3xl font-bold text-white">{pkg.price}</p>
                  </div>
                  <ul className="space-y-2 mb-4 min-h-[120px]">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-white/90 text-sm">
                        <Icon name="Check" size={16} className="text-white mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => addToCart({ ...pkg, type: 'donate' })}
                    className="w-full bg-white text-black hover:bg-white/90 text-sm py-2"
                  >
                    В корзину
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-4xl font-bold text-center mb-4">🎄 Эксклюзивный донат</h3>
            <p className="text-center text-muted-foreground mb-8">Ограниченное предложение только в новогодний период</p>
            <div className="max-w-2xl mx-auto">
              <Card 
                className={`p-8 bg-gradient-to-br ${exclusiveDonate.color} border-0 relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in`}
              >
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  <Badge className="bg-red-600 text-white border-0 font-bold animate-pulse shadow-lg">
                    🎄 -25% НОВЫЙ ГОД
                  </Badge>
                  <Badge className="bg-amber-500 text-white border-0 animate-pulse">
                    ⏰ ЛИМИТИРОВАННЫЙ
                  </Badge>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold mb-3 text-white">{exclusiveDonate.name}</h3>
                  <div className="mb-6">
                    {exclusiveDonate.oldPrice && (
                      <p className="text-2xl text-white/60 line-through mb-2">{exclusiveDonate.oldPrice}</p>
                    )}
                    <p className="text-5xl font-bold text-white">{exclusiveDonate.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6 text-left max-w-md mx-auto">
                    {exclusiveDonate.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-white text-base">
                        <Icon name="Star" size={20} className="text-yellow-300 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => addToCart({ ...exclusiveDonate, type: 'donate' })}
                    className="w-full bg-white text-black hover:bg-white/90 text-lg py-6 font-bold"
                  >
                    🎁 Купить эксклюзивный донат
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">Игровые кейсы</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {casePackages.map((caseItem, idx) => (
                <Card 
                  key={idx}
                  className={`p-6 bg-gradient-to-br ${caseItem.color} border-0 relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  {caseItem.discount && (
                    <Badge className="absolute top-3 right-3 bg-red-600 text-white border-0 text-xs font-bold animate-pulse shadow-lg">
                      🎄 -{caseItem.discount}% НОВЫЙ ГОД
                    </Badge>
                  )}
                  <div className="relative z-10 text-center">
                    <div className="mb-4 flex justify-center">
                      <img 
                        src="https://cdn.poehali.dev/projects/98412efd-c0e5-43db-be0c-3b985056cb51/files/beb736df-3613-41cf-94bf-98a68bc62e10.jpg"
                        alt="Кейс"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{caseItem.name}</h3>
                    <div className="mb-4">
                      {caseItem.oldPrice && (
                        <p className="text-base text-white/60 line-through">{caseItem.oldPrice}</p>
                      )}
                      <p className="text-3xl font-bold text-white">{caseItem.price}</p>
                    </div>
                    <Button 
                      onClick={() => addToCart({ ...caseItem, type: 'case' })}
                      className="w-full bg-white text-black hover:bg-white/90 font-bold"
                    >
                      Приобрести
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-red-500 to-pink-600 border-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in">
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
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[1, 5, 10, 50, 100, 150].map((amount) => (
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
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12">Правила сервера AsuxGrief</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {rules.map((rule, idx) => (
              <Card key={idx} className="p-4 bg-card border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 0.02}s` }}>
                <div className="flex flex-col gap-2">
                  <div className="w-full h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{rule.section}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{rule.title}</h3>
                    <p className="text-muted-foreground text-xs">{rule.description}</p>
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
        <div className="fixed bottom-6 right-6 z-50 space-y-4">
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
            </div>
          </Card>

          <Card className="p-6 bg-card border-primary/50 shadow-2xl max-w-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon name="Ticket" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Управление купонами</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCoupons(!showCoupons)}
              >
                <Icon name={showCoupons ? "ChevronDown" : "ChevronUp"} size={20} />
              </Button>
            </div>
            {showCoupons && (
              <div className="space-y-4">
                <div className="space-y-2">
                  {coupons.map((coupon) => (
                    <div key={coupon.id} className="flex items-center justify-between bg-muted p-3 rounded-lg">
                      <div>
                        <p className="font-bold text-sm">{coupon.code}</p>
                        <p className="text-xs text-muted-foreground">
                          {coupon.discount}% на {coupon.items.join(", ")}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteCoupon(coupon.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 pt-4 border-t">
                  <input
                    type="text"
                    placeholder="Код купона"
                    value={newCoupon.code}
                    onChange={(e) => setNewCoupon({...newCoupon, code: e.target.value})}
                    className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Скидка %"
                    value={newCoupon.discount || ""}
                    onChange={(e) => setNewCoupon({...newCoupon, discount: parseInt(e.target.value) || 0})}
                    className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Товары (через запятую или 'all')"
                    value={newCoupon.items}
                    onChange={(e) => setNewCoupon({...newCoupon, items: e.target.value})}
                    className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm"
                  />
                  <Button onClick={addCoupon} className="w-full" size="sm">
                    Добавить купон
                  </Button>
                </div>
              </div>
            )}
          </Card>

          <Card className="p-6 bg-card border-primary/50 shadow-2xl max-w-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon name="Settings" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Настройки сайта</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSettingsPanel(!showSettingsPanel)}
              >
                <Icon name={showSettingsPanel ? "ChevronDown" : "ChevronUp"} size={20} />
              </Button>
            </div>
            {showSettingsPanel && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Ссылки на соцсети</label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Telegram"
                      value={telegramLink}
                      onChange={(e) => setTelegramLink(e.target.value)}
                      className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Discord"
                      value={discordLink}
                      onChange={(e) => setDiscordLink(e.target.value)}
                      className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="FunPay"
                      value={funpayLink}
                      onChange={(e) => setFunpayLink(e.target.value)}
                      className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </Card>

          <Card className="p-6 bg-card border-primary/50 shadow-2xl max-w-md max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon name="Package" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Управление донатами</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowDonatesPanel(!showDonatesPanel)}
              >
                <Icon name={showDonatesPanel ? "ChevronDown" : "ChevronUp"} size={20} />
              </Button>
            </div>
            {showDonatesPanel && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Здесь вы можете редактировать донат-пакеты. Изменения применяются сразу на сайте.
                </p>
                <div className="space-y-3">
                  {donatePackages.map((pkg, idx) => (
                    <div key={idx} className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold">{pkg.name}</p>
                        <Badge variant="outline">{pkg.price}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {pkg.features.length} функций
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => setEditingDonate(pkg)}
                      >
                        <Icon name="Edit" size={14} className="mr-2" />
                        Редактировать
                      </Button>
                    </div>
                  ))}
                  
                  <div className="border-t pt-3">
                    <p className="font-bold mb-2">Эксклюзивный донат</p>
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold">{exclusiveDonate.name}</p>
                        <Badge variant="outline">{exclusiveDonate.price}</Badge>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => setEditingDonate(exclusiveDonate)}
                      >
                        <Icon name="Edit" size={14} className="mr-2" />
                        Редактировать
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>


        </div>
      )}

      {showCart && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 bg-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Корзина</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCart(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="ShoppingCart" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Корзина пуста</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <Card key={item.id} className="p-4 bg-muted">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.type === 'donate' ? 'Донат' : item.type === 'case' ? 'Кейс' : 'Рубины'}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            {appliedCoupon && (appliedCoupon.items.includes("all") || appliedCoupon.items.includes(item.name)) && (
                              <p className="text-xs text-muted-foreground line-through">{item.price}</p>
                            )}
                            <p className="font-bold text-primary">{getDiscountedPrice(item)}₽</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Ваш никнейм на сервере</label>
                    <input
                      type="text"
                      placeholder="Введите свой никнейм"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Введите код купона"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 bg-muted border border-border rounded-lg px-4 py-2"
                    />
                    <Button onClick={applyCoupon}>
                      Применить
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <p className="text-sm text-green-500">
                        ✓ Купон {appliedCoupon.code} применён! Скидка {appliedCoupon.discount}%
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xl font-bold">
                    <span>Итого:</span>
                    <span className="text-primary">{getTotalPrice()}₽</span>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-3">Методы оплаты:</p>
                    <div className="space-y-3">
                      <a 
                        href={funpayLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white px-6 py-3 rounded-lg transition-opacity w-full"
                      >
                        <Icon name="CreditCard" size={20} />
                        <span className="font-semibold">Оплатить через FunPay</span>
                      </a>
                      <Button
                        onClick={() => setShowSBPPayment(true)}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 text-white px-6 py-3"
                      >
                        <Icon name="QrCode" size={20} />
                        <span className="font-semibold">Оплатить через СБП</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      )}

      {showSBPPayment && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-8 bg-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Оплата через СБП</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSBPPayment(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <img 
                  src="https://cdn.poehali.dev/files/photo_2025-12-30_16-25-58.jpg"
                  alt="QR-код для оплаты через СБП"
                  className="w-full rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">Сумма к оплате:</span>
                    <span className="text-2xl font-bold text-primary">{getTotalPrice()}₽</span>
                  </div>
                  {appliedCoupon && (
                    <p className="text-xs text-green-500">
                      ✓ Применён купон {appliedCoupon.code} ({appliedCoupon.discount}% скидка)
                    </p>
                  )}
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Icon name="Smartphone" size={16} className="mt-0.5 flex-shrink-0" />
                    <p>Откройте приложение банка на телефоне</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="QrCode" size={16} className="mt-0.5 flex-shrink-0" />
                    <p>Отсканируйте QR-код</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0" />
                    <p>Подтвердите платёж в приложении</p>
                  </div>
                </div>
                
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <p className="text-xs text-amber-500">
                    ⚠️ После оплаты напишите администратору с подтверждением платежа для получения покупки
                  </p>
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