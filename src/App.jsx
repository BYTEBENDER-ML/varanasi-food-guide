import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, TrendingUp, BookOpen, MessageSquare } from 'lucide-react';

const VaranasiFoodGuide = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [selectedFood, setSelectedFood] = useState(null);
  const [slangInput, setSlangInput] = useState('');
  const [translatedSlang, setTranslatedSlang] = useState('');

  const foodData = [
    {
      id: 1,
      name: 'Kachori Sabzi',
      local: 'काचोरी सब्जी',
      slang: 'Bharpoor Kachori',
      area: 'Kachori Gali, Vishwanath Lane',
      time: '6 AM - 11 AM',
      price: '₹30-50',
      traffic: 'Low before 8 AM',
      rating: 4.8,
      description: 'Crispy fried kachori served with spicy potato curry. A breakfast staple.',
      cultural: 'Traditionally eaten standing at roadside stalls, best enjoyed with chai.',
      image: '🥟'
    },
    {
      id: 2,
      name: 'Tamatar Chaat',
      local: 'टमाटर चाट',
      slang: 'Laal Chaat',
      area: 'Dashashwamedh Ghat',
      time: '5 PM - 10 PM',
      price: '₹40-60',
      traffic: 'Heavy 6-8 PM',
      rating: 4.9,
      description: 'Unique tomato-based chaat with spices, a Varanasi specialty.',
      cultural: 'Evening snack after Ganga Aarti, eaten with small wooden spoon.',
      image: '🍅'
    },
    {
      id: 3,
      name: 'Banarasi Paan',
      local: 'बनारसी पान',
      slang: 'Meetha Paan',
      area: 'Godowlia, Lanka',
      time: '10 AM - 11 PM',
      price: '₹20-200',
      traffic: 'Moderate all day',
      rating: 5.0,
      description: 'Betel leaf with gulkand, coconut, and various ingredients.',
      cultural: 'Post-meal tradition, fold and eat in one go. Spit carefully!',
      image: '🌿'
    },
    {
      id: 4,
      name: 'Chooda Matar',
      local: 'चूड़ा मटर',
      slang: 'Chura Sabji',
      area: 'Luxa, Bengali Tola',
      time: '7 AM - 12 PM',
      price: '₹25-40',
      traffic: 'Low morning',
      rating: 4.6,
      description: 'Flattened rice with spiced peas, winter morning favorite.',
      cultural: 'Popular in cold season (Nov-Feb), eaten with fingers from dona (leaf bowl).',
      image: '🍚'
    },
    {
      id: 5,
      name: 'Malaiyo',
      local: 'मलाइयो',
      slang: 'Nimish',
      area: 'Nadesar, Sigra',
      time: '6 AM - 10 AM (Dec-Feb only)',
      price: '₹40-80',
      traffic: 'High on weekends',
      rating: 4.9,
      description: 'Creamy milk foam dessert, available only in winter mornings.',
      cultural: 'Seasonal delicacy made from dew-chilled milk. Must try before 9 AM!',
      image: '☁️'
    },
    {
      id: 6,
      name: 'Launglata',
      local: 'लौंगलता',
      slang: 'Meetha Lata',
      area: 'Thateri Bazaar',
      time: '9 AM - 8 PM',
      price: '₹60-100/kg',
      traffic: 'Moderate',
      rating: 4.7,
      description: 'Sweet crispy pastry with clove flavor, perfect tea snack.',
      cultural: 'Traditional gift item for guests, breaks with satisfying crunch.',
      image: '🥐'
    }
  ];

  const slangDictionary = {
    'kachori': 'Crispy fried bread stuffed with spiced lentils',
    'chaat': 'Savory snack with tangy-spicy flavors',
    'paan': 'Betel leaf preparation, digestive after meals',
    'ghat': 'Steps leading to the Ganges river',
    'aarti': 'Evening prayer ceremony with fire lamps',
    'sabzi': 'Vegetable curry or side dish',
    'meetha': 'Sweet flavored',
    'tikha': 'Spicy/hot flavored',
    'bharpoor': 'Filling, substantial, heavy',
    'thela': 'Street food cart',
    'dona': 'Disposable plate made from leaves',
    'gulkand': 'Rose petal preserve',
    'nimish': 'Milk foam dessert (same as Malaiyo)',
    'lal': 'Red (used for tomato chaat)',
    'chura': 'Flattened rice/poha'
  };

  const translateSlang = (input) => {
    const words = input.toLowerCase().split(' ');
    const translations = words.map(word => 
      slangDictionary[word] || word
    );
    return translations.join(' → ');
  };

  const handleSlangTranslate = () => {
    const result = translateSlang(slangInput);
    setTranslatedSlang(result);
  };

  const getCurrentTimeRecommendations = () => {
    const now = new Date();
    const hour = now.getHours();
    
    if (hour >= 6 && hour < 11) {
      return foodData.filter(f => f.time.includes('AM'));
    } else if (hour >= 17 && hour < 22) {
      return foodData.filter(f => f.time.includes('PM'));
    }
    return foodData;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">🕉️ Varanasi Street Food Guide</h1>
          <p className="text-orange-100">Your local guide to authentic Banarasi खाना</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto mt-6 px-4">
        <div className="flex gap-2 bg-white rounded-lg p-2 shadow-md">
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'explore' 
                ? 'bg-orange-500 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Search className="inline mr-2" size={18} />
            Explore Foods
          </button>
          <button
            onClick={() => setActiveTab('slang')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'slang' 
                ? 'bg-orange-500 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="inline mr-2" size={18} />
            Slang Translator
          </button>
          <button
            onClick={() => setActiveTab('now')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'now' 
                ? 'bg-orange-500 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Clock className="inline mr-2" size={18} />
            Open Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-6 px-4 pb-8">
        {/* Explore Tab */}
        {activeTab === 'explore' && (
          <div className="grid md:grid-cols-2 gap-4">
            {foodData.map(food => (
              <div 
                key={food.id}
                onClick={() => setSelectedFood(food)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border-2 border-transparent hover:border-orange-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{food.image}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{food.name}</h3>
                      <p className="text-sm text-gray-500">{food.local}</p>
                      <p className="text-xs text-orange-600 font-medium mt-1">"{food.slang}"</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded">
                    <Star className="text-orange-500" size={14} fill="currentColor" />
                    <span className="text-sm font-bold text-orange-700">{food.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{food.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2 text-orange-500" />
                    {food.area}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2 text-orange-500" />
                    {food.time}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{food.price}</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      {food.traffic}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Slang Translator Tab */}
        {activeTab === 'slang' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Banarasi Food Slang Translator
                </h2>
                <p className="text-gray-600">
                  Learn local food terms used by Varanasi residents
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter local term or slang:
                  </label>
                  <input
                    type="text"
                    value={slangInput}
                    onChange={(e) => setSlangInput(e.target.value)}
                    placeholder="Try: kachori, meetha, paan, tikha, chaat"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <button
                  onClick={handleSlangTranslate}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Translate
                </button>

                {translatedSlang && (
                  <div className="mt-6 p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <h3 className="font-bold text-gray-700 mb-2">Translation:</h3>
                    <p className="text-gray-800 text-lg">{translatedSlang}</p>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-gray-800 mb-4">Common Banarasi Food Terms:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(slangDictionary).slice(0, 10).map(([term, meaning]) => (
                    <div key={term} className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-orange-600">{term}</p>
                      <p className="text-sm text-gray-600">{meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Open Now Tab */}
        {activeTab === 'now' && (
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Available Right Now</h2>
                  <p className="text-gray-600 mt-1">Based on current time and traffic patterns</p>
                </div>
                <TrendingUp className="text-green-500" size={32} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {getCurrentTimeRecommendations().map(food => (
                <div key={food.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{food.image}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{food.name}</h3>
                      <p className="text-sm text-gray-500">{food.local}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">
                          OPEN
                        </span>
                        <span className="text-xs text-gray-600">{food.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <BookOpen className="text-orange-600 mt-1" size={16} />
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Local Tip:</p>
                        <p className="text-sm text-gray-600">{food.cultural}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-orange-500" />
                      <span className="text-sm text-gray-600">{food.area}</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{food.price}</span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500">Traffic: <span className="font-medium">{food.traffic}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Selected Food Modal */}
      {selectedFood && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedFood(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-96 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-6xl">{selectedFood.image}</span>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{selectedFood.name}</h2>
                  <p className="text-lg text-gray-500">{selectedFood.local}</p>
                  <p className="text-sm text-orange-600 font-medium mt-1">
                    Local slang: "{selectedFood.slang}"
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedFood(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-700 mb-2">Description:</h3>
                <p className="text-gray-600">{selectedFood.description}</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <BookOpen size={18} className="text-orange-600" />
                  Cultural Context:
                </h3>
                <p className="text-gray-600">{selectedFood.cultural}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Location:</h4>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin size={16} className="text-orange-500" />
                    {selectedFood.area}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Best Time:</h4>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Clock size={16} className="text-orange-500" />
                    {selectedFood.time}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Price Range:</h4>
                  <p className="text-green-600 font-bold text-lg">{selectedFood.price}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Traffic:</h4>
                  <p className="text-gray-600">{selectedFood.traffic}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VaranasiFoodGuide;